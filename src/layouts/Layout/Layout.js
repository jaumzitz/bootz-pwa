import IconButton from "../../components/IconButton/IconButton";
import { NoScroll } from "../../components/Scrolls/Scroll";
import Spacer from "../../components/Spacer/Spacer";
import { Span } from "../../components/Span/Span";
import { Title } from "../../components/Title/Title";


export function Layout({ leftButtonIcon, leftButtonAction, title, subtitle, children }) {
    return (
        <NoScroll>
            <div>

                <IconButton icon={leftButtonIcon} onClick={leftButtonAction}></IconButton>
                <Spacer height={'4vh'} />

                <Title>{title}</Title>
                <Span>{subtitle}</Span>
                <Spacer height={'8vh'} />
            </div>
            <main>
                {children}
            </main>
        </NoScroll>
    )

}