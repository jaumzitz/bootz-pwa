import styled from "styled-components";
import { Span } from "../TextContent/Span/Span";
import { useState, forwardRef } from "react";

const InputStyled = styled.input`
font-family: var(--default-title-font);
font-size: var(--default-font-size);
width: 100%;
margin-bottom: 16px;
padding: 0.8rem 1rem;
color: var(--default-font-color);
background-color: #fff;
border: 1px solid #D7DBE0;
border-radius: 0.5rem;
box-sizing: border-box;
box-shadow: 0px 1px 2px 0px rgba(228, 229, 231, 0.24);
  ${({ type }) => type === 'text-area' && `
      height: 14vh;
      vertical-align: top;
      resize: vertical;
  `}
`

const LabelStyled = styled.label`
font-family: var(--default-label-font);
color: #6C7278;
padding-bottom: 8px;
`

const InputContainerStyled = styled.div`
display: flex;
flex-direction: column;
width: 100%;
`

export const Input = forwardRef(function Input(
  { type, id, name, required, label, placeholder, onChangeValue, validator, children, ...rest },
  ref
) {
  const [isFieldValid, setIsFieldValid] = useState(true);

  const handleChange = (event) => {
    if (onChangeValue) {
      const { value } = event.target;
      onChangeValue(value);
    }
    // Permite que o React Hook Form também capture o evento
    if (rest.onChange) rest.onChange(event);
  };

  const validateInput = (event) => {
    if (validator) {
      const { value } = event.target;
      setIsFieldValid(validator(value));
    }
    if (rest.onBlur) rest.onBlur(event);
  };

  return (
    <InputContainerStyled>
      {label && <LabelStyled htmlFor={id}>{label}<p>{children}</p></LabelStyled>}
      <InputStyled
        ref={ref}
        type={type}
        id={id}
        name={name}
        required={required}
        onChange={handleChange}
        onBlur={validateInput}
        placeholder={placeholder}
        {...rest}
      />
      {!isFieldValid && <Span color={`var(--alert-color)`}>E-mail inválido.</Span>}
    </InputContainerStyled>
  );
});