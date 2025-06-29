import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import SearchBar from "../../components/SearhcBar/SearchBar.js";
import { ChipNavigator } from "../../components/ChipNavigator/ChipNavigator.js";
import styled from "styled-components";
import Spacer from "../../components/Spacer/Spacer.js";
import { PrimaryButton } from "../../components/PrimaryButton/PrimaryButton.js";
import { Title } from "../../components/TextContent/Title/Title.js";
import { TrailCard } from "../../components/TrailCard/TrailCard.js";
import { fetchSearch } from "../../hooks/useFetchSearch.js";
import Banner from "../../components/Banner/Banner.js";
import IconButton from "../../components/IconButton/IconButton.js";
import { Spinner } from "../../components/Spinner/Spinner.js";
import { fetchTrailByCategory } from "../../services/fetchTrailByCategory.js"; // ajuste o caminho conforme seu projeto
import { PlacesResults } from "./PlacesResults.js";
import { fetchUsers } from "../../services/fetchUsers.js";
import { UsersResults } from "./UsersResults.js";


const HeaderStyled = styled.header`
    flex-direction: row;   
    padding: 0 4vw 4vw 4vw;
    margin-top: 4vh;
    display: flex;
    align-items: center;
    gap: 8px;
`;

const ToggleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin: 0vh 4vw 0 4vw;
`;




export function Explore() {
    const navigate = useNavigate();
    const location = useLocation();
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [typeOfSearch, setTypeOfSearch] = useState('places'); // 'places' ou 'people'
    const debounceRef = useRef();
    const searchInputRef = useRef();

    // Foca no SearchBar ao carregar a página
    useEffect(() => {
        if (searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, []);

    // Remove o parâmetro enviroment da URL ao trocar para 'people'
    useEffect(() => {
        if (typeOfSearch === "people") {
            const params = new URLSearchParams(location.search);
            if (params.has("enviroment")) {
                params.delete("enviroment");
                navigate(`${location.pathname}?${params.toString()}`, { replace: true });
            }
        }
    }, [typeOfSearch, location, navigate]);

    // Atualiza resultados ao mudar o parâmetro enviroment na URL
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const envParam = params.get("enviroment");

        if (typeOfSearch === "places" && envParam) {
            setLoading(true);
            fetchTrailByCategory({ category_id: 'enviroment', category_option_id: envParam })
                .then(data => setResults(data || []))
                .finally(() => setLoading(false));
        }

    }, [location.search, typeOfSearch]);

    // Função chamada pelo SearchBar ao digitar
    const handleSearchInput = (value) => {
        const params = new URLSearchParams(location.search);
        params.delete("enviroment"); // Remove o parâmetro enviroment da URL
        navigate(`${location.pathname}?${params.toString()}`, { replace: true });
        
        setLoading(true);
        
        setQuery(value);
        
        if (debounceRef.current) clearTimeout(debounceRef.current);
        debounceRef.current = setTimeout(async () => {
            if (value.trim() === "") {
                setResults([]);
                setLoading(false);
                return;
            }
            setLoading(true);

            if (typeOfSearch === "people") {
                const data = await fetchUsers(value)
                setResults(data || []);

            }

            if (typeOfSearch === "places") {

                const data = await fetchSearch(value);
                setResults(data || []);
            }


            setLoading(false);
        }, 2000);
    };

    const handleToggleSearchType = (type) => {
        setTypeOfSearch(type);
        console.log("Tipo de busca alterado para:", type);
        setQuery(""); // Limpa a busca ao trocar o tipo
        setResults([]); // Limpa os resultados ao trocar o tipo
        if (searchInputRef.current) {
            searchInputRef.current.focus(); // Foca no SearchBar ao trocar o tipo
        }
    }


    return (
        <>
            <HeaderStyled>
                <IconButton icon='/assets/icons/arrow-back.svg' onClick={() => navigate('/home')} />
                <SearchBar
                    onChange={handleSearchInput}
                    value={query}
                    placeholder={typeOfSearch === 'places' ? 'Busque por um local' : 'Busque por um usuário'}
                    inputRef={searchInputRef}
                />
            </HeaderStyled>

            <ToggleContainer>
                <PrimaryButton variant={typeOfSearch !== 'places' ? 'outlined' : ''} onClick={() => handleToggleSearchType('places')} > Lugares</PrimaryButton>
                <PrimaryButton variant={typeOfSearch !== 'people' ? 'outlined' : ''} onClick={() => handleToggleSearchType('people')}>Pessoas</PrimaryButton>
            </ToggleContainer>

            <Spacer height={'2vh'} width={0}></Spacer>

            {
                typeOfSearch === "people" && <UsersResults results={results} loading={loading}/>
            }

            {
                typeOfSearch === "places" && <PlacesResults query={query} results={results} loading={loading} />
            }
        </>
    );
}