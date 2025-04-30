
import styled from "styled-components";
import { Input } from "../../components/Input/Input";
import { LinkButton } from "../../components/LinkButton/LinkButton";
import { PrimaryButton } from "../../components/PrimaryButton/PrimaryButton";
import { Title } from "../../components/Title/Title";
import style from "./Login.module.css";
import { signInWithEmail } from "../../services/authService";
import { useNavigate } from "react-router-dom";
import { useState } from "react";



const SectionForm = styled.section`
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
        <div>
            <Title>Boas vindas ao Bootz!</Title>

            <SectionForm className="loginForm">
                
                <Input onChangeValue={setEmail} type={"email"} id={"email"} name={"email"} required={true} label={"E-mail"} />
                <Input onChangeValue={setPassword} type={"password"} id={"password"} name={"password"} required={true} label={"Senha"} />
                <LinkButton alignment="right" type="submit" onClick={() => { }}>Esqueci minha senha</LinkButton>
                <PrimaryButton type="submit" onClick={handleLogin}>Entrar</PrimaryButton>
                <RegisterLink>
                    <span>Não tem uma conta?</span><LinkButton alignment="left" onClick={() => { }}>Cadastre-se</LinkButton>
                </RegisterLink>
            </SectionForm>
        </div>
    );
}