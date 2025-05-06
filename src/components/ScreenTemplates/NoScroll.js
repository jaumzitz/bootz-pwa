import styled from "styled-components"

const NoScrollDiv = styled.div`
    max-height: 100vh;
    margin: 2vh 4vw;
    
`

const VerticalScrollDiv = styled.div`
    margin: 0 8vw;
`

const HorizontalScrollDiv = styled.div`
    display: flex;
    flex-direction: row;
    gap: 18px;
    width: 100vw;
    overflow-x: auto;
    overflow-y: hidden;
    &::-webkit-scrollbar {
        height: 6px; /* Altura da barra de rolagem */
    }

    &::-webkit-scrollbar-thumb {
        background: transparent
    }

    &::-webkit-scrollbar-track {
        background: transparent; /* Fundo da barra de rolagem */
    }
    
    
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

export function HorizontalScroll( {children} ) {
    return (
        <HorizontalScrollDiv>{children}</HorizontalScrollDiv>
    )
}
