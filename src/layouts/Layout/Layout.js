import styled from "styled-components";
import IconButton from "../../components/IconButton/IconButton";
import { NoScroll } from "../../components/Scrolls/Scroll";
import Spacer from "../../components/Spacer/Spacer";
import { Span } from "../../components/TextContent/Span/Span";
import { Title } from "../../components/TextContent/Title/Title";


const TwoRowHeaderContainer = styled.div` 
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

const MainContainer = styled.main`
    padding: 2vh 4vw;
`

const OneRowHeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 2vh;
`;


export function Layout({ leftButtonIcon, leftButtonAction, title, subtitle, children }) {
    return (


        <MainContainer>
            <TwoRowHeaderContainer>
                {leftButtonIcon && <IconButton icon={leftButtonIcon} onClick={leftButtonAction}></IconButton>}

                <HeaderTitle>
                    <Title>{title}</Title>
                    <Span>{subtitle}</Span>
                </HeaderTitle>
                <Spacer height="0vh" />
            </TwoRowHeaderContainer>
            <section>
                {children}
            </section>
        </MainContainer>

    )

}

export function OneRowHeader( { leftButtonIcon, leftButtonAction, title, children }) {
    return (


        <MainContainer>
            <OneRowHeaderContainer>
                {leftButtonIcon && <IconButton icon={leftButtonIcon} onClick={leftButtonAction}></IconButton>}

                
                    <Title>{title}</Title>
                
                <Spacer height="0vh" />
            </OneRowHeaderContainer>
            <section>
                {children}
            </section>
        </MainContainer>

    )
}