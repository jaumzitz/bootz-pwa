import styled from "styled-components";
import { Chip } from "../Chip/Chip";

const ChipNavigatorStyled = styled.nav`
    display: flex;
    flex-wrap: nowrap; /* Impede quebra de linha */
    margin-bottom: 16px;
    overflow-x: auto; /* Adiciona rolagem horizontal */
    white-space: nowrap; /* Impede quebra de linha */
    padding-bottom: 8px; /* Espaço extra para evitar corte na rolagem */
    left: 8vw;

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
        customAndroidEmoji: '/genmoji-cachoeira.png',
        customiOSEmoji: '/emoji-cachoeira-android.png',
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
            {chipOptions.map((option) => { return <Chip chip={option}></Chip> })}
        </ChipNavigatorStyled>
    )
}