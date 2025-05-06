import styled from "styled-components";
import { Chip } from "../../components/Chip/Chip";
import { RecommendedSection } from "../../components/RecommendedSection/RecommendedSection";
import { NoScroll } from "../../components/ScreenTemplates/NoScroll";
import { TabBar } from "../../components/TabBar/TabBar";
import Spacer from "../../components/Spacer/Spacer";
import { ChipNavigator } from "../../components/ChipNavigator/ChipNavigator";


const HeaderStyled = styled.header`
        
    flex-direction: column;
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
    font-family: var(--default-label-font);
    font-size: var(--default-font-size);
    margin-bottom: 16px;
`

// const ChipSelector = styled.div`
//     display: flex;
//     flex-wrap: nowrap; /* Impede quebra de linha */
//     margin-bottom: 16px;
//     overflow-x: auto; /* Adiciona rolagem horizontal */
//     white-space: nowrap; /* Impede quebra de linha */
//     padding-bottom: 8px; /* Espaço extra para evitar corte na rolagem */
//     left: 8vw;

//     &::-webkit-scrollbar {
//         height: 6px; /* Altura da barra de rolagem */
//     }

//     &::-webkit-scrollbar-thumb {
//         background: transparent
//     }

//     &::-webkit-scrollbar-track {
//         background: transparent; /* Fundo da barra de rolagem */
//     }
// `




export function Home() {


    // const chipOptions = [
    //     '🏖️ Praia',
    //     '⛰️ Montanha',
    //     '🏕️ Camping',
    //     'Cachoeira'
    // ]

    const trailsForYou = [
        {
            id: 1,
            name: 'Trilha da Praia Vermelha',
            location: 'Penha - SC',
            distance: 1.3,
            enviroment: 'Praia',
            difficulty: 'Fácil',
            imageUrl: '/praia-vermelha-penha.jpg'
        },
        {
            id: 2,
            name: 'Pico da Pedra',
            location: 'Camboriú - SC',
            distance: 3.3,
            enviroment: 'Montanha',
            difficulty: 'Médio',
            imageUrl: '/pico-da-pedra-camboriu.png'
        },
        {
            id: 3,
            name: 'Piscinas Naturais da Barra da Lagoa',
            location: 'Florianópolis - SC',
            distance: 1.3,
            enviroment: 'Praia',
            difficulty: 'Fácil',
            imageUrl: '/piscinas-naturais-floripa.png'
        }
    ]

    const trailsTrendingNearby = [
        {
            id: 4,
            name: 'Cachoeira Seca',
            location: 'Balneário Camboriú - SC',
            distance: 1.3,
            enviroment: 'Cachoeira',
            difficulty: 'Fácil',
            imageUrl: '/cachoeira-seca.jpg'
        },
        {
            id: 5,
            name: 'Parque do Atalaia',
            location: 'Itajaí - SC',
            distance: 3.3,
            enviroment: 'Montanha',
            difficulty: 'Médio',
            imageUrl: '/parque-atalaia.jpg'
        },
        {
            id: 6,
            name: 'Trilha da Praia da Solidão',
            location: 'Itajaí - SC',
            distance: 1.3,
            enviroment: 'Praia',
            difficulty: 'Fácil',
            imageUrl: '/praia-solidao.jpg'
        }
    ]



    return (
        <>
        <NoScroll>

                <HeaderStyled>

                    <SearchInput type="search" placeholder="Busque por uma localização" />
                    <ChipNavigator>
                        

                        
                    </ChipNavigator>
                    

                </HeaderStyled>

        </NoScroll>


            <RecommendedSection id="for-you" label="Para você" trails={trailsForYou}></RecommendedSection>
            <RecommendedSection id="trending-nearby" label="Em alta nas proximidades" trails={trailsTrendingNearby}></RecommendedSection>
        <TabBar></TabBar>
        <Spacer height={'12vh'} width={0}></Spacer>
        </>








    );
}