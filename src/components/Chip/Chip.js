import styled from "styled-components"
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ChipInput = styled.input`
  appearance: none;
  -webkit-appearance: none;
  position: absolute;
  opacity: 0;
  pointer-events: none;
`;

const ChipLabel = styled.label`
  padding: 12px 18px;
  border-radius: 60px;
  background-color: ${({ checked }) => checked ? "var(--primary-color)" : "var(--gray-color)"};
  color: ${({ checked }) => checked ? "#ffffff" : "var(--default-font-color)"};

  font-family: var(--default-label-font);
  font-size: var(--default-font-size);
  display: flex;
  align-items: center;
  min-inline-size: max-content;
  width: fit-content;
  cursor: pointer;
  transition: background 0.2s;
  position: relative;
`;

export function Chip({ chip, showIcon = false, checked = false, onClick, onChange, type = "checkbox", name, readOnly}) {
  const platform = window.navigator.userAgent.includes("iPhone") ? "iPhone" : "Android";


  const navigate = useNavigate()
  const location = useLocation()

    // Obtém o valor do parâmetro enviroment da URL
  const params = new URLSearchParams(location.search);
  const envParam = params.get("enviroment");


  const handleClick = () => {
    const currentPage = location.pathname
   // console.log('currentPage', currentPage)

    if (currentPage === '/home') {
    //  console.log('Navigating to /explore')
      navigate('/explore?enviroment=' + chip.id, { replace: true });
      return
      
    } else {
  //    console.log('Already on /explore, executing onClick')
      if (onClick) {
        onClick(chip.id);
      }
    }
      

  }

  return (
    <>
      <ChipLabel htmlFor={chip.id} checked={checked || envParam === chip.id } onClick={() => handleClick()} >

        {showIcon && (!chip.emoji && chip.customiOSEmoji && platform === "iPhone") &&
          <img
            src={chip.customiOSEmoji}
            alt={chip.label}
            width="24px"
            style={{ marginRight: "8px" }} />
        }
        {showIcon && (!chip.emoji && chip.customAndroidEmoji && platform !== "iPhone") &&
          <img
            src={chip.customAndroidEmoji}
            alt={chip.label}
            width="24px"
            style={{ marginRight: "8px" }} />
        }
        {showIcon && chip.emoji && <span style={{ marginRight: "8px" }}>{chip.emoji}</span>}
        {chip.label}
      </ChipLabel>
      <ChipInput
        type={type}
        id={chip.id}
        name={name}
        value={chip.id}
        checked={checked}
        onChange={onChange}
      />
    </>
  )
}