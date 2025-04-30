import styled from "styled-components"
import { Title } from "../Title/Title"
import { Span } from "../Span/Span"

const CardContainer = styled.div`
    margin-top: 16px;
`

const ImageCard = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 16px;
    `

const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 8px;
`    

const CardDetails = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`    


export function TrailCard({trail}) {
    console.log(trail)

    return (
        <CardContainer>
            <ImageCard src={trail.imageUrl} alt={trail.name} />
            <CardInfo>
                <Title size="small">{trail.name}</Title>
                <CardDetails>
                    <Span>{trail.location}</Span>
                    <Span>{trail.distance} km</Span>
                </CardDetails>

            </CardInfo>
        </CardContainer>
    )
}