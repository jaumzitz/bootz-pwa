import styled from "styled-components";


const ButtonStyled = styled.button`
    background-color: var(--primary-color);
    font-family: var(--default-label-font);
    font-size: var(--default-font-size);
    padding: 1rem 1rem;
    color: white;
    border-radius: 60px;
    border: none;
    &:hover {
        cursor: pointer;
        
    }
`

export function PrimaryButton({ children, onClick }) {


    return (
        <ButtonStyled type="button" onClick={onClick}>
            {children}
        </ButtonStyled>
    );
}