import styled from "styled-components"
import { Title } from "../TextContent/Title/Title"
import { LinkButton } from "../LinkButton/LinkButton"
import { HorizontalScroll } from "../Scrolls/Scroll"
import CommentCard from "../CommentCard/CommentCard"
import Spacer from "../Spacer/Spacer"
import { Input } from "../Input/Input"

import { useFetchComments } from "../../hooks/useFetchComments"
import Banner from "../Banner/Banner"


const SectionPadding = styled.section`
    padding: 2vh 4vw;
    
`



const CommentCount = styled.span`
    background-color: #d9d9d9;
    border-radius: 60px;
    font-family: var(--default-label-font);
    padding: 4px 8px;
    font-size: 14px;
    text-align: center;
     display: flex;
    align-items: center;
    justify-content: center;
`


export default function TrailCommentsSection({trailId, totalComments}) {

    
    const {data: comments = [], isLoading, error} = useFetchComments(trailId)
    console.log(comments, isLoading, error)

    return (
        <>
            <SectionPadding>
                <div style={{ display: 'flex', justifyContent: 'space-between',  alignItems: 'center' }}>
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '8px'}}>

                        <Title>Comentários

                        </Title>
                        <CommentCount>{totalComments}</CommentCount>
                    </div>
                    
                    <LinkButton>Ver tudo</LinkButton>
                </div>
            </SectionPadding>

            <HorizontalScroll>
            
                 {comments.length == 0 ? <Banner title="O que você achou desse lugar?" description="Seja o primeiro a comentar!"/> :
                 comments.map(comment => <CommentCard key={comment.id} comment={comment}/>) }




            </HorizontalScroll>
            <Spacer height={'2vh'}></Spacer>

            <SectionPadding>

                <Input id="new-comment" placeholder="Deixe um comentário..."></Input>
                <LinkButton>Enviar</LinkButton>
                
            </SectionPadding>
        </>
    )
}