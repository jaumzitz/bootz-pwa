import styled from "styled-components"
import { Chip } from "../Chip/Chip"
import { useState } from "react"
import { HorizontalScroll } from "../Scrolls/Scroll";
import { Title } from "../TextContent/Title/Title";





const TitleContainer = styled.div`
margin: 4vw 0 2vh 4vw;
padding-top: 8px;
    
`

export function ChipSelector({ title, options, value, onChange }) {
    const [selected, setSelected] = useState(value || null);

    function handleSelect(optionId) {
        setSelected(optionId);
        if (onChange) onChange(optionId);
    }

    return (
        <>
            {title && <TitleContainer><Title size="medium">{title}</Title></TitleContainer>}
            <HorizontalScroll>

                {options.map(option => (
                    <Chip
                        key={option.id}
                        chip={option}
                        checked={selected === option.id}
                        onChange={() => handleSelect(option.id)}
                        type="radio"
                        name="chip-group"
                    />
                ))}
            </HorizontalScroll>
        </>
    );
}