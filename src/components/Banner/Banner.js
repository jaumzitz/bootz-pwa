import styled from "styled-components";
import { Title } from "../TextContent/Title/Title";
import Description from "../Description/Description";

const BannerContainer = styled.div`
    display: flex;
    flex-direction: ${({ direction }) => direction ? direction : "column"};
    align-items: left;
    background-color: var(--gray-color);
    padding:  2vh;
    
    //width: ${({ width }) => width ? width : "100%"};
    border-radius: 14px;
        gap: 4vw;
`

const TextContainer = styled.div`
    display: flex;
    
`

export default function Banner({ icon, title, description, width, direction}) {
    return (
        <BannerContainer width={width} direction={direction}>
            {icon && <img src={icon} style={{ height: '8vh' }} />}
         

                <Title size="small">{title}</Title>
                <Description>{description}</Description>
        
        </BannerContainer>
    )
}