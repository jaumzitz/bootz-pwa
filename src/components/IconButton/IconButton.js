import styled from "styled-components";

const FilledContainerButton = styled.button`
    width: 24px;
    height: 24px;
    padding: 24px;
    background-color: #d9d9d9;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
  `;



export default function IconButton({ icon, onClick, fill }) {



    return (
        <>
            {fill && (
                <FilledContainerButton onClick={onClick}>
                    <img src={icon} alt="Icon" style={{ width: "24px", height: "24px" }} />
                </FilledContainerButton>
            )}
            {!fill && (
                <button
                    onClick={onClick}
                    style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        display: "block",
                    }}
                >
                    <img src={icon} alt="Icon" style={{ width: "24px", height: "24px" }} />
                </button>
            )}
        </>
    );
}