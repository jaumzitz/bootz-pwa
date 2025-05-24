
import styled from "styled-components"

const ParagraphStyled = styled.p`
    font-family: var(--default-text-font);
    font-size: var(--default-font-size);
    color: var(--default-font-color);
`

export function Paragraph({ children }) {
    return (
        <>
            <ParagraphStyled>{children}</ParagraphStyled>
        </>
    )
}