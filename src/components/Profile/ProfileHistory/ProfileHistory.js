import styled from "styled-components"
import { Title } from "../../TextContent/Title/Title"
import { TrailCard } from "../../TrailCard/TrailCard"
import { useAuth } from "../../../context/AuthContext"
import { useFetchProfileHistory } from "../../../hooks/useFetchProfileHistory"
import { PrimaryButton } from "../../PrimaryButton/PrimaryButton"
import Banner from "../../Banner/Banner"
import { useNavigate } from "react-router-dom"

const HistorySection = styled.section`
    margin: 4vh 4vw;
    display: flex;
    flex-direction: column;
    gap: 20px;
    
`

const trailsTrendingNearby = [
    {
        id: 4,
        name: 'Cachoeira Seca',
        location: 'Balneário Camboriú - SC',
        distance: 1.3,
        enviroment: 'Cachoeira',
        images: [{ url: '/assets/images/cachoeira-seca.jpg' }],
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

export function ProfileHistory({ data }) {

    const navigate = useNavigate()
    const { username: authenticatedUser, loading } = useAuth()

    if (loading) {
        console.log('Obtendo contexto do usuário....')
    }

    const { data: historyData, isLoading, error } = useFetchProfileHistory(authenticatedUser)

    if (isLoading) {
        console.log('Carregando histórico das trilhas')
    }

    if (!historyData) {
        return (
            <>
                <HistorySection>
                    <Banner 
                        width='90%'
                        direction={'column'}
                        title="Você ainda não enviou uma trilha" 
                        description="Envie sua primeira trilha e compartilhe suas experiências! 🥰">
                    </Banner>
                    <PrimaryButton onClick={() => navigate('/trail')}>Enviar trilha</PrimaryButton>
                </HistorySection>
            </>
        )
    }

    return (
        <>
            <HistorySection>
                <Title size="medium">Lugares que {data.full_name} visitou</Title>
                <TrailCard size="big" trail={trailsTrendingNearby[0]}></TrailCard>
                {historyData.map((trail) =>  {
                    return (
                        <>
                            <TrailCard size="big" trail={trail} ></TrailCard>
                        </>
                    )
                })}
                {/* <TrailCard trail={trailsTrendingNearby[0]} size="big"></TrailCard>
                <TrailCard trail={trailsTrendingNearby[1]} size="big"></TrailCard>
                <TrailCard trail={trailsTrendingNearby[1]} size="big"></TrailCard> */}
            </HistorySection>
        </>
    )
}