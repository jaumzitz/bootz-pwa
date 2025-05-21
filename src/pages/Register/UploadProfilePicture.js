import { useNavigate } from "react-router-dom";
import { Layout } from "../../layouts/Layout/Layout";

export default function UploadProfilePicture() {

    const navigate = useNavigate();

  return (
    <Layout leftButtonAction={() => navigate(-1)} leftButtonIcon="/arrow-back.svg" title="Foto de perfil" subtitle="Tire uma selfie ou escolha uma foto do seu dispositivo.">
        <input type="image"></input>
    </Layout>
  );
}