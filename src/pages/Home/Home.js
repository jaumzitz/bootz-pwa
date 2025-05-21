import styled from "styled-components";
import { RecommendedSection } from "../../components/RecommendedSection/RecommendedSection";
import { NoScroll } from "../../components/ScreenTemplates/NoScroll";
import { TabBar } from "../../components/TabBar/TabBar";
import Spacer from "../../components/Spacer/Spacer";
import { ChipNavigator } from "../../components/ChipNavigator/ChipNavigator";


const HeaderStyled = styled.header`
        
    flex-direction: column;
    
    
    padding: 4vw;
`

const SearchInput = styled.input`
    display: flex;
    width: 100%;
    padding: 18px 18px;
    justify-content: center;
    align-items: center;
    gap: 20px;
    border-radius: 50px;
    background: var(--gray-color);
    border: none;
    font-family: var(--default-label-font);
    font-size: var(--default-font-size);
`

export function Home() {

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

            <HeaderStyled>

                <SearchInput type="search" placeholder="Busque por uma localização" />
            </HeaderStyled>

            <ChipNavigator />
            <Spacer height={'2vh'} width={0}></Spacer>

            <RecommendedSection id="for-you" label="Para você" trails={trailsForYou}></RecommendedSection>
            <RecommendedSection id="trending-nearby" label="Em alta nas proximidades" trails={trailsTrendingNearby}></RecommendedSection>

            <TabBar></TabBar>
            <Spacer height={'12vh'} width={0}></Spacer>


        </>








    );
}