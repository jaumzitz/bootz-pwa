import styled from "styled-components"


const Paragraph = styled.p`
    font-family: var(--default-text-font);
    color: var(--text-description-color);
`

export default function Description( {children} ) {
    return (
        <>
        <Paragraph>
            {children}
        </Paragraph>
        </>
    )
}