import styled from "styled-components";
import { PrimaryButton } from "../../PrimaryButton/PrimaryButton";
import { useCheckIfUserFollows } from "../../../hooks/useCheckIfUserFollows";
import { followUser, unfollowUser } from "../../../services/followService";





export function FollowButton({currentUser, destinyUser}) {

    const {data: isFollowing, error, refetch} = useCheckIfUserFollows(currentUser,destinyUser)
    
    async function handleClick() {
        isFollowing ? unfollowUser(currentUser, destinyUser) : followUser(currentUser, destinyUser)
        console.log(refetch())
    }
    if (currentUser === destinyUser) return null //se estiver vendo o próprio perfil, não mostra o botão seguir
    
    if (isFollowing) return <PrimaryButton  width="auto" onClick={() => handleClick()}>Seguindo</PrimaryButton>
    if (!isFollowing) return <PrimaryButton  width="auto" variant="outlined" onClick={() => handleClick()}>Seguir</PrimaryButton>
    
}