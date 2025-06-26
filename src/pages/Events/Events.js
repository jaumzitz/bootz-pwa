import styled from "styled-components";
import SearchBar from "../../components/SearhcBar/SearchBar";
import { TabBar } from "../../components/TabBar/TabBar";
import { Span } from "../../components/TextContent/Span/Span";
import { OneRowHeader } from "../../layouts/Layout/Layout";
import { Title } from "../../components/TextContent/Title/Title";
import Banner from "../../components/Banner/Banner";
import { HorizontalScroll, NoScroll } from "../../components/Scrolls/Scroll";




export default function Events() {
    return (
        <>
            <OneRowHeader title={"Eventos"} leftButtonIcon="/assets/icons/arrow-back.svg" leftButtonAction={() => window.history.back()}>
                <SearchBar type="search" placeholder="Busque por um evento" />
            </OneRowHeader>

            <HorizontalScroll>

                <Banner icon="/assets/icons/3d-calendar.svg" title="Em breve você poderá criar e participar de eventos da comunidade!">
                </Banner>
            </HorizontalScroll>
            <TabBar></TabBar>
        </>
    )
}