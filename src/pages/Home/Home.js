import styled from "styled-components";
import { RecommendedSection } from "../../components/RecommendedSection/RecommendedSection";

import { TabBar } from "../../components/TabBar/TabBar";
import Spacer from "../../components/Spacer/Spacer";
import { ChipNavigator } from "../../components/ChipNavigator/ChipNavigator";
import SearchBar from "../../components/SearhcBar/SearchBar";

import { useFetchTrails } from "../../hooks/useFetchTrails";
import { Title } from "../../components/TextContent/Title/Title";
import { PrimaryButton } from "../../components/PrimaryButton/PrimaryButton";
import { FeedbackBox } from "../../components/FeedbackBox/FeedbackBox";


const HeaderStyled = styled.header`
        
    flex-direction: column;   
    padding: 0 4vw 4vw 4vw;
`



export function Home() {

     const { data: trailsForYou, isLoading: loadingForYou } = useFetchTrails('forYou', {range: {min: 0, max: 2}});
     const { data: trailsTrendingNearby = [], loading: loadingTrending } = useFetchTrails('trendingNearby',{range: {min: 3, max: 5}});




    return (


        <>

            <HeaderStyled>

                <SearchBar />
            </HeaderStyled>

            <ChipNavigator showIcon={true} />
            <Spacer height={'2vh'} width={0}></Spacer>

            <RecommendedSection
                id="for-you"
                label="Para você"
                trails={trailsForYou || []} />

            <RecommendedSection
                id="trending-nearby"
                label="Em alta nas proximidades"
                trails={trailsTrendingNearby || []} />


            <FeedbackBox></FeedbackBox>

            <Spacer height={'12vh'} width={0}></Spacer>
            <TabBar></TabBar>


        </>








    );
}