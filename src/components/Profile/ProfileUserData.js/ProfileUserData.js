import styled from "styled-components"
import { Title } from "../../TextContent/Title/Title"
import { Span } from "../../TextContent/Span/Span"

const UserData = styled.section`
    margin: 4vw;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 3vw;
`
const KPI = styled.div`
    background-color: var(--gray-color);
    padding: 1.5vh;
    margin: 2vh 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    border-radius: 14px;
`

export function ProfileUserData({data}) {

    return (
        <>
        <UserData>
                <KPI>
                    <Title size={"small"}>{data.total_trails_sent}</Title>
                    <Span>Trilhas</Span>
                </KPI>
                <KPI>
                    <Title size={"small"}>{data.total_followers}</Title>
                    <Span>Seguidores</Span>
                </KPI>
                <KPI>
                    <Title size={"small"}>{data.total_following}</Title>
                    <Span>Seguindo</Span>
                </KPI>
            </UserData>
        </>
    )
}