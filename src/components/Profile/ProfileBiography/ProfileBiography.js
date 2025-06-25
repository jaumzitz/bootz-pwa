import styled from "styled-components"
import { Title } from "../../TextContent/Title/Title"
import { Span } from "../../TextContent/Span/Span"
import { FollowButton } from "../FollowButton/FollowButton"
import { useAuth } from "../../../context/AuthContext"

const Biography = styled.section`
    margin: 0 4vw;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`

export function ProfileBiography({data}) {

    const {username: authenticatedUser} = useAuth()

    return (
        <>
            <Biography>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4em' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', gap: '1vh' }}>

                        <Title>{data.full_name}</Title>
                        <img src="/assets/icons/confirmed-identity.svg"></img>
                    </div>
                    <Span>@{data.username}</Span>
                    <Title size={"small"}>{data.city}, {data.state_or_province}</Title>

                </div>
                <FollowButton currentUser={authenticatedUser} destinyUser={data.username}></FollowButton>
            </Biography>
        </>
    )
}