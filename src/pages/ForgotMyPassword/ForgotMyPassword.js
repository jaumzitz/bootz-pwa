import { useNavigate } from "react-router-dom";
import { Input } from "../../components/Input/Input";
import { LinkButton } from "../../components/LinkButton/LinkButton";
import { Span } from "../../components/Span/Span";
import FixedFooter from "../../layouts/Layout/FixedFooter";
import { Layout } from "../../layouts/Layout/Layout";

export function ForgotMyPassword() {

    const navigate = useNavigate();
    return (
        <>
            <Layout 
                    leftButtonIcon="/arrow-back.svg"
                    leftButtonAction={() => {navigate('/login')}}
                    title={"Esqueci minha senha"} 
                    subtitle={"Digite seu e-mail para receber um link de recuperação"}>
                    <form>
                        <Input label="Seu e-mail"></Input>
                    </form>
            </Layout>
            <FixedFooter primaryButton={{ text: 'Enviar e-mail', onClick: {}, width: '90%' }}>
                <div>
                    <Span>Não precisa de uma nova senha?</Span>
                    <LinkButton to='/login'>Fazer login</LinkButton>
                </div>
            </FixedFooter>
        </>
    )    
}