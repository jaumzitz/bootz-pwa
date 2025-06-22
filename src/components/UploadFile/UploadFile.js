import { useState } from "react"
import styled from "styled-components"





const SquarePlacedholder = styled.div`
    background-color: #aaaaaa;
    height: 40vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const RoundedPlaceholder = styled.div`
  width: 200px;
  height: 200px;
  background-color: #d9d9d9;
  border-radius: 100%;
  border: 4px solid #d9d9d9;
  display: flex;
  align-items: center;
  justify-content: center;
`
const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const defaultIcon = "/assets/icons/add-photo.svg"

export function UploadFile({ type, accept, id, imgUrl, radOnly }) {

    const [selectedPhoto, setSelectedPhoto] = useState(imgUrl)


    function handleSelectedPhoto(e) {

        try {
            const file = e.target.files[0]
            setSelectedPhoto(URL.createObjectURL(file))

        } catch (error) {

            if (!selectedPhoto) {
                console.error('Não foi possível atualizar a foto', error)
                setSelectedPhoto(defaultIcon)
            }
        }

    }

    return (
        <>
            <label htmlFor={id}>

                {!!setSelectedPhoto &&
                    <SquarePlacedholder>
                        {!selectedPhoto ? <img src={defaultIcon} width="68px"></img> :
                            <PreviewImage src={selectedPhoto} width="200px" height="200px" ></PreviewImage>}
                    </SquarePlacedholder>}
                
            </label>

            <input type="file" id={id} accept="image/*" hidden onChange={(e) => handleSelectedPhoto(e)}></input>
        </>
    )
}