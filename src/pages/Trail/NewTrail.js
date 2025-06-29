import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Title } from "../../components/TextContent/Title/Title";
import { Span } from "../../components/TextContent/Span/Span";
import { Input } from "../../components/Input/Input";
import styled from "styled-components";
import IconButton from "../../components/IconButton/IconButton";
import Spacer from "../../components/Spacer/Spacer";
import FixedFooter from "../../layouts/Layout/FixedFooter";
import { ChipSelector } from "../../components/ChipSelector/ChipSelector";
import { TextArea } from "../../components/TextArea/TextArea";
import { supabase } from "../../services/supabaseClient";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { sendTrail, sendTrailCategory } from "../../services/sendTrail";
import TrailGallery from "../../components/TrailGallery/TrailGallery";

// Função para upload de imagens no bucket trail/
async function uploadTrailImages(images, trailId) {
    const uploadedUrls = [];
    for (let i = 0; i < images.length; i++) {
        console.log(`Uploading trail image ${i+1} of ${images.length}`)
        const file = images[i].file;
        const fileExt = file.name.split('.').pop();
        const fileName = `${trailId}_${Date.now()}_${i}.${fileExt}`;
        const filePath = `${trailId}/${fileName}`;

        const { error } = await supabase.storage
            .from(`trail/`)
            .upload(fileName, file, { upsert: false })
            

        if (!error) {
            // Obtenha a URL pública
            const { data } = supabase.storage.from('trail/').getPublicUrl(fileName);
            uploadedUrls.push(data.publicUrl);

             const { data: trailImageData, error } = await supabase
            .from('trail_image')
            .insert({
                trail_id: trailId,
                url: data.publicUrl,
                created_by: 'jaumzitz'
            })
            .select()

       

        }
    }
    return uploadedUrls;
}

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
    grid-template-columns: 1.2fr 0.9fr ;
    gap: 4vw;
`

const ImagesContainer = styled.div`
    background-color: #aaaaaa;
    height: 40vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    width: 100%;
`;

const Carousel = styled.div`
    display: flex;
    align-items: center;
    //gap: 8px;
    overflow-x: auto;
    width: 100%;
    height: 100%;
    //padding: 8px 0;
`;

const CarouselImage = styled.img`
    height: 100%;
    width: auto;
    max-width: 100%;
    border-radius: 8px;
    object-fit: cover;
    background: #eee;
    flex-shrink: 0;
`;

const ChangeImagesButton = styled.img`
max-width: 30px;
    max-height: 30px;
    padding: 14px;
    margin: 2vh 2vh;
    background-color: #f0f8ffba;
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    border-radius: 60px;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
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
    const { username: authenticatedUser } = useAuth();
    const [radioError, setRadioError] = useState(""); // Novo estado para mensagem de erro
    const [images, setImages] = useState([]);

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

    // Validação dos radio-groups antes do envio
    function validateRadioGroups() {
        const missing = [];
        if (!enviroment) missing.push("Ambiente");
        if (!access) missing.push("Como foi chegar na trilha");
        if (!signing) missing.push("Sinalização");
        if (!effort) missing.push("Esforço físico");
        if (!accidentRisk) missing.push("Risco de acidentes");
        return missing;
    }

    function handleImageUpload(e) {
        const files = Array.from(e.target.files);
        // Permite apenas imagens e até 10 arquivos
        const imageFiles = files.filter(file => file.type.startsWith("image/")).slice(0, 10);

        // Gera previews
        const previews = imageFiles.map(file => ({
            file,
            url: URL.createObjectURL(file)
        }));

        setImages(previews);
    }

    // Envio do formulário
    const onSubmit = async (data) => {
        setRadioError(""); // Limpa erro anterior

        const missing = validateRadioGroups();

        if (missing.length == 1) {
            setRadioError(`Ops... 😣 Parece que você esqueceu de informar essa categoria: ${missing.join(", ")}`);
            setIsLoading(false);
            return;
        } else if (missing.length > 1) {
            setRadioError(` Ops... 😣 Parece que você esqueceu de informar essas categorias: ${missing.join(", ")}`);
            setIsLoading(false);
            return;
        }

        setIsLoading(true);

        try {
            const trailData = {
                name: data.trailName,
                created_by: authenticatedUser,
                length: data.length,
                description: data.description,
                city: data.location
            };

            const sentTrailReturnedData = await sendTrail(trailData);

            if (sentTrailReturnedData) {
                // Upload das imagens selecionadas
                if (images.length > 0) {
                    await uploadTrailImages(images, sentTrailReturnedData[0].id);
                }

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
                ];

                const trailCategoryReturnedData = await sendTrailCategory(trailCategoryData);

                if (trailCategoryReturnedData) {
                    alert("Trilha enviada com sucesso!");
                    navigate(`/trail/${sentTrailReturnedData[0].id}`);
                }
            }
        } catch (e) {
            alert("Erro ao enviar trilha: " + e.message);
        }
        setIsLoading(false);
    };



    return (
        <>
            <header>
                <IconButton icon="/assets/icons/arrow-back.svg" onClick={() => navigate(-1)} fill overlay />
                <label htmlFor="uploadTrailPhotos" style={{ cursor: "pointer", display: "flex", flexDirection: 'column', alignItems: "center", justifyContent: "center", height: "100%", padding: '0 18vw' }}>
                    {images.length > 0 && <ChangeImagesButton src="/assets/icons/add.svg"></ChangeImagesButton>}
                </label>
                <input
                    id="uploadTrailPhotos"
                    type="file"
                    accept="image/*"
                    multiple
                    hidden
                    onChange={handleImageUpload}
                />
                <ImagesContainer>
                    {images.length > 0 ? (
                        <>
                            <Carousel>


                                <TrailGallery
                                    photos={images}
                                    readOnly={true}
                                    onRemoveImage={idx => setImages(images => images.filter((_, i) => i !== idx))}
                                >

                                </TrailGallery>
                            </Carousel>

                        </>
                    ) : (
                        <label htmlFor="uploadTrailPhotos" style={{ cursor: "pointer", width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>

                            <input
                                id="uploadTrailPhotos"
                                type="file"
                                accept="image/*"
                                multiple
                                hidden
                                onChange={handleImageUpload}
                            />
                            <img src="/assets/icons/add-photo-3.svg" width='68px' alt="Adicionar foto" />
                            <Span bgcolor={"#d9d9d9"} alignment={"center"}><img src="/assets/icons/add.svg"></img>Toque para enviar fotos</Span>
                        </label>
                    )}
                </ImagesContainer>

                {/* <UploadFile id="trailPhotos" /> */}


            </header >



            <FormContainer>
                <form onSubmit={e => e.preventDefault()}>
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
                                label="Cidade"
                                {...register("location", { required: "Informe a localização" })}
                            />
                            <Input
                                type="number"
                                label="Comprimento (Km)"
                                placeholder="Ex: 2,5"
                                {...register("length", { required: "Informe o comprimento da trilha em Km" })}
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
                        <Span color={'#333'}>{radioError}</Span>
                        <Title>Conte como foi sua experiência</Title>
                        <TextArea
                            {...register("description")}
                        />
                    </FormSection>
                    <Spacer height={'20vh'} />

                    {/* Mensagem de erro dos radio-groups */}
                    {radioError && (
                        <div style={{ color: "red", margin: "0 0 16px 0", textAlign: "center" }}>
                            {radioError}
                        </div>
                    )}
                    

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