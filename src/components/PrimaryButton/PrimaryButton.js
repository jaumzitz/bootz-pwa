import styled, { css } from "styled-components";

// SVG de carregamento (spinner)
const Spinner = () => (
  <svg width="20" height="20" viewBox="0 0 50 50">
    <circle
      cx="25"
      cy="25"
      r="20"
      fill="none"
      stroke="var(--primary-color, #007bff)"
      strokeWidth="4"
      strokeDasharray="31.415, 31.415"
      transform="rotate(0 25 25)"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 25 25"
        to="360 25 25"
        dur="1s"
        repeatCount="indefinite"
      />
    </circle>
  </svg>
);


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