
import styled from "styled-components";
import { Input } from "../../components/Input/Input";
import { LinkButton } from "../../components/LinkButton/LinkButton";
import { PrimaryButton } from "../../components/PrimaryButton/PrimaryButton";
import { Title } from "../../components/Title/Title";
import { signInWithEmail } from "../../services/authService";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { NoScroll } from "../../components/ScreenTemplates/NoScroll.js";
import { Span } from "../../components/Span/Span.js";
import Spacer from "../../components/Spacer/Spacer.js";


export const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
`

const RegisterLink = styled.div`
    text-align: center;
`



export function Login() {


    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
        <NoScroll>
            <Spacer height={'10vh'} />
            <img src="/icon-192.png" alt="Logo" width="80px" height="80px" />
            <Spacer height={'4vh'} />

            <Title>Boas vindas ao Bootz!</Title>
            

            <Spacer height={'8vh'} />

            <FormStyled>

                <Input onChangeValue={setEmail} type={"email"} id={"email"} name={"email"} required={true} label={"E-mail"} />
                <Spacer height={'2vh'} />

                <Input onChangeValue={setPassword} type={"password"} id={"password"} name={"password"} required={true} label={"Senha"} />
                <Spacer height={'2vh'} />

                <LinkButton alignment="right" type="submit">Esqueci minha senha</LinkButton>

                <Spacer height={'28vh'} />


                <PrimaryButton type="submit" onClick={handleLogin}>Entrar</PrimaryButton>


                <Spacer height={'2vh'} />

                <RegisterLink>
                    <Span>Não tem uma conta?</Span><LinkButton alignment="left" to='/register'>Cadastre-se</LinkButton>
                </RegisterLink>

            </FormStyled>
        </NoScroll>
    );
}