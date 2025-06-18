import styled from "styled-components"
import { Title } from "../TextContent/Title/Title"
import { LinkButton } from "../LinkButton/LinkButton"
import { HorizontalScroll } from "../Scrolls/Scroll"
import CommentCard from "../CommentCard/CommentCard"
import Spacer from "../Spacer/Spacer"
import { Input } from "../Input/Input"
import { Span } from "../TextContent/Span/Span"
import { Link } from "react-router-dom"
import { PrimaryButton } from "../PrimaryButton/PrimaryButton"


const SectionPadding = styled.section`
    padding: 2vh 4vw;
    
`

const comments = [
    {
        id: 0

    },
    {
        id: 1
    },

]

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


export default function TrailCommentsSection() {
    return (
        <>
            <SectionPadding>
                <div style={{ display: 'flex', justifyContent: 'space-between',  alignItems: 'center' }}>
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '8px'}}>

                        <Title>Comentários

                        </Title>
                        <CommentCount>6</CommentCount>
                    </div>
                    
                    <LinkButton>Ver tudo</LinkButton>
                </div>
            </SectionPadding>

            <HorizontalScroll>

                {comments.map((comment) => {
                    return <CommentCard id={comment.id}></CommentCard>

                })}




            </HorizontalScroll>
            <Spacer height={'2vh'}></Spacer>

            <SectionPadding>

                <Input id="new-comment" placeholder="Deixe um comentário..."></Input>
                <LinkButton>Enviar</LinkButton>
                
            </SectionPadding>
        </>
    )
}