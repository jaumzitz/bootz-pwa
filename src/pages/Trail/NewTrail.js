import { useNavigate } from "react-router-dom";

import { Title } from "../../components/TextContent/Title/Title";
import { Span } from "../../components/TextContent/Span/Span";
import { TabBar } from "../../components/TabBar/TabBar";
import { Input } from "../../components/Input/Input";
import { ChipNavigator } from "../../components/ChipNavigator/ChipNavigator"
import styled from "styled-components";
import IconButton from "../../components/IconButton/IconButton";
import Spacer from "../../components/Spacer/Spacer";
import FixedFooter from "../../layouts/Layout/FixedFooter";
import { UploadFile } from "../../components/UploadFile/UploadFile";




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
    //padding: 4vh 4vw;
`

const FormSection = styled.section`
    display: flex
;
    flex-direction: column;
    gap: 2vh;
    padding: 4vh 4vw 0 4vw;
`


const LocalData = styled.div`
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 4vw;
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

                <UploadFile id="trailPhotos">

                </UploadFile>


            </header>


            <FormContainer>

                <form>
                    <FormSection>
                        <Title>Enviar nova trilha</Title>
                        <Span style={{marginTop: '4vh'}}>Compartilhe sua experiência nesse local</Span>
                    </FormSection>
                    <FormSection>

                        <Input type="text" label="Nome da trilha"></Input>
                        <LocalData>

                            <Input type="text" label="Localização"></Input>
                            <Input type="text" label="Comprimento"></Input>
                        </LocalData>

                    </FormSection>

                    <div>
                        <ChipNavigator title="Ambiente" />


                        <ChipNavigator title="Como foi chegar na trilha?" chipOptions={
                            [
                                {
                                    label: 'Fácil acesso'
                                },
                                {
                                    label: 'Díficil acesso'
                                }
                            ]
                        } />


                        <ChipNavigator title="A trilha possui sinalização?" chipOptions={
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
                        } />

                        <ChipNavigator title="Nível de esforço físico" chipOptions={
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
                        } />

                        <ChipNavigator title="Como foi chegar na trilha?" chipOptions={
                            [
                                {
                                    label: 'Fácil acesso'
                                },
                                {
                                    label: 'Díficil acesso'
                                }
                            ]
                        } />

                        <ChipNavigator title="Habitação" chipOptions={
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
                        } />

                    </div>

                    <FormSection>

                        <Title>Conte como foi sua experiência</Title>
                        <Input type="text-area"></Input>
                    </FormSection>
                </form>


                <Spacer height={'20vh'}></Spacer>
                <FixedFooter primaryButton={{ width: '90%', text: 'Publicar' }} />
            </FormContainer>


        </>
    )
}