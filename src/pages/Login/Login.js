
import styled from "styled-components";
import { Input } from "../../components/Input/Input";
import { LinkButton } from "../../components/LinkButton/LinkButton";

import { signInWithEmail } from "../../services/Authentication.js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { Span } from "../../components/TextContent/Span/Span.js";
import Spacer from "../../components/Spacer/Spacer.js";
import FixedFooter from "../../layouts/Layout/FixedFooter.js";
import { Layout } from "../../layouts/Layout/Layout.js";


export const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
`



export function Login() {


    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async () => {
        try {
            // Chama a função de login
            await signInWithEmail(email, password);
            // Redireciona para a rota /home após o login bem-sucedido
            navigate('/home');
        } catch (error) {
            console.error("Erro ao autenticar:", error);
            alert("Erro ao autenticar. Verifique suas credenciais.");
        }
    }

    return (
        <>
        
            <img src="/app-icon.png" alt="Logo" style={{ width: '64px', height: '64px', marginLeft: '4vw', marginTop: '8vh'}} />
            <Layout /*leftButtonIcon={{img: "/app-icon.png", size: "200px"}}*/  title={"Boas vindas ao Bootz!"} subtitle={"Faça login com sua conta"}>
                <FormStyled>

                    <Input onChangeValue={setEmail} type={"email"} id={"email"} name={"email"} required={true} label={"E-mail"} />
                    <Spacer height={'2vh'} />

                    <Input onChangeValue={setPassword} type={"password"} id={"password"} name={"password"} required={true} label={"Senha"} />
                    <Spacer height={'2vh'} />

                    <LinkButton alignment="right" to="/forgotMyPassword">Esqueci minha senha</LinkButton>

                    <Spacer height={'20vh'} />


                </FormStyled>

            </Layout>

            <FixedFooter primaryButton={{ text: 'Entrar', onClick: handleLogin, isLoading: isLoading, width: '90%' }}>
                <div>

                    <Span>Não tem uma conta?</Span>
                    <LinkButton to='/register'>Cadastre-se grátis</LinkButton>
                </div>

            </FixedFooter>




        </>
    );
}