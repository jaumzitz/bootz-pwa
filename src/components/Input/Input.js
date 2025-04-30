import styled from "styled-components";

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


export function Input({ type, id, name, required, label }) {


    return (
        <div>
            {label && <LabelStyled htmlFor={id}>{label}</LabelStyled>}
            <InputStyled
                type={type}
                id={id}
                name={name}
                required={required}
            />
        </div>
    );
}