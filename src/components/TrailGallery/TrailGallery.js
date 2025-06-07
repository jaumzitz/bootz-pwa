import styled from "styled-components"
import { HorizontalScroll } from "../Scrolls/Scroll"
import { useState } from "react"

const GalleryContainer = styled.div`
    background-color: #aaaaaa;
    height: 40vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const GalleryImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const defaultIcon = "/assets/icons/add-photo.svg"


export default function TrailGallery({ photos = [], readOnly }) {

    /*
        RESPONSÁVEL POR MOSTRAR O CARROSSEL DE FOTOS DE UMA TRILHA.
        
        ESTADOS:
            COM FOTO / SOMENTE LEITURA
            COM FOTO / PERMITE UPLOAD
            SEM FOTO / PERMITE UPLOAD
    
            
    
    
    
    */
    const [selectedPhoto, setSelectedPhoto] = useState(null)

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
            <GalleryContainer>
                {photos.length > 0 && readOnly === false &&
                    <HorizontalScroll>
                        {/* //UPLOAD */}

                        <GalleryImage src="/assets/images/cachoeira-seca.jpg" alt="Imagem da trilha" />

                        <GalleryImage src="/assets/images/cachoeira-seca.jpg" alt="Imagem da trilha" />
                    </HorizontalScroll>
                }

                {photos.length > 0 && readOnly &&
                    <HorizontalScroll>


                        <GalleryImage src="/assets/images/cachoeira-seca.jpg" alt="Imagem da trilha" />
                        <GalleryImage src="/assets/images/cachoeira-seca.jpg" alt="Imagem da trilha" />
                    </HorizontalScroll>
                }

                {photos.length == 0 &&
                    <HorizontalScroll>

                        <label htmlFor="teste">

                            <img src={defaultIcon} width="68px"></img>
                        </label>
                        <input type="file" id='teste' accept="image/*" onChange={(e) => handleSelectedPhoto(e)} hidden ></input>
                    </HorizontalScroll>

                }



            </GalleryContainer>
        </>
    )
}