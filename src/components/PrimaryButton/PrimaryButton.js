import styled from "styled-components";


const ButtonStyled = styled.button`
    background-color: var(--primary-color);
    font-family: var(--default-label-font);
    padding: 1rem 1rem;
    color: white;
    border-radius: 60px;
    border: none;
`

export function PrimaryButton({ children, onClick }) {


    return (
        <ButtonStyled
            type="button"
            onClick={onClick}
            className="primaryButton"
        >
            {children}
        </ButtonStyled>
    );
}