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
    position: absolute;
    bottom: 6vh;
    display: flex;
    flex-direction: column;
`

export function Register() {

    const navigate = useNavigate();
    return (
        <NoScroll>


            <IconButton icon='/arrow-back.svg' onClick={() => navigate(-1)}></IconButton>
            <Spacer height={'4vh'} />

            <Title>Cadastre-se</Title>
            <Span>Crie uma conta grátis e comece a explorar lugares.</Span>
            <Spacer height={'8vh'} />
            <FormStyled>

                <Input label="Seu nome" type="text" id="fullName" name="fullName" required />


                <Input label="Seu e-mail:" type="email" id="email" name="email" required />


                <Input label="Cadastre sua senha:" type="password" id="password" name="password" required />


            </FormStyled>

            <FormFooter>

                <PrimaryButton type="submit">Cadastre-se grátis</PrimaryButton>

                <LoginLink>
                    <Span>Já tem uma conta?</Span><LinkButton alignment="left" to='/login'>Fazer login</LinkButton>
                </LoginLink>
            </FormFooter>


        </NoScroll>
    );
}