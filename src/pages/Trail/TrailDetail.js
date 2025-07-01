import styled from "styled-components"
import { Link, useNavigate, useParams } from "react-router-dom"
import { Title } from "../../components/TextContent/Title/Title"
import { Span } from "../../components/TextContent/Span/Span"
import Avatar from "../../components/Profile/Avatar/Avatar"
import TrailGallery from "../../components/TrailGallery/TrailGallery"
import Description from "../../components/Description/Description"
import IconButton from "../../components/IconButton/IconButton"
import TrailCommentsSection from "../../components/TrailCommentsSection/TrailCommentsSection"
import Banner from "../../components/Banner/Banner"
import TrailCategoryChips from "../../components/TrailCategoryChips/TrailCategoryChips"

import { useFetchTrailDetail } from "../../hooks/useFetchTrailDetail"
import { Spinner } from "../../components/Spinner/Spinner"

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
    const navigate = useNavigate()

    const { data: trail, isLoading, error } = useFetchTrailDetail(id)



    if (!trail) {
        console.log('Nao encontrado dados da trilha escolhida...')
        return
    }
    //return <div>Trilha não encontrada ou ainda não carregada.</div>;

    return (

        <>
        

            <IconButton
                onClick={() => navigate(-1)}
                fill="#d9d9d9"
                icon='/assets/icons/close.svg'
                overlay={true} />

            <TrailGallery photos={trail.images} />


            <TrailIdSection>

                <TitleRow>
                    <Title>{trail.name}</Title>
                    <Span bgcolor="#d9d9d9">{trail.length}km</Span>
                </TitleRow>

                <Span style={{ marginTop: '4vh' }}>📍 {trail.city} {trail.state_or_province}</Span>

            </TrailIdSection>

            <UserData>
                <Avatar username={trail.created_by} size="mini"></Avatar>
                <Link to={`/profile/${trail.created_by}`} style={{ textDecoration: "none" }}><Span>Enviado por {trail.created_by}</Span></Link>
            </UserData>

            <TrailDescription>
                <Description>{trail.description}</Description>
            </TrailDescription>

            <TrailCategoryChips options={trail.categories} />
            {trail.categories.length > 0 &&
                <>
                    <TrailDescription>
                        <Description><i>As classificações dessa trilha são baseadas na opinião do usuário que a enviou.</i></Description>
                    </TrailDescription>

                </>
            }

            <TrailCommentsSection trailId={id} totalComments={trail.comments_count} />
            <div style={{margin: '4vh 4vw'}}>
            <Banner width={'auto'} icon="/assets/icons/3d-arrow.png" title="Em breve você poderá ver essa trilha no mapa!" />
                </div>

        </>
    )
}