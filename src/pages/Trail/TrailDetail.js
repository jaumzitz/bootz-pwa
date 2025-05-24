import { useLocation } from "react-router-dom"
import { Title } from "../../components/TextContent/Title/Title"

export function TrailDetail({ id }) {

    const location = useLocation()


    
    return (
        <>
        <Title>Trilha {location.pathname}</Title>
        </>
    )
}