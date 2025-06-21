import styled from "styled-components"
import { Title } from "../TextContent/Title/Title"
import { TrailCard } from "../TrailCard/TrailCard"
import { HorizontalScroll } from "../Scrolls/Scroll"




const SectionStyled = styled.section`
    //padding-left: 4vw;
    
    position: relative;
    margin-bottom: 4vh;
`

const TitleContainer = styled.div`
    margin-left: 4vw;
`



export function RecommendedSection({ id, label, trails, loading }) {
    return (
        <>
            <TitleContainer>
                <Title size='medium'>{label}</Title>
            </TitleContainer>
            <SectionStyled>

                <HorizontalScroll>
                    {trails.map((trail) => (<TrailCard key={trail.id} trail={trail}></TrailCard>))}
                    {/* <TrailCard trail={trails[0]}></TrailCard> */}
                </HorizontalScroll>
            </SectionStyled>
        </>
    )
}
