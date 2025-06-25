
import { useEffect, useState } from "react";
import styled from "styled-components";

const UploadFile = styled.label`
  display: flex;
  justify-content: center;
`

const CirclePlaceholder = styled.div`
  width: 200px;
  height: 200px;
  background-color: #d9d9d9;
  border-radius: 100%;
  border: 4px solid #d9d9d9;
  display: flex;
  align-items: center;
  justify-content: center;
`

const SelectedPhotoPreview = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100%;
  object-fit: cover;
`;

const defaultIcon = "/assets/icons/add-photo.svg"

export default function ProfilePicture({ onChangePicture }) {


    const [selectedPhoto, setSelectedPhoto] = useState(null)

    function handleSelectedPhoto(e) {

        try {
            const file = e.target.files[0]
            onChangePicture(file)
            
            setSelectedPhoto(URL.createObjectURL(file))

        } catch (error) {

            if (!selectedPhoto) {
                console.error('Não foi possível atualizar a foto', error)
                setSelectedPhoto(defaultIcon)
            }
        }

    }


    return (
        <UploadFile htmlFor="profilePic">
            <CirclePlaceholder>
                {!selectedPhoto ? <img src={defaultIcon} width="68px"></img> :
                    <SelectedPhotoPreview src={selectedPhoto} width="200px" height="200px" ></SelectedPhotoPreview>}
            </CirclePlaceholder>

            <input type="file" accept="image/*" id="profilePic" hidden onChange={(e) => handleSelectedPhoto(e)}></input>

        </UploadFile>
    )




}