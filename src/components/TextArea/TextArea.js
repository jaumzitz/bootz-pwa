import styled from "styled-components"

const TextAreaInput = styled.textarea`
    width: 94%;
    border-radius: 8px;
    margin: 18px 0;
    padding: 8px;
    font-family: var(--default-label-font);
    font-size: var(--default-font-size);
    height: ${({ height }) => height ? height : "80px"};
`

export function TextArea({ placeholder = "", rows = 4, maxLength = 300, minLength, height, ...rest }) {
    return (
        <TextAreaInput
            placeholder={placeholder}
            rows={rows}
            maxLength={maxLength}
            minLength={minLength}
            height={height}
            {...rest}
        />
    )
}