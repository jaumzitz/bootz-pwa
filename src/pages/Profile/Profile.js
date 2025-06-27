import styled from "styled-components";
import IconButton from "../../components/IconButton/IconButton";
import { TabBar } from "../../components/TabBar/TabBar";
import Avatar from "../../components/Profile/Avatar/Avatar";
import Spacer from "../../components/Spacer/Spacer";
import { ProfileBiography } from "../../components/Profile/ProfileBiography/ProfileBiography";
import { ProfileUserData } from "../../components/Profile/ProfileUserData/ProfileUserData";
import { ProfileHistory } from "../../components/Profile/ProfileHistory/ProfileHistory";
import { useFetchProfileData } from "../../hooks/useFetchProfileData";
import { useNavigate, useParams } from "react-router-dom";
import { PrimaryButton } from "../../components/PrimaryButton/PrimaryButton";
import { logout } from "../../services/authService";
import { useAuth } from "../../context/AuthContext";

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
    //const navigate = useNavigate()

    const { username: paramUsername } = useParams()
    const { username: authenticatedUser, loading} = useAuth()

    if (loading) {
        console.log('Obtendo contexto do usuário....')
    }

    console.log('Usuário logado', authenticatedUser)

    const user = paramUsername || authenticatedUser


    const { data: profileData, isLoading, error } =  useFetchProfileData(user)

    if (isLoading) {
        console.log('Carregando dados do perfil...')
    }

    if (!profileData) {
        return
    }


    return (
        <>

            <>
                <HeaderButtons>
                    {authenticatedUser === profileData.username && <IconButton icon={"/assets/icons/logout.svg"} onClick={() => logout()} fill overlay ></IconButton>}
                </HeaderButtons>

                <HeaderImage/>

                <AvatarContainer>
                    <Avatar username={profileData.username} size="big" />
                </AvatarContainer>
            </>



            <ProfileBiography data={profileData} />
            <ProfileUserData data={profileData} />
            <ProfileHistory data={profileData}/>

            <Spacer height='10vh' />
            <TabBar></TabBar>
        </>
    )
}