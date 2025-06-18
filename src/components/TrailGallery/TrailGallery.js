import React, { useRef, useState } from "react";
import styled from "styled-components";

// Container principal da galeria com altura fixa
const GalleryContainer = styled.div`
  background-color: #aaaaaa;
  height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative; /* Necessário para posicionar elementos filhos de forma absoluta */
`;

// Container que permite scroll horizontal e utiliza
// scroll snapping para melhor navegação nos slides
const HorizontalScrollContainer = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  width: 100%;
  height: 100%;
  /* Oculta a scrollbar no WebKit */
  &::-webkit-scrollbar {
    display: none;
  }
`;

// Cada imagem ocupa 100% da largura do container e
// utiliza object-fit: cover para cobrir toda a área
const GalleryImage = styled.img`
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  scroll-snap-align: start;
`;

// Container para os pontos de paginação, agora posicionado sobre as imagens
const PaginationContainer = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
`;

// Define cada "dot"; muda a cor se estiver ativo
const Dot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? "#000" : "#ccc")};
`;

// Array de URLs de imagens para o exemplo
const defaultPhotos = [
  "/assets/images/praia-vermelha-penha.jpg",
  "/assets/images/parque-atalaia.jpg",
  "/assets/images/praia-solidao.jpg",
];

export default function TrailGallery({ photos = defaultPhotos }) {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const containerWidth = scrollRef.current.offsetWidth;
      const newIndex = Math.round(scrollLeft / containerWidth);
      setActiveIndex(newIndex);
    }
  };

  return (
    <GalleryContainer>
      <HorizontalScrollContainer ref={scrollRef} onScroll={handleScroll}>
        {photos.map((photo, index) => (
          <GalleryImage key={index} src={photo} alt={`Imagem ${index + 1}`} />
        ))}
      </HorizontalScrollContainer>
      {photos.length > 0 && (
        <PaginationContainer>
          {photos.map((_, index) => (
            <Dot key={index} active={index === activeIndex} />
          ))}
        </PaginationContainer>
      )}
    </GalleryContainer>
  );
}