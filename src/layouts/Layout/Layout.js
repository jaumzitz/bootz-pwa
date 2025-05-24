import styled from "styled-components";
import IconButton from "../../components/IconButton/IconButton";
import { NoScroll } from "../../components/Scrolls/Scroll";
import Spacer from "../../components/Spacer/Spacer";
import { Span } from "../../components/TextContent/Span/Span";
import { Title } from "../../components/TextContent/Title/Title";


const HeaderContainer = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 6vh;
`;

const HeaderTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2vh;
    
`


export function Layout({ leftButtonIcon, leftButtonAction, title, subtitle, children }) {
    return (
        

        <NoScroll>
            <HeaderContainer>
                {leftButtonIcon && <IconButton icon={leftButtonIcon} onClick={leftButtonAction}></IconButton>}

                <HeaderTitle>
                    <Title>{title}</Title>
                    <Span>{subtitle}</Span>
                </HeaderTitle>
                <Spacer height="0vh"/>
            </HeaderContainer>
            <main>
                {children}
            </main>
        </NoScroll>
        
    )

}