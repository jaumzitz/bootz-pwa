import styled from "styled-components";
import SearchBar from "../../components/SearhcBar/SearchBar";
import { TabBar } from "../../components/TabBar/TabBar";
import { Span } from "../../components/TextContent/Span/Span";
import { OneRowHeader } from "../../layouts/Layout/Layout";
import { Title } from "../../components/TextContent/Title/Title";


const Banner = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #d9d9d9;
    padding: 2vh;
    margin: 2vh 4vw;
    border-radius: 14px;
        gap: 4vw;
`

export default function Events() {
    return (
        <>
            <OneRowHeader title={"Eventos"} leftButtonIcon="/assets/icons/arrow-back.svg" leftButtonAction={() => window.history.back()}>
                <SearchBar type="search" placeholder="Busque por um evento" />
            </OneRowHeader>
            <Banner >
                <img src="/assets/icons/3d-calendar.svg" alt="Eventos" style={{ height: '8vh'}} />
                <Title size="small">Em breve você poderá criar e participar de eventos da comunidade!</Title>
            </Banner>
            <TabBar></TabBar>
        </>
    )
}