import styled from "styled-components";

const FilledContainerButton = styled.button`
    width: 24px;
    height: 24px;
    padding: 24px;
    background-color:rgba(217, 217, 217, 0.24);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
  `;


const OverlayedButton = styled.div`
    max-width: 30px;
    max-height: 30px;
    padding: 10px;
    margin: 2vh 2vh;
    background-color: #f0f8ffba;
    display: flex;
    position: absolute;
    flex-direction: row;
    align-items: center;
    border-radius: 60px;
    left: 0;
    justify-content: center;
    z-index: 1;
`

export default function IconButton({ icon, onClick, fill, overlay }) {



    return (
        <>
            {fill && overlay && (
                <OverlayedButton >
                    <FilledContainerButton onClick={onClick}>
                        <img src={icon} alt="Icon" style={{ width: "24px", height: "24px" }} />
                    </FilledContainerButton>
                </OverlayedButton>
            )}



            {!fill && !overlay && (
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