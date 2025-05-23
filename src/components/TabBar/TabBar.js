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
`

export function TabBar() {
    return (
        <TabBarContainer className="tab-bar">

            <ul style={{ display: 'flex', listStyleType: 'none', margin: 0, padding: 0, width: '100%', height: '100%', justifyContent: 'space-around', alignItems: 'center' }}>
                <TabBarItem>
                    <img src="/home-active.svg" alt="home" style={{ width: '24px', height: '24px' }} />
                
                    Início

                </TabBarItem>
                <TabBarItem>
                <img src="/calendar-inative.svg" alt="home" style={{ width: '24px', height: '24px' }} />

                    Eventos
                </TabBarItem>
                <TabBarItem>
                <img src="/add.svg" alt="home" style={{ width: '24px', height: '24px' }} />

                    Nova trilha
                </TabBarItem>
                <TabBarItem>
                <img src="/favorite-inative.svg" alt="home" style={{ width: '24px', height: '24px' }} />

                    Favoritos
                </TabBarItem>
                <TabBarItem>
                <img src="/account-inative.svg" alt="home" style={{ width: '24px', height: '24px' }} />

                    Perfil
                </TabBarItem>
            </ul>

        </TabBarContainer>
    )
}