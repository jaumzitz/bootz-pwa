import styled from "styled-components";
import { Span } from "../Span/Span";
import { useState } from "react";

const InputStyled = styled.input`
font-family: var(--default-title-font);
font-size: var(--default-font-size);
width: 100%;
margin-bottom: 10px;
padding: 0.5rem 1rem;
color: var(--default-font-color);
background-color: #fff;
border: 1px solid #D7DBE0;
border-radius: 0.5rem;
box-sizing: border-box;
box-shadow: 0px 1px 2px 0px rgba(228, 229, 231, 0.24);
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

export function Input({ type, id, name, required, label, onChangeValue, validator }) {


    const [isFieldValid, setIsFieldValid] = useState(true);

    const handleChange = (event) => {

        if (onChangeValue) {

            const { value } = event.target;
            onChangeValue(value);
        }
    };

    const validateInput = (event) => {
        if (validator) {
            const { value } = event.target;
            setIsFieldValid(validator(value));
        }
    }


    return (
        <InputContainerStyled>
            {label && <LabelStyled htmlFor={id}>{label}</LabelStyled>}
            <InputStyled
                type={type}
                id={id}
                name={name}
                required={required}
                onChange={handleChange}
                onBlur={validateInput}

            />
            {!isFieldValid && <Span color={`var(--alert-color)`}>E-mail inválido.</Span>}
        </InputContainerStyled>
    );
}