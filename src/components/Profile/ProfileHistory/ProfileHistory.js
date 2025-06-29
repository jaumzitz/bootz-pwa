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

export function ProfileHistory({ data }) {

    const navigate = useNavigate()
    const { username: authenticatedUser, loading } = useAuth()
    const profileUsername = data.username || authenticatedUser
  //  console.log('ProfileHistory', profileUsername, authenticatedUser)

    if (loading) {
        console.log('Obtendo contexto do usuário....')


    }

    const { data: historyData, isLoading, error } = useFetchProfileHistory(profileUsername)

    if (isLoading) {
        console.log('Obtendo histórico de trilhas do usuário...')

    }



    if ((!historyData || historyData.length === 0) && profileUsername === authenticatedUser) {
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


    if (!historyData || historyData.length === 0 && profileUsername !== authenticatedUser) {
        return (
            <>
                
                <HistorySection>
                    <Banner
                        width='90%'
                        direction={'column'}
                        title="Esse usuário ainda não compartilhou nenhuma trilha"
                        description={`Que tal convidar ${data.full_name} para uma trilha e compartilhar suas experiências? 🥰`}>
                    </Banner>
                </HistorySection>
            </>
        )
    }

    return (

        <>
            
            <HistorySection>
                <Title size="medium">Lugares que {data.full_name} visitou</Title>

                {historyData.map((trail) => {
                    return (
                        <>
                            <TrailCard size="big" trail={trail} ></TrailCard>
                        </>
                    )
                })}
            </HistorySection>
        </>
    )
}