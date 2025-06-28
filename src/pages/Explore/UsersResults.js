import styled from "styled-components";
import Banner from "../../components/Banner/Banner";
import { Spinner } from "../../components/Spinner/Spinner";
import Avatar from "../../components/Profile/Avatar/Avatar";
import { Span } from "../../components/TextContent/Span/Span";
import { Title } from "../../components/TextContent/Title/Title";
import { useNavigate } from "react-router-dom";

const UsersResultsSection = styled.section`
    margin: 4vh 4vw;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export function UsersResults({ results, loading }) {
    const navigate = useNavigate()
    return (
        <UsersResultsSection>
            {loading && <Spinner />}
            {!loading && results.length === 0 && (
                <Banner title="Nenhum usuário encontrado" description="Tente usar outro termo de busca." />
            )}
            {results.length > 0 && (
                <div>
                    {results.map((user, index) => (
                        <>
                            <div onClick={() => navigate(`/profile/${user.username}`)}>

                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '18px' }} key={index}>
                                    <Avatar username={user.username} size="medium" />
                                    <div key={index} style={{ display: 'flex', flexDirection: 'column' }}>
                                        <Title size="small">{user.full_name || user.username}</Title>
                                        <Span>@{user.username}</Span>
                                    </div>
                                </div>
                            </div>
                            <div style={{ height: '1px', backgroundColor: '#ccc', margin: '10px 0' }}></div>
                        </>
                    ))}
                </div>
            )}
        </UsersResultsSection>
    );
}