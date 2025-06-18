import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";

const TabBarContainer = styled.div`
    display: flex;
    background-color: #f8f8f8;
    border-top: 1px solid #e0e0e0;
    bottom: 0;
    position: fixed;
    width: 100%;
    height: 10vh;
`;

const TabBarItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: var(--default-label-font);
    font-size: 12px;
    color: var(--default-font-color);
    gap: 4px;
    cursor: pointer;
`;

export function TabBar() {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <TabBarContainer className="tab-bar">
            <ul
                style={{
                    display: "flex",
                    listStyleType: "none",
                    margin: 0,
                    padding: 0,
                    width: "100%",
                    height: "100%",
                    justifyContent: "space-around",
                    alignItems: "center",
                }}
            >
                <TabBarItem onClick={() => navigate("/home")}>
                    <img
                        src={
                            location.pathname === "/home"
                                ? "/assets/icons/home-active.svg"
                                : "/assets/icons/home-inative.svg"
                        }
                        alt="home"
                        style={{ width: "24px", height: "24px" }}
                    />
                    Início
                </TabBarItem>
                <TabBarItem onClick={() => navigate("/events")}>
                    <img
                        src={
                            location.pathname === "/events"
                                ? "/assets/icons/calendar-active.svg"
                                : "/assets/icons/calendar-inative.svg"
                        }
                        alt="events"
                        style={{ width: "24px", height: "24px" }}
                    />
                    Eventos
                </TabBarItem>
                <TabBarItem onClick={() => navigate("/trail")}>
                    <img
                        src="/assets/icons/add.svg"
                        alt="nova trilha"
                        style={{ width: "24px", height: "24px" }}
                    />
                    Nova trilha
                </TabBarItem>
                <TabBarItem onClick={() => navigate("/favorites")}>
                    <img
                        src={
                            location.pathname === "/favorites"
                                ? "/assets/icons/favorite-active.svg"
                                : "/assets/icons/favorite-inative.svg"
                        }
                        alt="favoritos"
                        style={{ width: "24px", height: "24px" }}
                    />
                    Favoritos
                </TabBarItem>
                <TabBarItem onClick={() => navigate("/profile")}>
                    <img
                        src={
                            location.pathname === "/profile"
                                ? "/assets/icons/account-active.svg"
                                : "/assets/icons/account-inative.svg"
                        }
                        alt="perfil"
                        style={{ width: "24px", height: "24px" }}
                    />
                    Perfil
                </TabBarItem>
            </ul>
        </TabBarContainer>
    );
}