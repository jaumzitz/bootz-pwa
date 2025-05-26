import styled from "styled-components"

const NoScrollDiv = styled.div`
    
    
    padding: 2vh 4vw;
    overflow: hidden;
    
`

const VerticalScrollDiv = styled.div`
    margin: 0 8vw;
`

const HorizontalScrollDiv = styled.div`
    display: flex;
    flex-direction: row;
    gap: 4px;
    padding-left: 4vw;
    padding-right: 4vw;
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
        

    /* Esconde a barra de rolagem no Chrome, Safari e Opera */
    &::-webkit-scrollbar {
        display: none;
        height: 0;
        background: transparent;
    }

    /* Esconde a barra de rolagem no Firefox */
    scrollbar-width: none;

    /* Esconde a barra de rolagem no IE e Edge */
    -ms-overflow-style: none;
`


export function NoScroll({ children }) {

    return (
        <NoScrollDiv>{children}</NoScrollDiv>
    )
}

export function VerticalScroll({ children }) {
    return (
        <VerticalScrollDiv>{children}</VerticalScrollDiv>
    )
}

export function HorizontalScroll({ children }) {
    return (
        <HorizontalScrollDiv>{children}</HorizontalScrollDiv>
    )
}
