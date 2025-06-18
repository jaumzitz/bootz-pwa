import styled from "styled-components"
import { useLocation, useNavigate } from "react-router-dom"
import { Title } from "../../components/TextContent/Title/Title"
import { Span } from "../../components/TextContent/Span/Span"
import Avatar from "../../components/Profile/Avatar/Avatar"
import TrailGallery from "../../components/TrailGallery/TrailGallery"
import Description from "../../components/Description/Description"
import IconButton from "../../components/IconButton/IconButton"
import TrailCommentsSection from "../../components/TrailCommentsSection/TrailCommentsSection"
import Banner from "../../components/Banner/Banner"
import TrailCategoryChips from "../../components/TrailCategoryChips/TrailCategoryChips"


const TitleRow = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2vh;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`

const TrailIdSection = styled.section`
    display: flex;
    flex-direction: column;
    
    padding: 4vh 4vw 2vh 4vw;
    justify-content: space-around;
    align-items: flex-start;
`

const UserData = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    padding-left: 4vw;
`

const TrailDescription = styled.div`
    padding: 2vh 4vw;
`

export function TrailDetail({ id }) {
    const location = useLocation()
    const navigate = useNavigate()

    return (
        <>
            <IconButton
                onClick={() => navigate(-1)}
                fill="#d9d9d9"
                icon='/assets/icons/close.svg'
                overlay={true} />

            <TrailGallery
                photos={[
                    "/assets/images/praia-vermelha-penha.jpg",
                    "/assets/images/parque-atalaia.jpg",
                    "/assets/images/praia-solidao.jpg"
                ]} />


            <TrailIdSection>

                <TitleRow>
                    <Title>Parque do Atalaia</Title>
                    <Span bgcolor="#d9d9d9">2,3km</Span>
                </TitleRow>

                <Span style={{ marginTop: '4vh' }}>Itajaí, Santa Catarina</Span>

            </TrailIdSection>

            <UserData>
                <Avatar username={"jaumzitz"} size="mini"></Avatar>
                <Span>Enviado por Joao Fiorini</Span>
            </UserData>

            <TrailDescription>
                <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Description>
            </TrailDescription>

            <TrailCategoryChips />

            <TrailDescription>
                <Description>As classificações dessa trilha são baseadas na opinião do usuário que a enviou.</Description>
            </TrailDescription>

            <TrailCommentsSection />

            <Banner icon="/assets/icons/3d-arrow.png" title="Em breve você poderá ver essa trilha no mapa!" />

        </>
    )
}