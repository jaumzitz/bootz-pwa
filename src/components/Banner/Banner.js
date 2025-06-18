import styled from "styled-components";
import { Title } from "../TextContent/Title/Title";

const BannerContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #d9d9d9;
    padding: 2vh;
    margin: 2vh 4vw;
    border-radius: 14px;
        gap: 4vw;
`

export default function Banner({ icon, title }) {
    return (
        <BannerContainer>
            <img src={icon} style={{ height: '8vh' }} />
            <Title size="small">{title}</Title>
        </BannerContainer>
    )
}