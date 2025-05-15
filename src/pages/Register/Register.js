import styled from "styled-components";
import IconButton from "../../components/IconButton/IconButton";
import { Input } from "../../components/Input/Input";
import { PrimaryButton } from "../../components/PrimaryButton/PrimaryButton";
import { NoScroll } from "../../components/ScreenTemplates/NoScroll";
import Spacer from "../../components/Spacer/Spacer";
import { Span } from "../../components/Span/Span";
import { Title } from "../../components/Title/Title";
import { LinkButton } from "../../components/LinkButton/LinkButton";
import { useNavigate } from "react-router-dom";

const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2vh;
    
`
const LoginLink = styled.div`   
    text-align: center;
`

const FormFooter = styled.div`
 position: fixed;
    bottom: 4vh;
    width: 100%;
    left: 0; 
    right: 0; 
    display: flex; /* Adicionado para centralizar */
    flex-direction: column; /* Mantém os elementos empilhados */
    justify-content: center; /* Centraliza horizontalmente */
    align-items: center; /* Centraliza verticalmente */
    text-align: center;
`

export function Register() {

    const navigate = useNavigate();


    const handleRegister = async (event) => {
        event.preventDefault(); // Previne o comportamento padrão do formulário

        const formData = new FormData(event.target); // Obtém os dados do formulário
        const data = Object.fromEntries(formData.entries()); // Converte os dados para um objeto

        console.log('Dados do formulário:', data); // Exibe os dados no console (pode ser removido depois)

        // Aqui você pode adicionar a lógica para enviar os dados para o servidor ou fazer o que precisar com eles
    }
    return (
        <NoScroll>

            <div>

                <IconButton icon='/arrow-back.svg' onClick={() => navigate(-1)}></IconButton>
                <Spacer height={'4vh'} />

                <Title>Cadastre-se</Title>
                <Span>Crie uma conta grátis e comece a explorar lugares.</Span>
                <Spacer height={'8vh'} />
            </div>
            <FormStyled onSubmit={handleRegister}>

                <Input label="Seu nome" type="text" id="fullName" name="fullName" required />


                <Input label="Seu e-mail:" type="email" id="email" name="email" validator={verifyEmail} required />


                <Input label="Cadastre sua senha:" type="password" id="password" name="password" required />


                <Spacer height={'32vh'} />

            

                <PrimaryButton type="submit" >Cadastre-se grátis</PrimaryButton>

                <LoginLink>
                    <Span>Já tem uma conta?</Span><LinkButton alignment="left" to='/login'>Fazer login</LinkButton>
                </LoginLink>
            
            </FormStyled>


        </NoScroll>
    );
}


function verifyEmail(email) {
    // Verifica se o email é válido
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const status = re.test(String(email).toLowerCase());
    console.log('Email status:', status);
    return re.test(String(email).toLowerCase());
}