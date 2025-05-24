import styled from "styled-components"
import { Title } from "../../components/TextContent/Title/Title"
import { PrimaryButton } from "../../components/PrimaryButton/PrimaryButton"
import { Paragraph } from "../../components/TextContent/Paragraph/Paragraph"
import { useNavigate } from "react-router-dom"


const ImageContainer = styled.main`
    width: 100vw;
    height: 100vh;
    background-image: url('/assets/images/onboarding-dsk.png');
    background-size: cover;         // Faz a imagem preencher toda a tela
    background-position: center;    // Centraliza a imagem
    background-repeat: no-repeat;   // Evita repetição
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
`

const BottomSheetContainer = styled.div`
    position: fixed;
    background-color: white;
    padding: 4vh 6vw;
    height: 35vh;
    width: 100vw;
    border-radius: 32px 32px 0px 0px;
    box-shadow: 0px -4px 13.4px 0px rgba(39, 39, 39, 0.40);
    box-sizing: border-box;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
`

const DescriptionContainer = styled.div`
    margin-top: 2vh;
`

export default function Onboarding() {

    const navigate = useNavigate()

    return (
        <>
            <ImageContainer>
            </ImageContainer>
            <BottomSheetContainer>

                <Title>
                    Explore lugares incríveis
                </Title>


                <Paragraph>
                    Encontre trilhas, praias e paisagens únicas perto de você.
                </Paragraph>
                <Paragraph>
                    Viva novas experiências, conecte-se com pessoas e aproveite cada aventura com o Bootz!
                </Paragraph>


                <PrimaryButton onClick={() => navigate('/login')}>Vamos lá!</PrimaryButton>

            </BottomSheetContainer>
        </>
    )
}