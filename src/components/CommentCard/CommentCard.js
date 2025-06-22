import styled from "styled-components"
import Avatar from "../Profile/Avatar/Avatar"
import { Span } from "../TextContent/Span/Span"
import Description from "../Description/Description"

const CardContainer = styled.div`
    background-color: var(--gray-color);
    padding: 2vh;
    width: 330px;
    border-radius: 12px;
    flex-shrink: 0;
`

const CardHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
    gap: 8px;
    



`




export default function CommentCard({ comment }) {


    return (

        < CardContainer>
            <CardHeader>
                <div style={{ display: 'flex', flexDirection: 'row', gap: '8px', alignItems: 'center' }}>

                    <Avatar size='mini' username={comment.created_by} />
                    <Span>{comment.created_by}</Span>
                </div>
                <Description>{comment.formatted_date}</Description>
            </CardHeader>
            <Description>
                {comment.content}
            </Description>
        </CardContainer >
    )



}