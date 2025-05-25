import { useNavigate } from "react-router-dom";

import { Title } from "../../components/TextContent/Title/Title";
import { Span } from "../../components/TextContent/Span/Span";
import { TabBar } from "../../components/TabBar/TabBar";
import { Input } from "../../components/Input/Input";
import { ChipNavigator } from "../../components/ChipNavigator/ChipNavigator"
import { Chip } from "../../components/Chip/Chip"
import styled from "styled-components";
import IconButton from "../../components/IconButton/IconButton";



const CloseButton = styled.div`
    max-width: 30px;
    max-height: 30px;
    padding: 10px;
    margin: 2vh 2vh;
    background-color: #f0f8ffba;
    display: flex;
    position: absolute;
    flex-direction: row;
    align-items: center;
    border-radius: 60px;
    justify-content: center;
`

const UploadPhotos = styled.div`
    background-color: #aaaaaa;
    height: 40vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const FormContainer = styled.main`
    display: flex;
    flex-direction: column;
    margin: 4vh 4vw;
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

                    <Span bgcolor="#d9d9d9">Toque para enviar fotos</Span>

                </UploadPhotos>
            </header>


            <FormContainer>


                <Title>Enviar nova trilha</Title>
                <Span>Compartilhe sua experiência nesse local</Span>

                <form>

                    <Input type="text" label="Nome da trilha"></Input>
                    <div>

                        <Input type="text" label="Localização"></Input>
                        <Input type="text" label="Comprimento"></Input>

                        <Title>Ambiente</Title>
                        <ChipNavigator/>

                        <Title>Como foi chegar na trilha?</Title>
                        <ChipNavigator chipOptions={
                            [
                                {
                                    label: 'Fácil acesso'
                                },
                                { 
                                    label: 'Díficil acesso' 
                                }
                            ]
                        }/>

                        <Title>A trilha possui sinalização?</Title>
                        <ChipNavigator chipOptions={
                            [
                                {
                                    label: 'Bem sinalizado'
                                },
                                { 
                                    label: 'Pouco sinalizado' 
                                },
                                {
                                    label: 'Sem sinalização' 
                                }
                            ]
                        }/>

                        <Title>Nível de esforço físico</Title>
                        <ChipNavigator chipOptions={
                            [
                                {
                                    label: 'Leve'
                                },
                                { 
                                    label: 'Moderado' 
                                },
                                {
                                    label: 'Difícil' 
                                },
                                {
                                    label: 'Extreaordinário' 
                                }
                            ]
                        }/>

                        <Title>Como foi chegar na trilha?</Title>
                        <ChipNavigator chipOptions={
                            [
                                {
                                    label: 'Fácil acesso'
                                },
                                { 
                                    label: 'Díficil acesso' 
                                }
                            ]
                        }/>

                        <Title>Habitação</Title>
                        <nav>

                        <ChipNavigator chipOptions={
                            [
                                {
                                    label: 'Há pessoas morando lá'
                                },
                                { 
                                    label: 'Apenas poucos visitantes' 
                                },
                                {
                                    label: 'Vários visitantes' 
                                }
                            ]
                        }/>

                        </nav>
                        
                        <Title>Conte como foi sua experiência</Title>
                        <Input type="text-area"></Input>
                    </div>
                </form>


            </FormContainer>
            <TabBar></TabBar>
        </>
    )
}