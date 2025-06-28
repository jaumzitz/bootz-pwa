import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg);}
  100% { transform: rotate(360deg);}
`;

const SpinnerStyled = styled.div`
  border: 4px solid #eee;
  border-top: 4px solid var(--primary-color, #3498db);
  border-radius: 50%;
  width: 36px;
  height: 36px;
  animation: ${spin} 1s linear infinite;
  margin: 0 auto;
`;

export function Spinner() {
  return <SpinnerStyled />;
}