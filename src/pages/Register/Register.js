import styled from "styled-components";
import { Input } from "../../components/Input/Input";
import { Span } from "../../components/Span/Span";
import { LinkButton } from "../../components/LinkButton/LinkButton";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { signUpWithEmail } from "../../services/User";
import { Layout } from "../../layouts/Layout/Layout";
import FixedFooter from "../../layouts/Layout/FixedFooter";
import ProfilePicture from "../../components/Profile/ProfilePicture/ProfilePicutre";

const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2vh;
    
`
export function Register() {

    const navigate = useNavigate();

    // const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [confirmPassword, setConfirmPassword] = useState('');

    const [isLoading, setIsLoading] = useState(false);

    const [step, setStep] = useState(1);



    const handleRegister = async (event) => {
        event.preventDefault(); // Previne o comportamento padrão do formulário
        setIsLoading(true)

        signUpWithEmail(email, password)
            .then((response) => {
                console.log('Usuário registrado com sucesso:', response);
                alert('Usuário registrado com sucesso!');
                navigate('/home');
            }).catch((error) => {
                setIsLoading(false)
                console.error('Erro ao registrar usuário:', error);
                alert('Erro ao registrar usuário. Verifique suas credenciais.');
            }

            )
    }



    return (
        <>

            {step === 1 ?
                <>
                    <Layout leftButtonAction={() => navigate('/login')} leftButtonIcon="/arrow-back.svg" title="Criar uma conta" subtitle="Crie sua conta grátis e comece a explorar lugares incríveis.">


                        <FormStyled onSubmit={handleRegister}>

                            {/* <Input onChangeValue={setFullName} label="Nome completo" type="text" id="fullName" name="fullName" required /> */}
                            <Input label="Nome de usuário" type="text" id="username" name="username" required />
                            <Input onChangeValue={setEmail} label="Seu e-mail:" type="email" id="email" name="email" validator={verifyEmail} required />
                            <Input onChangeValue={setPassword} label="Cadastre sua senha:" type="password" id="password" name="password" required />
                            {/* <Input onChangeValue={setConfirmPassword} label="Confirme sua senha:" type="password" id="passwordCheck" name="passwordCheck" required /> */}

                        </FormStyled>

                    </Layout>
                    <FixedFooter primaryButton={{ text: 'Continuar', onClick: () => setStep(2), isLoading: isLoading, width: '90%' }}>
                        <div>

                            <Span>Já tem uma conta?</Span>
                            <LinkButton to='/login'>Fazer login</LinkButton>
                        </div>

                    </FixedFooter>
                </>
                
                :

                <>
                    <Layout leftButtonAction={() => setStep(1)} leftButtonIcon="/arrow-back.svg" title="Foto de perfil" subtitle="Tire uma selfie ou escolha uma foto do seu dispositivo.">

                        <ProfilePicture />

                        <Input type="text" label="Nome público"></Input>


                    </Layout>
                    <FixedFooter primaryButton={{ text: 'Concluir', width: '90%', onClick: handleRegister }}>
                        <Span></Span>
                    </FixedFooter>


                </>
            }

        </>

    );
}


function verifyEmail(email) {
    // Verifica se o email é válido
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const status = re.test(String(email).toLowerCase());
    console.log('Email status:', status);
    return re.test(String(email).toLowerCase());
}
