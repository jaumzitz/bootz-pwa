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

const commentData = [{
    id: 0,
    fullName: 'Joao Fiorini',
    username: 'jaumzitz',
    commentDate: '22/02/2025 às 12:34',
    commentText: 'Muuito top!! Amei...'
},
{
    id: 1,
    fullName: 'Cesar Junior',
    username: 'cesarwruck',
    commentDate: '20/02/2025 às 20:09',
    commentText: 'Um dos lugares mais incríveis na região!'
}]



export default function CommentCard({ id }) {


    return commentData
            .filter((data) => data.id === id)
            .map((comment) => {
                return (

                    <CardContainer key={comment.id}>
                        <CardHeader>
                            <div style={{ display: 'flex', flexDirection: 'row', gap: '8px', alignItems: 'center' }}>

                                <Avatar size='mini' username={comment.username} />
                                <Span>{comment.fullName}</Span>
                            </div>
                            <Description>{comment.commentDate}</Description>
                        </CardHeader>
                        <Description>
                            {comment.commentText}
                        </Description>
                    </CardContainer>
                )
            })
    

}