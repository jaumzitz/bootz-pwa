
import styled from "styled-components";
import { Input } from "../../components/Input/Input";
import { LinkButton } from "../../components/LinkButton/LinkButton";
import { PrimaryButton } from "../../components/PrimaryButton/PrimaryButton";
import { Title } from "../../components/Title/Title";
import style from "./Login.module.css";



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
    return (
        <div>
            <Title>Boas vindas ao Bootz!</Title>

            <SectionForm className="loginForm">
                <Input type={"email"} id={"email"} name={"email"} required={true} label={"E-mail"} />
                <Input type={"password"} id={"password"} name={"password"} required={true} label={"Senha"} />
                <LinkButton alignment="right" type="submit" onClick={() => { }}>Esqueci minha senha</LinkButton>
                <PrimaryButton type="submit" onClick={() => { }}>Entrar</PrimaryButton>
                <RegisterLink>
                    <span>Não tem uma conta?</span><LinkButton alignment="left" onClick={() => { }}>Cadastre-se</LinkButton>
                </RegisterLink>
            </SectionForm>
        </div>
    );
}