import styled from "styled-components"

const ChipInput = styled.input`
appearance: none;
-webkit-appearance: none; /* Para navegadores baseados em WebKit */

`

const ChipLabel = styled.label`
display: flex;
padding: 12px 18px;
border-radius: 60px;
background-color: var(--gray-color);
color: var(--default-font-color);
font-family: var(--default-label-font);
font-size: var(--default-font-size);
align-items: center;


`



export function Chip({ chip }) {

    const platform = window.navigator.userAgent.includes("iPhone") ? "iPhone" : "Android";



    return (
        <>
            <ChipLabel htmlFor={chip.id}>
            
                {
                 (!chip.emoji && platform === "iPhone") &&
                    <img src={chip.customiOSEmoji} alt={chip.label} width="24px" max-height="24px" style={{ marginRight: "8px" }} />
                }

                {
                    (!chip.emoji && platform !== "iPhone") &&
                    <img src={chip.customAndroidEmoji} alt={chip.label} width="24px" max-height="24px" style={{ marginRight: "8px" }} />
                }

                {chip.emoji && <span style={{ marginRight: "8px" }}>{chip.emoji}</span>}

       


                {chip.label}
            </ChipLabel>
            <ChipInput type="checkbox" id={chip.id} name={chip.label} value={chip.id} />
        </>
    )
}