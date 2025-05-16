import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkButtonStyle = styled.button`
    background: none;
    border: none;
    color: var(--primary-color);
    font-family: var(--default-label-font);
    font-size: var(--default-font-size);
    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`

export function LinkButton({ children, alignment, to }) {
    return (
        <Link to={to}>
            <LinkButtonStyle style={{ textAlign: alignment }} // Use the alignment prop to set text alignment
                type="button"
                className="linkButton"
                
            >
                {children}
            </LinkButtonStyle>
        </Link>
    );
}