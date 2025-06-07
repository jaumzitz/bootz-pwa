import styled from "styled-components"
import Avatar from "../Profile/Avatar/Avatar"
import { Span } from "../TextContent/Span/Span"
import Description from "../Description/Description"

const CardContainer = styled.div`
    background-color: var(--gray-color);
    padding: 2vh;
    border-radius: 12px;
`

const CardHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;

`

export default function CommentCard() {
    return (
        <>
            <CardContainer>
                <CardHeader>
                    <div style={{display: 'flex', flexDirection: 'row', gap: '8px', alignItems: 'center'}}>

                    <Avatar size='mini' username='jaumzitz' />
                    <Span>Joao Fiorini</Span>
                    </div>
                    <Description>22/05/2025 14:10</Description>
                </CardHeader>
                <Description>
                    Muito tooppp! Amei...
                </Description>
            </CardContainer>
        </>
    )
}