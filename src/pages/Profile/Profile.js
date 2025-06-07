import styled from "styled-components";
import { UploadFile } from "../../components/UploadFile/UploadFile";
import { Title } from "../../components/TextContent/Title/Title";
import { Span } from "../../components/TextContent/Span/Span";
import { TrailCard } from "../../components/TrailCard/TrailCard";
import IconButton from "../../components/IconButton/IconButton";
import { Layout } from "../../layouts/Layout/Layout";
import { TabBar } from "../../components/TabBar/TabBar";
import Avatar from "../../components/Profile/Avatar/Avatar";

const HeaderImage = styled.header`
    background-color: #aaaaaa;
    height: 40vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow-x: hidden;
    position: relative; /* Torna este elemento referência para posicionamento absoluto */
`

// const Avatar = styled.img`
//     max-height: 20vh;
//     border-radius: 60%;
//     border: 4px solid #dedede;
//     position: absolute;
//     top: 30vh;
//     left: 50vw; /* 50% da largura da viewport */
//     transform: translateX(-50%);
// `;

const AvatarContainer = styled.div`
width: 100%;
    height: 14vh;
`

const Biography = styled.section`
    margin: 0 4vw;
`

const UserData = styled.section`
    margin: 4vw;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 3vw;
`
const KPI = styled.div`
    background-color: var(--gray-color);
    padding: 1.5vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    border-radius: 14px;
`

const HistoryGrid = styled.section`
    margin: 4vh 4vw;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem; /* Espaçamento entre os itens */
`

const HeaderButtons = styled.div`
    position: absolute; /* Posiciona sobre o HeaderImage */
    top: 4vh;          /* Define a distância do topo */
    left: 4vw;         /* Define a distância da esquerda */
    right: 4vw;        /* Garante que o elemento se estenda até a direita */
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    z-index: 1;
`;

const trailsTrendingNearby = [
    {
        id: 4,
        name: 'Cachoeira Seca',
        location: 'Balneário Camboriú - SC',
        distance: 1.3,
        enviroment: 'Cachoeira',
        difficulty: 'Fácil',
        imageUrl: '/assets/images/cachoeira-seca.jpg'
    },
    {
        id: 5,
        name: 'Parque do Atalaia',
        location: 'Itajaí - SC',
        distance: 3.3,
        enviroment: 'Montanha',
        difficulty: 'Médio',
        imageUrl: '/assets/images/parque-atalaia.jpg'
    },
    {
        id: 6,
        name: 'Trilha da Praia da Solidão',
        location: 'Itajaí - SC',
        distance: 1.3,
        enviroment: 'Praia',
        difficulty: 'Fácil',
        imageUrl: '/assets/images/praia-solidao.jpg'
    }
]


export function Profile() {
    return (
        <>

            <>

                <HeaderButtons>

                    <IconButton icon={"assets/icons/settings.svg"} fill></IconButton>
                    {/* <IconButton icon={"assets/icons/arrow-back.svg"} fill></IconButton> */}

                </HeaderButtons>
                <HeaderImage>

                </HeaderImage>
                <AvatarContainer>

                    <Avatar username="jaumzitz" size="big"></Avatar>
                </AvatarContainer>

            </>
            <Biography>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4em' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', gap: '1vh' }}>

                        <Title>Joao Fiorini</Title>
                        <img src="assets/icons/confirmed-identity.svg"></img>
                    </div>
                    <Span>@jaumzitz</Span>
                    <Title size={"small"}>Itajaí, Santa Catarina</Title>

                </div>
            </Biography>

            <UserData>
                <KPI>
                    <Title size={"small"}>23</Title>
                    <Span>Trilhas</Span>
                </KPI>
                <KPI>
                    <Title size={"small"}>125</Title>
                    <Span>Seguidores</Span>
                </KPI>
                <KPI>
                    <Title size={"small"}>68</Title>
                    <Span>Seguindo</Span>
                </KPI>
            </UserData>

            <HistoryGrid>
                <TrailCard trail={trailsTrendingNearby[0]}></TrailCard>
                <TrailCard trail={trailsTrendingNearby[1]}></TrailCard>
                <TrailCard trail={trailsTrendingNearby[1]}></TrailCard>

            </HistoryGrid>
            <TabBar></TabBar>
        </>
    )
}