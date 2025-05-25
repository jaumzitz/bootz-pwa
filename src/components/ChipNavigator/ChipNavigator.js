import styled from "styled-components";
import { Chip } from "../Chip/Chip";
import { HorizontalScroll } from "../Scrolls/Scroll"

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

const enviromentsOptions = [
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
        customAndroidEmoji: '/assets/icons/emoji-cachoeira-android.png',
        customiOSEmoji: '/assets/icons/genmoji-cachoeira.png',
        to: '/waterfall',

    },
    {
        id: 'hiking',
        label: 'Hiking',
        emoji: '🧗‍♂️',
        to: '/hiking',
    }
]

export function ChipNavigator({ chipOptions, showIcon = false }) {

    
    const options = !chipOptions ? enviromentsOptions : chipOptions
    

    return (


        <ChipNavigatorStyled>
            <HorizontalScroll>
                { options.map((option) => { return <Chip key={option.id} chip={option} showIcon={showIcon}></Chip> })}
            </HorizontalScroll>
        </ChipNavigatorStyled>

    )
}