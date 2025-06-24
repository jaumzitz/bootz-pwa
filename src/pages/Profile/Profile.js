import styled from "styled-components";
import IconButton from "../../components/IconButton/IconButton";
import { TabBar } from "../../components/TabBar/TabBar";
import Avatar from "../../components/Profile/Avatar/Avatar";
import Spacer from "../../components/Spacer/Spacer";
import { ProfileBiography } from "../../components/Profile/ProfileBiography/ProfileBiography";
import { ProfileUserData } from "../../components/Profile/ProfileUserData.js/ProfileUserData";
import { ProfileHistory } from "../../components/Profile/ProfileHistory/ProfileHistory";
import { useFetchProfileData } from "../../hooks/useFetchProfileData";
import { useParams } from "react-router-dom";
import { PrimaryButton } from "../../components/PrimaryButton/PrimaryButton";

const HeaderImage = styled.header`
    background-color: #aaaaaa;
    height: 40vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow-x: hidden;
    position: relative; /* Torna este elemento referência para posicionamento absoluto */
`

const AvatarContainer = styled.div`
width: 100%;
    height: 14vh;
`


const HeaderButtons = styled.div`
    position: absolute; 
    top: 4vh;          
    //left: 4vw;         
    right: 0;        
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    z-index: 1;
`;




export function Profile() {

    const { username } = useParams()

    const user = username || 'jaumzitz'
    console.log(user)

    const { data: userData, isLoading, error } = useFetchProfileData(user)

    if (!userData) {
        console.log('Nao encontrado dados do usuário...')
        return
    }

    if (isLoading) {
        console.log('Carregando dados do perfil...')
    }

    console.log(userData)
    return (
        <>

            <>

                <HeaderButtons>

                    <IconButton icon={"assets/icons/settings.svg"} fill overlay ></IconButton>


                </HeaderButtons>

                <HeaderImage></HeaderImage>

                <AvatarContainer>
                    <Avatar username={userData.username} size="big" />
                </AvatarContainer>

            </>



            <ProfileBiography data={userData} />




            <ProfileUserData data={userData} />
        
            <ProfileHistory></ProfileHistory>


            <Spacer height='10vh' />
            <TabBar></TabBar>
        </>
    )
}