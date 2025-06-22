import styled from "styled-components"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { Title } from "../../components/TextContent/Title/Title"
import { Span } from "../../components/TextContent/Span/Span"
import Avatar from "../../components/Profile/Avatar/Avatar"
import TrailGallery from "../../components/TrailGallery/TrailGallery"
import Description from "../../components/Description/Description"
import IconButton from "../../components/IconButton/IconButton"
import TrailCommentsSection from "../../components/TrailCommentsSection/TrailCommentsSection"
import Banner from "../../components/Banner/Banner"
import TrailCategoryChips from "../../components/TrailCategoryChips/TrailCategoryChips"
import { useFetchTrails } from "../../hooks/useFetchTrails"
import { useQueryClient } from "@tanstack/react-query"

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

export function TrailDetail() {
    const { id } = useParams();
    const queryClient = useQueryClient();
    
    const navigate = useNavigate()

    // Busca os dados já cacheados na queryKey 'trails'
    const trails = queryClient.getQueryData(['trails', {range: {min: 0, max: 2}}]) || [];

    // Busca a trilha pelo id
    const trail = trails.find(trail => String(trail.id) === String(id));
    console.log(trail)

    if (!trail) return <div>Trilha não encontrada ou ainda não carregada.</div>;

    return (
        <>
            <IconButton
                onClick={() => navigate(-1)}
                fill="#d9d9d9"
                icon='/assets/icons/close.svg'
                overlay={true} />

            <TrailGallery
                photos={trail.images} />


            <TrailIdSection>

                <TitleRow>
                    <Title>{trail.name}</Title>
                    <Span bgcolor="#d9d9d9">{trail.length}</Span>
                </TitleRow>

                <Span style={{ marginTop: '4vh' }}>{trail.city}, {trail.state_or_province}</Span>

            </TrailIdSection>

            <UserData>
                <Avatar username={"jaumzitz"} size="mini"></Avatar>
                <Span>Enviado por {trail.uploaded_by}</Span>
            </UserData>

            <TrailDescription>
                <Description>{trail.description}</Description>
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