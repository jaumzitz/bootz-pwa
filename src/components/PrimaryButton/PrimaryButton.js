import styled, { css } from "styled-components";

import {Spinner} from '../Spinner/Spinner'

// const ButtonStyled = styled.button`
//     background-color: var(--primary-color);
//     font-family: var(--default-label-font);
//     font-size: var(--default-font-size);
//     padding: 1rem 1rem;
//     width: ${({width}) => width || `100%`};
//     color: white;
//     border-radius: 60px;
//     border: none;
    
// `


const ButtonStyled = styled.button`
  padding: 1rem 1.5rem;
  border-radius: 60px;
  font-family: var(--default-label-font);
  font-size: var(--default-font-size);
  border: none;
  background: var(--primary-color);
  color: #fff;
  cursor: pointer;
  width: ${({width}) => width || `100%`};
  transition: background 0.2s, color 0.2s;

  ${({ variant }) =>
    variant === "outlined" &&
    css`
      background: #fff !important;
      color: var(--primary-color) !important;
      border: 2px solid var(--primary-color) !important;
    `}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  &:hover {
        cursor: pointer;
        
    }
`;

export function PrimaryButton({ children, onClick, isLoading, width, variant ="default", iconUrl, ...props }) {


    return (
        <ButtonStyled type="button" onClick={onClick} width={width} variant={variant} disabled={isLoading} {...props}>
                  { iconUrl && <img src={iconUrl}></img> }
                  {isLoading ? <Spinner /> : children}
        </ButtonStyled>
    );
}