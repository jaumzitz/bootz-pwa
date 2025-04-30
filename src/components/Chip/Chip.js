import styled from "styled-components"

const ChipInput = styled.input`
appearance: none;
-webkit-appearance: none; /* Para navegadores baseados em WebKit */

`

const ChipLabel = styled.label`
display: inline-block;
padding: 4px 16px;
border-radius: 60px;
background-color: var(--gray-color);
color: var(--default-font-color);
font-family: var(--default-label-font);
font-size: var(--default-font-size);


`


export function Chip(props) {



    return (
        <>
            <ChipLabel htmlFor={props.id}>{props.label}</ChipLabel>
            <ChipInput type="checkbox" id={props.id} name={props.label} value={props.id}/>
        </>
    )
}