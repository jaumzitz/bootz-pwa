import styled from "styled-components"

const TextAreaInput = styled.textarea`
    width: 94%;
    height: 80px;
    border-radius: 8px;
    margin: 18px 0;
    padding: 8px;
    font-family: var(--default-label-font);
    font-size: var(--default-font-size);
`

export function TextArea() {
    return (
        <>
            <TextAreaInput
                placeholder=""
                rows={4}
                maxLength={300}
                
            />
        </>
    )
}