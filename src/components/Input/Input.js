import styled from "styled-components";
import { Span } from "../Span/Span";
import { useState } from "react";

const InputStyled = styled.input`
font-family: var(--default-title-font);
font-size: var(--default-font-size);
color: var(--default-font-color);
padding: 0.5rem 1rem;
border-radius: 0.5rem;
border: 1px solid #D7DBE0;
background-color: #F8F9FB;
width: 100%;
box-sizing: border-box;
margin-bottom: 10px;
`

const LabelStyled = styled.label`
font-family: var(--default-label-font);
color: #6C7278;
margin-bottom: 8px;
`


export function Input({ type, id, name, required, label, onChangeValue, validator }) {


    const [isFieldValid, setIsFieldValid] = useState(true);

    const handleChange = (event) => {

        if (onChangeValue) {

            const { value } = event.target;
            onChangeValue(value);
        }
    };

    const handleBlur = (event) => {
        if (validator) {
            const { value } = event.target;
            setIsFieldValid(validator(value));
        }
    }


    return (
        <div>
            {label && <LabelStyled htmlFor={id}>{label}</LabelStyled>}
            <InputStyled
                type={type}
                id={id}
                name={name}
                required={required}
                onChange={handleChange}
                onBlur={handleBlur}

            />
            {!isFieldValid && <Span>E-mail inválido.</Span>}
        </div>
    );
}