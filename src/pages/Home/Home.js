import styled from "styled-components";
import { Chip } from "../../components/Chip/Chip";
import { RecommendedSection } from "../../components/RecommendedSection/RecommendedSection";


const HeaderStyled = styled.header`
        
    flex-direction: column;
    background-color: #F8F9FB;
    width: 100%;

`

const SearchInput = styled.input`
    display: flex;
    width: 100%;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 20px;
    border-radius: 50px;
    background: var(--gray-color);
    border: none;
    font-family: var(--default-title-font);
    margin-bottom: 16px;
`

const ChipSelector = styled.div`
    display: flex;
    flex-wrap: nowrap; /* Impede quebra de linha */
    margin-bottom: 16px;
    overflow-x: auto; /* Adiciona rolagem horizontal */
    white-space: nowrap; /* Impede quebra de linha */
    padding-bottom: 8px; /* Espaço extra para evitar corte na rolagem */

    &::-webkit-scrollbar {
        height: 6px; /* Altura da barra de rolagem */
    }

    &::-webkit-scrollbar-thumb {
        background: transparent
    }

    &::-webkit-scrollbar-track {
        background: transparent; /* Fundo da barra de rolagem */
    }
`



export function Home() {


    const chipOptions = [
        'Praia',
        'Montanha',
        'Camping',
        'Cachoeira'
    ]



    return (
        <>
            <HeaderStyled>
                <SearchInput type="search" placeholder="Busque por uma localização" />
                <ChipSelector>
                    {chipOptions.map((option) => { return <Chip key={option} id={option} label={option}></Chip> })}
                </ChipSelector>

            </HeaderStyled>
            <RecommendedSection id="for-you" label="Para você"></RecommendedSection>
            

        </>
    );
}