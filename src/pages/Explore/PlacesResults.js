import styled from "styled-components";
import Banner from "../../components/Banner/Banner";
import { ChipNavigator } from "../../components/ChipNavigator/ChipNavigator";
import { Spinner } from "../../components/Spinner/Spinner";
import { Title } from "../../components/TextContent/Title/Title";
import { TrailCard } from "../../components/TrailCard/TrailCard";

const PlacesResultsSection = styled.section`
    margin: 4vh 4vw;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export function PlacesResults({query, loading, results}) {
    return  (<>
                <ChipNavigator showIcon={true} />

                <PlacesResultsSection>
                    {/* {!query && <Banner title="Onde você quer ir?"></Banner>} */}

                    {(loading) && <Spinner />}
                    {!loading && results.length === 0 && query && (

                        <Banner width={'auto'} title="Nenhuma trilha encontrada" description="Experimente buscar pelo nome da cidade, ou toque em uma categoria. 😉"></Banner>
                    )}
                    {results.length > 0 && <Title size="medium">Olhe o que encontramos para você</Title>}
                    {results.map((trail) => (
                        <TrailCard key={trail.id} size="big" trail={trail} />
                    ))}
                </PlacesResultsSection>
            </>)
}