import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"




const TabBarContainer = styled.div`
    
    display: flex;
    background-color: #f8f8f8;
    border-top: 1px solid #e0e0e0;
    bottom: 0;
    position: fixed;
    width: 100%;
    height: 10vh;
`

const TabBarItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: var(--default-label-font);
    font-size: 12px;
    color: var(--default-font-color);
    gap: 4px;
`

export function TabBar() {

    const navigate = useNavigate()
    return (
        <TabBarContainer className="tab-bar">

            <ul style={{ display: 'flex', listStyleType: 'none', margin: 0, padding: 0, width: '100%', height: '100%', justifyContent: 'space-around', alignItems: 'center' }}>
                <TabBarItem onClick={() => navigate('/home')}>
                        <img src="/assets/icons/home-active.svg" alt="home" style={{ width: '24px', height: '24px' }} />

                        Início
                    

                </TabBarItem>
                <TabBarItem onClick={() => navigate('/events')}>
                    <img src="/assets/icons/calendar-inative.svg" alt="home" style={{ width: '24px', height: '24px' }} />

                    Eventos
                </TabBarItem>
                <TabBarItem onClick={() => navigate('/trail')}>
                    <img src="/assets/icons/add.svg" alt="home" style={{ width: '24px', height: '24px' }} />

                    Nova trilha
                </TabBarItem>
                <TabBarItem>
                    <img src="/assets/icons/favorite-inative.svg" alt="home" style={{ width: '24px', height: '24px' }} />

                    Favoritos
                </TabBarItem>
                <TabBarItem onClick={() => navigate('/profile')}>
                    <img src="/assets/icons/account-inative.svg" alt="home" style={{ width: '24px', height: '24px' }} />

                    Perfil
                </TabBarItem>
            </ul>

        </TabBarContainer>
    )
}