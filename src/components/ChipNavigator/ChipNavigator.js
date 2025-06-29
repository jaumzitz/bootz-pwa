import styled from "styled-components";
import { Chip } from "../Chip/Chip";
import { HorizontalScroll } from "../Scrolls/Scroll";
import { Title } from "../TextContent/Title/Title";
import { useNavigate, useLocation } from "react-router-dom";

const ChipNavigatorStyled = styled.nav`
    &::-webkit-scrollbar {
        height: 6px;
    }
    &::-webkit-scrollbar-thumb {
        background: transparent;
    }
    &::-webkit-scrollbar-track {
        background: transparent;
    }
`;

const TitleContainer = styled.div`
    margin: 4vw 0 2vh 4vw;
`;

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
];

export function ChipNavigator({ title, chipOptions, showIcon = false }) {
    const navigate = useNavigate();
    const location = useLocation();
    const options = !chipOptions ? enviromentsOptions : chipOptions;

    // Função para adicionar o parâmetro enviroment na URL
    function setQuery(optionId) {
        const params = new URLSearchParams(location.search);
        params.set("enviroment", optionId);
        navigate(`${location.pathname}?${params.toString()}`);
    }

    return (
        <ChipNavigatorStyled>
            {title && (
                <TitleContainer>
                    <Title size="medium" style={{ paddingLeft: '4vw' }}>
                        {title}
                    </Title>
                </TitleContainer>
            )}
            <HorizontalScroll>
                {options.map((option) => (
                    <Chip
                        key={option.id}
                        chip={option}
                        showIcon={showIcon}
                        onClick={(e) => setQuery(`${option.id}`)}
                    />
                ))}
            </HorizontalScroll>
        </ChipNavigatorStyled>
    )
}