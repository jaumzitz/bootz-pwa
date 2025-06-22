import styled from "styled-components";
import { Title } from "../TextContent/Title/Title";
import Description from "../Description/Description";

const BannerContainer = styled.div`
    display: flex;
    flex-direction: 'column';
    align-items: center;
    background-color: var(--gray-color);
    padding:  2vh;
    
    width: 100%;
    border-radius: 14px;
        gap: 4vw;
`

const TextContainer = styled.div`
    display: flex;
    
`

export default function Banner({ icon, title, description }) {
    return (
        <BannerContainer>
            {icon && <img src={icon} style={{ height: '8vh' }} />}
         

                <Title size="small">{title}</Title>
                <Description>{description}</Description>
        
        </BannerContainer>
    )
}