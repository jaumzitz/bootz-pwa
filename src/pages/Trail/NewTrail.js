import { useNavigate } from "react-router-dom";
import { Layout } from "../../layouts/Layout/Layout";
import { Title } from "../../components/TextContent/Title/Title";
import { Span } from "../../components/TextContent/Span/Span";
import { Input } from "../../components/Input/Input";
import styled from "styled-components";
import IconButton from "../../components/IconButton/IconButton";



const CloseButton = styled.div`
max-width: 30px;
    max-height: 30px;
    padding: 10px;
    background-color: #f0f8ffba;
    display: flex;
    position: absolute;
    flex-direction: row;
    align-items: center;
    border-radius: 60px;
    justify-content: center;
`

const UploadPhotos = styled.div`
    background-color: #d9d9d9;
    height: 40vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

const addPhotoIcon = "/assets/icons/add-photo.svg"

export function NewTrail() {

    const navigate = useNavigate();

    return (
        <>
            <header>

                <CloseButton>
                    <IconButton icon="/assets/icons/close.svg" onClick={() => navigate(-1)}> </IconButton>

                </CloseButton>
                <UploadPhotos>
                    <img src={addPhotoIcon} height="80px"></img>
                </UploadPhotos>
            </header>
            <form>


                <Title>Enviar nova trilha</Title>
                <Span>Compartilhe sua experiência nesse local</Span>

                <div>
                    <Input type="text" label="Nome da trilha"></Input>
                    <div>

                        <Input type="text" label="Localização"></Input>
                        <Input type="text" label="Comprimento"></Input>

                        <Title>Conte como foi sua experiência</Title>
                        <Input type="text-area"></Input>
                    </div>
                </div>

            </form>
        </>
    )
}