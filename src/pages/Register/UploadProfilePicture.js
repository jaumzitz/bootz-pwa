import { useNavigate } from "react-router-dom";
import { Layout } from "../../layouts/Layout/Layout";

import ProfilePicture from "../../components/Profile/ProfilePicture/ProfilePicutre";
import { Input } from "../../components/Input/Input";
import FixedFooter from "../../layouts/Layout/FixedFooter";



export default function UploadProfilePicture() {

  const navigate = useNavigate();




  return (
    <>
      <Layout leftButtonAction={() => navigate(-1)} leftButtonIcon="/arrow-back.svg" title="Foto de perfil" subtitle="Tire uma selfie ou escolha uma foto do seu dispositivo.">

        <ProfilePicture />
        <Input type="text" label="Nome público"></Input>
        

      </Layout>
      <FixedFooter primaryButton={{ text: 'Concluir', width: '90%' }}>

      </FixedFooter>
    </>
  );
}