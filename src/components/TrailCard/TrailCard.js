import styled from "styled-components"
import { Title } from "../TextContent/Title/Title"
import { Span } from "../TextContent/Span/Span"

const CardContainer = styled.div`
    margin-top: 16px;
    padding-right: 16px;
`

const ImageCard = styled.img`
    max-height: 180px;
    max-width: 400px;
    border-radius: 16px;
    box-shadow: 0px 4px 10px 0px rgba(52, 52, 52, 0.30);

    &:hover {
        cursor: pointer;
    }
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