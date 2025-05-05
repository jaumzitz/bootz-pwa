import styled from "styled-components"
import { Title } from "../Title/Title"
import { TrailCard } from "../TrailCard/TrailCard"
import { HorizontalScroll } from "../ScreenTemplates/NoScroll"




const SectionStyled = styled.section`
    padding-left: 4vw;
    margin-bottom: 4vh;
`

export function RecommendedSection({ id, label, trails }) {
    return (
        <>
            <SectionStyled>
                <Title size='medium'>{label}</Title>

                <HorizontalScroll>
                    {trails.map((trail) => (<TrailCard key={trail.id} trail={trail}></TrailCard>))}
                    {/* <TrailCard trail={trails[0]}></TrailCard> */}
                </HorizontalScroll>
            </SectionStyled>
        </>
    )
}
