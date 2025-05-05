import styled from "styled-components"

const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
]


const TabBarContainer = styled.div`
    
    display: flex;
    background-color: #f8f8f8;
    border-top: 1px solid #e0e0e0;
    bottom: 0;
    position: fixed;
    width: 100%;
    height: 8vh;
`
export function TabBar() {
    return (
        <TabBarContainer className="tab-bar">

            <ul style={{ display: 'flex', listStyleType: 'none', margin: 0, padding: 0, }}>
                <li>
                    Início
                </li>
                <li>
                    Eventos
                </li>
                <li>
                    Nova trilha
                </li>
                <li>
                    Favoritos
                </li>
                <li>
                    Perfil
                </li>
            </ul>

        </TabBarContainer>
    )
}