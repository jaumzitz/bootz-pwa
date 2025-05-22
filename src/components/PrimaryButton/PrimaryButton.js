import styled from "styled-components";



const ButtonStyled = styled.button`
    background-color: var(--primary-color);
    font-family: var(--default-label-font);
    font-size: var(--default-font-size);
    padding: 1rem 1rem;
    width: ${({width}) => width || `100%`};
    color: white;
    border-radius: 60px;
    border: none;
    &:hover {
        cursor: pointer;
        
    }
`

export function PrimaryButton({ children, onClick, isLoading, width }) {


    return (
        <ButtonStyled type="button" onClick={onClick} width={width}>
            { !isLoading ? children : <img src='/spinner.svg' alt="Loading..." style={{ width: '20px', height: '20px' }} /> }
        </ButtonStyled>
    );
}