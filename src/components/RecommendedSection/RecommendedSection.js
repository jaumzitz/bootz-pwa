import styled from "styled-components"
import { Title } from "../Title/Title"
import { TrailCard } from "../TrailCard/TrailCard"

const trails = [
    {
        id: 1,
        name: 'Trilha da Praia Vermelha',
        location: 'Penha - SC',
        distance: 1.3,
        enviroment: 'Praia',
        difficulty: 'Fácil',
        imageUrl: '/praia-vermelha-penha.jpg'
    },
    {
        id: 2,
        name: 'Pico da Pedra',
        location: 'Camboriú - SC',
        distance: 3.3,
        enviroment: 'Montanha',
        difficulty: 'Médio',
        imageUrl: '/pico-da-pedra-camboriu.png'
    },
    {
        id: 3,
        name: 'Piscinas Naturais da Barra da Lagoa',
        location: 'Florianópolis - SC',
        distance: 1.3,
        enviroment: 'Praia',
        difficulty: 'Fácil',
        imageUrl: '/piscinas-naturais-floripa.png'
    }
]

export function RecommendedSection({id, label}) {
    return (
        <>
            <section>
                <Title size='medium'>{label}</Title>

                {trails.map((trail) => (<TrailCard key={trail.id} trail={trail}></TrailCard>))}
                {/* <TrailCard trail={trails[0]}></TrailCard> */}
            </section>
        </>
    )
}
