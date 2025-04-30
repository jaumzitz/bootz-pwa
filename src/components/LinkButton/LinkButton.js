import styled from "styled-components";

const LinkButtonStyle = styled.button`
    background: none;
    border: none;
    color: var(--primary-color);
    font-family: var(--default-label-font);
    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`

export function LinkButton({ children, onClick, alignment }) {
    return (
        <LinkButtonStyle style={{ textAlign: alignment }} // Use the alignment prop to set text alignment
            type="button"
            onClick={onClick}
            className="linkButton"
        >
            {children}
        </LinkButtonStyle>
    );
}