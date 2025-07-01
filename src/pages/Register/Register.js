import styled from "styled-components";
import { Input } from "../../components/Input/Input";
import { Span } from "../../components/TextContent/Span/Span";
import { LinkButton } from "../../components/LinkButton/LinkButton";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { signUpWithEmail } from "../../services/registerUser";
import { Layout } from "../../layouts/Layout/Layout";
import FixedFooter from "../../layouts/Layout/FixedFooter";
import ProfilePicture from "../../components/Profile/ProfilePicture/ProfilePicutre";
import { useAuth } from "../../context/AuthContext";
import Spacer from "../../components/Spacer/Spacer";

const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2vh;
`;

const UsernameInputWrapper = styled.div`
  display: flex;
  align-items: center;
 // background: #f5f5f5;
 font-family: var(--default-title-font);
  border-radius: 8px;
  padding: 0 0 0 16px;
  border: 1px solid #ccc;

`;

const UsernamePrefix = styled.span`
  color: #888;
  font-size: 1rem;
  user-select: none;
`;


export function Register() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [profilePicture, setProfilePicture] = useState(null);


  // React Hook Form
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
    trigger,
  } = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
  });



  // Máscara para telefone
  function handlePhoneChange(e) {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 11) value = value.slice(0, 11);
    if (value.length > 2) value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    if (value.length > 10) value = value.replace(/(\(\d{2}\)) (\d{5})(\d{4})/, "$1 $2-$3");
    else if (value.length > 6) value = value.replace(/(\(\d{2}\)) (\d{4})(\d{0,4})/, "$1 $2-$3");
    setValue("phone", value);
  }

  function handleDateChange(e) {
    let value = e.target.value.replace(/\D/g, ""); // Remove tudo que não for número

    if (value.length > 8) value = value.slice(0, 8);

    // Monta a máscara: DD/MM/AAAA
    if (value.length > 4) {
      value = value.replace(/(\d{2})(\d{2})(\d{1,4})/, "$1/$2/$3");
    } else if (value.length > 2) {
      value = value.replace(/(\d{2})(\d{1,2})/, "$1/$2");
    }

    setValue("birthday", value);
  }



  // Registro do usuário
  const onSubmit = async (data) => {

    //Etapa 1: dados de login
    if (step === 1) {
      // Valida todos os campos da etapa 1
      const valid = await trigger(["username", "email", "password"]);
      if (valid) setStep(2);
      return;
    }


    // Etapa 2: dados da pessoa
    setIsLoading(true);

    try {
      await signUpWithEmail(
        data.email,
        data.password,
        data.username,
        data.city,
        data.uf,
        data.fullName,
        data.phone,
        data.profilePicture);

      alert('Usuário registrado com sucesso!');
      navigate('/home');

    } catch (error) {
      setIsLoading(false);
      console.error('Erro ao registrar usuário:', error);
      alert('Erro ao registrar usuário. Verifique suas credenciais.');
    }
  };

  return (
    <>
      {step === 1 ? (
        <>
          <Layout
            leftButtonAction={() => navigate('/login')}
            leftButtonIcon="/assets/icons/arrow-back.svg"
            title="Criar uma conta"
            subtitle="Crie sua conta grátis e comece a explorar lugares incríveis."
          >
            <FormStyled onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="username" style={{ fontFamily: 'var(--default-label-font)', color: '#6C7278' }}>Escolha seu nome de usuário:</label>
              <UsernameInputWrapper>
                <UsernamePrefix>@</UsernamePrefix>
                <Input
                  id="username"
                  type="text"
                  placeholder="nomedeusuario"
                  style={{
                    border: "none",
                    background: "transparent",
                    outline: "none",
                    margin: 0,
                    flex: 1,
                    fontSize: "1rem"
                  }}
                  {...register("username", {
                    required: "Preencha o nome de usuário",
                    pattern: {
                      value: /^[a-zA-Z0-9_]+$/,
                      message: "Use apenas letras, números e _"
                    }
                  })}
                  onBlur={() => trigger("username")}
                />
              </UsernameInputWrapper>
              {errors.username && <Span color="red">{errors.username.message}</Span>}

              {/* E-mail */}
              <Input
                label="Seu e-mail:"
                type="email"
                id="email"
                name="email"
                required
                {...register("email", {
                  required: "Não esqueça de informar seu e-mail",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "E-mail inválido"
                  }
                })}
              />
              {errors.email && <Span color="red">{errors.email.message}</Span>}

              {/* Senha */}
              <Input
                label="Cadastre sua senha:"
                type="password"
                id="password"
                name="password"
                required
                {...register("password", {
                  required: "Senha é obrigatória",
                  minLength: { value: 6, message: "Mínimo 6 caracteres" }
                })}
              />
              {errors.password && <Span color="red">{errors.password.message}</Span>}
            </FormStyled>
          </Layout>
          <FixedFooter
            primaryButton={{
              text: 'Próximo',
              onClick: handleSubmit(onSubmit),
              isLoading: isLoading,
              width: '90%'
            }}
          >
            <div>
              <Span>Já tem uma conta?</Span>
              <LinkButton to='/login'>Fazer login</LinkButton>
            </div>
          </FixedFooter>
        </>
      ) : (
        <>
          <Layout
            leftButtonAction={() => setStep(1)}
            leftButtonIcon="/assets/icons/arrow-back.svg"
            title="Foto de perfil"
            subtitle="Tire uma selfie ou escolha uma foto do seu dispositivo."
          >
            {/* <ProfilePicture onChangePicture={file => setProfilePicture(file)} /> */}
            <ProfilePicture onChangePicture={file => setValue("profilePicture", file, { shouldValidate: true })} />

            <Input
              type="text"
              id="fullName"
              label="Nome público"
              {...register("fullName", { required: "Seu nome é obrigatório" })}
            />
            <div style={{ display: 'flex', flexDirection: 'row', gap: '8px' }}>

              <Input
                type="text"
                id="birthday"
                label="Data de Nascimento"
                inputMode="numeric"
                pattern="\d{2}/\d{2}/\d{4}"
                placeholder="DD/MM/AAAA"

                {...register("birthday", {
                  required: "Data de nascimento é obrigatória"

                })}
                onChange={handleDateChange}

              />
              <Input
                type="text"
                id="phone"
                label="Telefone"
                maxLength={15}
                {...register("phone")}
                onChange={handlePhoneChange}
                placeholder="(99) 99999-9999"
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'row', gap: '8px' }}>
              <Input
                type="text"
                id="uf"
                label="Estado"
                minLength={2}
                maxLength={2}
                {...register("uf", {
                  required: "Informe seu estado"
                })}
              />
              <Input
                type="text"
                id="city"
                label="Cidade"
                {...register("city", {
                  required: "Informe sua cidade"
                })}
              />


            </div>
            {errors.phone && <Span style={{ color: "red" }}>{errors.phone.message}</Span>}
            <Spacer height={'20vh'}></Spacer>
          </Layout>
          <FixedFooter
            primaryButton={{
              text: 'Concluir',
              width: '90%',
              onClick: handleSubmit(onSubmit),
              isLoading: isLoading
            }}
          >
            <Span></Span>
          </FixedFooter>
        </>
      )}
    </>
  );
}
