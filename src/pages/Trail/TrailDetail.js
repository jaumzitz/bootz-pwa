import { useLocation } from "react-router-dom"
import { Title } from "../../components/TextContent/Title/Title"
import { OneRowHeader } from "../../layouts/Layout/Layout"
import { TrailHeader } from "../../components/TrailHeader/TrailHeader"
import styled from "styled-components"
import { Span } from "../../components/TextContent/Span/Span"
import Avatar from "../../components/Profile/Avatar/Avatar"
import TrailGallery from "../../components/TrailGallery/TrailGallery"
import { Chip } from "../../components/Chip/Chip"
import { HorizontalScroll } from "../../components/Scrolls/Scroll"
import { LinkButton } from "../../components/LinkButton/LinkButton"
import { Input } from "../../components/Input/Input"
import Description from "../../components/Description/Description"
import CommentCard from "../../components/CommentCard/CommentCard"
import Spacer from "../../components/Spacer/Spacer"


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

const CommentsSection = styled.section`
    padding: 2vh 4vw;
    
`


export function TrailDetail({ id }) {

    const location = useLocation()


    return (
        <>
            <TrailGallery readOnly={true} />



            {/* <TrailHeader trailId="1" readOnly>

            </TrailHeader> */}

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
                <Span></Span>
            </UserData>

            <TrailDescription>

                <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Description>
            </TrailDescription>

            <HorizontalScroll>

                <Chip key="1" chip={{ label: 'Fácil acesso' }} showIcon={true}></Chip>
                <Chip key="2" chip={{ label: 'Bem sinalizado' }} showIcon={true}></Chip>
                <Chip key="3" chip={{ label: 'Pouco esforço físico' }} showIcon={true}></Chip>

            </HorizontalScroll>

            <TrailDescription>

                <Description>As classificações dessa trilha são baseadas na opinião do usuário que a enviou.</Description>
            </TrailDescription>

            <CommentsSection>
                <div style={{padding: '2vh 0', display: 'flex', justifyContent: 'space-between'}}>

                    <Title>Comentários</Title>
                    <LinkButton>Ver tudo</LinkButton>
                </div>

                <CommentCard></CommentCard>
                <Spacer height={'2vh'}></Spacer>
                <Input placeholder="Deixe um comentário..."></Input>
            </CommentsSection>
        </>
    )
}