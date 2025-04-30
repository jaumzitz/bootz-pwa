import styled from "styled-components"

const SpanStyled = styled.span`
	font-family: var(--default-label-font);
	font-size: var(--default-font-size);
	color: var(--default-font-color);
`
export function Span({ children }) {
    
    return (
        <SpanStyled>{children}</SpanStyled>
    )
}