import styled from "styled-components";
import { PrimaryButton } from "../../PrimaryButton/PrimaryButton";
import { useCheckIfUserFollows } from "../../../hooks/useCheckIfUserFollows";
import { followUser, unfollowUser } from "../../../services/followService";

export function FollowButton({ currentUser, destinyUser }) {
  const { data: isFollowing, error, refetch, isLoading } = useCheckIfUserFollows(currentUser, destinyUser);

  async function handleClick() {
    if (isFollowing) {
      await unfollowUser(currentUser, destinyUser);
    } else {
      await followUser(currentUser, destinyUser);
    }
    await refetch(); // só refaz a consulta depois da operação terminar
  }

  if (currentUser === destinyUser) return null;

  return (
    <PrimaryButton
      width="auto"
      variant={isFollowing ? "default" : "outlined"}
      onClick={handleClick}
      isLoading={isLoading}
      disabled={isLoading}
    >
      {isFollowing ? "Seguindo" : "Seguir"}
    </PrimaryButton>
  );
}