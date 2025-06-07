import { useNavigate } from "react-router-dom";
import IconButton from "../IconButton/IconButton";
import { UploadFile } from "../UploadFile/UploadFile";
import styled from "styled-components";
import Avatar from "../Profile/Avatar/Avatar";




const Header = styled.header`

`

export function TrailHeader({ trailId, children, readOnly }) {

    const navigate = useNavigate()

    return (
        <Header>

            <IconButton icon="/assets/icons/close.svg" onClick={() => navigate(-1)} fill overlay> </IconButton>

            <UploadFile id="trailPhotos" imgUrl={trailId && "/assets/images/parque-atalaia.jpg"} readOnly={readOnly}/>

            
       

            

        </Header>
    )
}