import { useNavigate } from "react-router-dom";

import { Title } from "../../components/TextContent/Title/Title";
import { Span } from "../../components/TextContent/Span/Span";
import { Input } from "../../components/Input/Input";
import styled from "styled-components";
import IconButton from "../../components/IconButton/IconButton";
import Spacer from "../../components/Spacer/Spacer";
import FixedFooter from "../../layouts/Layout/FixedFooter";
import { UploadFile } from "../../components/UploadFile/UploadFile";
import { ChipSelector } from "../../components/ChipSelector/ChipSelector";
import { TextArea } from "../../components/TextArea/TextArea";


const FormContainer = styled.main`
    display: flex;
    flex-direction: column;
    //padding: 4vh 4vw;
`

const FormSection = styled.section`
    display: flex;
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

const enviromentGroupOptions = [
    { label: 'Praia', id: "beach" },
    { label: 'Montanha', id: "mountain" },
    { label: 'Camping', id: "camping" },
    { label: 'Cachoeira', id: "waterfall" },
    { label: 'Hiking', id: "hiking" }

]

const accessGroupOption = [
    {
        label: 'Fácil acesso',
        id: 'easy_access'

    },
    {
        label: 'Díficil acesso',
        id: 'hard_access'
    }
]

const signingGroupOption = [
    {
        label: 'Bem sinalizado',
        id: 'well_signed'
    },
    {
        label: 'Pouco sinalizado',
        id: 'poorly_signed'
    },
    {
        label: 'Sem sinalização',
        id: 'no_signing'
    }
]

const effortGroupOption = [
    {
        label: 'Leve',
        id: 'light_effort'

    },
    {
        label: 'Moderado',
        id: 'moderate_effort'


    },
    {
        label: 'Intenso',
        id: 'intense_effort'

    },
    {
        label: 'Extraordinário',
        id: 'extraordinary_effort'
    }
]

const accidentRiskGroupOption = [
    {
        label: 'Baixo',
        id: 'low_risk'

    },
    {
        label: 'Moderado',
        id: 'moderate_risk'


    },
    {
        label: 'Alto',
        id: 'high_risk'

    },
]
export function NewTrail() {

    const navigate = useNavigate();

    return (
        <>
            <header>

                <IconButton icon="/assets/icons/close.svg" onClick={() => navigate(-1)} fill overlay> </IconButton>


                <UploadFile id="trailPhotos">

                </UploadFile>
                <Span bgcolor={"#d9d9d9"} alignment={"center"}>Toque para enviar fotos</Span>


            </header>


            <FormContainer>

                <form>
                    <FormSection>
                        <Title>Enviar nova trilha</Title>
                        <Span style={{ marginTop: '4vh' }}>Compartilhe sua experiência nesse local</Span>
                    </FormSection>
                    <FormSection>

                        <Input type="text" label="Nome da trilha"></Input>
                        <LocalData>

                            <Input type="text" label="Localização"></Input>
                            <Input type="text" label="Comprimento"></Input>
                        </LocalData>

                    </FormSection>

                    <div>
                        <ChipSelector title="Ambiente" options={enviromentGroupOptions}></ChipSelector>
                        <ChipSelector title="Como foi chegar na trilha?" options={accessGroupOption}></ChipSelector>
                        <ChipSelector title="A trilha possui sinalização?" options={signingGroupOption}></ChipSelector>
                        <ChipSelector title="Nível de esforço físico" options={effortGroupOption}></ChipSelector>
                        <ChipSelector title="Risco de acidentes" options={accidentRiskGroupOption}></ChipSelector>
                    </div>

                    <FormSection>
                        <Title>Conte como foi sua experiência</Title>
                        <TextArea/>
                    </FormSection>
                </form>


                <Spacer height={'20vh'}></Spacer>
                <FixedFooter primaryButton={{ width: '90%', text: 'Publicar' }} />
            </FormContainer>


        </>
    )
}