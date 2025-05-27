import styled from "styled-components"
import { PrimaryButton } from "../../components/PrimaryButton/PrimaryButton"


const FooterContainer = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2vh;
        padding-bottom: 4vh;
        
        width: 100%;
        position: fixed;
        bottom: 0;
        background-color: #FFFFFF;
    `
const Line = styled.div`
        width: 100%;
        height: 1px;
        background-color: #E0E0E0;
        margin-bottom: 2vh;

    `

export default function FixedFooter({ primaryButton, children }) {

    return (
        <FooterContainer>
            <Line />
            <PrimaryButton width={primaryButton.width} onClick={primaryButton.onClick} isLoading={primaryButton.isLoading}>{primaryButton.text}</PrimaryButton>
            {children}
        </FooterContainer>
    )
}