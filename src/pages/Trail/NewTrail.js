import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
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
import { supabase } from "../../services/supabaseClient";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { sendTrail } from "../../services/sendTrail";

const FormContainer = styled.main`
    display: flex;
    flex-direction: column;
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

const enviromentGroupOptions = [{
    category: 'enviroment',
    options: [

        { label: 'Praia', id: "beach" },
        { label: 'Montanha', id: "mountain" },
        { label: 'Camping', id: "camping" },
        { label: 'Cachoeira', id: "waterfall" },
        { label: 'Hiking', id: "hiking" }
    ]
}];

const accessGroupOption = [{
    category: 'access',
    options: [

        { label: 'Fácil acesso', id: 'easy_access' },
        { label: 'Díficil acesso', id: 'hard_access' }
    ]
}];

const signingGroupOption = [{
    category: 'signing',
    options: [
        { label: 'Bem sinalizado', id: 'well_signed' },
        { label: 'Pouco sinalizado', id: 'poorly_signed' },
        { label: 'Sem sinalização', id: 'no_signing' }
    ]
}
];

const effortGroupOption = [{
    category: 'physical_effort',
    options: [

        { label: 'Leve', id: 'light_effort' },
        { label: 'Moderado', id: 'moderate_effort' },
        { label: 'Intenso', id: 'intense_effort' },
        { label: 'Extraordinário', id: 'extraordinary_effort' }
    ]
}];

const accidentRiskGroupOption = [{
    category: 'accident_risk',
    options: [
        { label: 'Baixo', id: 'low_risk' },
        { label: 'Moderado', id: 'moderate_risk' },
        { label: 'Alto', id: 'high_risk' }
    ]
}];





export function NewTrail() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const { username: authenticatedUser } = useAuth()

    // React Hook Form
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors }
    } = useForm({
        mode: "onBlur",
        reValidateMode: "onBlur",
    });

    // Watch para radio-groups
    const enviroment = watch("enviroment");
    const access = watch("access");
    const signing = watch("signing");
    const effort = watch("effort");
    const accidentRisk = watch("accidentRisk");

    // Envio do formulário
    const onSubmit = async (data) => {

        setIsLoading(true);

        try {
            const trailData = {
                name: data.trailName,
                created_by: authenticatedUser,
                length: data.length,
                description: data.description,
                city: data.location
            };



            const sentTrailReturnedData = await sendTrail(trailData)

            if (sentTrailReturnedData) {
           
                const trailCategoryData = [
                    {
                        trail_id: sentTrailReturnedData[0].id,
                        category_id: 'enviroment',
                        category_option_id: data.enviroment
                    },
                    {
                        trail_id: sentTrailReturnedData[0].id,
                        category_id: 'access',
                        category_option_id: data.access
                    },
                    {
                        trail_id: sentTrailReturnedData[0].id,
                        category_id: 'signing',
                        category_option_id: data.signing
                    },
                    {
                        trail_id: sentTrailReturnedData[0].id,
                        category_id: 'physical_effort',
                        category_option_id: data.effort
                    },
                    {
                        trail_id: sentTrailReturnedData[0].id,
                        category_id: 'accident_risk',
                        category_option_id: data.accidentRisk
                    }
                ]

                const { data: trailCategoryReturnedData } = await supabase
                    .from('trail_category')
                    .insert(trailCategoryData)
                    .select()


                alert("Trilha enviada com sucesso!");
                console.log(sentTrailReturnedData)
                navigate('/home');
 
            }

        } catch (e) {
            alert("Erro ao enviar trilha: " + e.message);
        }
        setIsLoading(false);
    };

    return (
        <>
            <header>
                <IconButton icon="/assets/icons/close.svg" onClick={() => navigate(-1)} fill overlay />
                <UploadFile id="trailPhotos" />
                <Span bgcolor={"#d9d9d9"} alignment={"center"}>Toque para enviar fotos</Span>
            </header>

            <FormContainer>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormSection>
                        <Title>Enviar nova trilha</Title>
                        <Span style={{ marginTop: '4vh' }}>Compartilhe sua experiência nesse local</Span>
                    </FormSection>
                    <FormSection>
                        <Input
                            type="text"
                            label="Nome da trilha"
                            {...register("trailName", { required: "Informe o nome da trilha" })}
                        />
                        <LocalData>
                            <Input
                                type="text"
                                label="Localização"
                                {...register("location", { required: "Informe a localização" })}
                            />
                            <Input
                                type="text"
                                label="Comprimento"
                                {...register("length", { required: "Informe o comprimento" })}
                            />
                        </LocalData>
                    </FormSection>

                    <div>
                        <ChipSelector
                            title="Ambiente"
                            category={enviromentGroupOptions.category}
                            options={enviromentGroupOptions[0].options}
                            value={enviroment}
                            onChange={id => setValue("enviroment", id, { shouldValidate: true })}
                        />
                        <ChipSelector
                            title="Como foi chegar na trilha?"
                            category={accessGroupOption.category}
                            options={accessGroupOption[0].options}
                            value={access}
                            onChange={id => setValue("access", id, { shouldValidate: true })}
                        />
                        <ChipSelector
                            title="A trilha possui sinalização?"
                            category={signingGroupOption.category}
                            options={signingGroupOption[0].options}
                            value={signing}
                            onChange={id => setValue("signing", id, { shouldValidate: true })}
                        />
                        <ChipSelector
                            title="Nível de esforço físico"
                            category={effortGroupOption.category}
                            options={effortGroupOption[0].options}
                            value={effort}
                            onChange={id => setValue("effort", id, { shouldValidate: true })}
                        />
                        <ChipSelector
                            title="Risco de acidentes"
                            category={accidentRiskGroupOption.category}
                            options={accidentRiskGroupOption[0].options}
                            value={accidentRisk}
                            onChange={id => setValue("accidentRisk", id, { shouldValidate: true })}
                        />
                    </div>

                    <FormSection>
                        <Title>Conte como foi sua experiência</Title>
                        <TextArea
                            {...register("description", { required: "Conte sua experiência" })}
                        />
                    </FormSection>
                    <Spacer height={'20vh'} />
                    <FixedFooter
                        primaryButton={{
                            width: '90%',
                            text: isLoading ? 'Enviando...' : 'Publicar',
                            onClick: handleSubmit(onSubmit),
                            isLoading: isLoading
                        }}
                    />
                </form>
            </FormContainer>
        </>
    );
}