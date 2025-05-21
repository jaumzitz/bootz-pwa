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

export function PrimaryButton({ children, onClick, isLoading }) {


    return (
        <ButtonStyled type="button" onClick={onClick}>
            { !isLoading ? children : <img src='/spinner.svg' alt="Loading..." style={{ width: '20px', height: '20px' }} /> }
        </ButtonStyled>
    );
}