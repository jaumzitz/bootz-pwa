import styled from "styled-components";
import { Chip } from "../Chip/Chip";
import { HorizontalScroll } from "../ScreenTemplates/NoScroll";

const ChipNavigatorStyled = styled.nav`
    &::-webkit-scrollbar {
        height: 6px; /* Altura da barra de rolagem */
    }

    &::-webkit-scrollbar-thumb {
        background: transparent
    }

    &::-webkit-scrollbar-track {
        background: transparent; /* Fundo da barra de rolagem */
    }
`

const chipOptions = [
    {
        id: 'beach',
        label: 'Praia',
        emoji: '🏖️',
        to: '/beach',

    },
    {
        id: 'mountain',
        label: 'Montanha',
        emoji: '⛰️',
        to: '/mountain',

    },
    {
        id: 'camping',
        label: 'Camping',
        emoji: '🏕️',
        to: '/camping',

    },
    {
        id: 'waterfall',
        label: 'Cachoeira',
        customAndroidEmoji: '/emoji-cachoeira-android.png',
        customiOSEmoji: '/genmoji-cachoeira.png',
        to: '/waterfall',

    },
    {
        id: 'hiking',
        label: 'Hiking',
        emoji: '🧗‍♂️',
        to: '/hiking',
    }
]

export function ChipNavigator() {
    return (


        <ChipNavigatorStyled>
            <HorizontalScroll>
                {chipOptions.map((option) => { return <Chip key={option.id} chip={option}></Chip> })}
            </HorizontalScroll>
        </ChipNavigatorStyled>

    )
}