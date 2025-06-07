import styled from "styled-components";

const UserImage = styled.img`
    max-height: 20vh;
    height: 20vh;
    background-color: #d9d9d9;
    border-radius: 60%;
    border: 4px solid #dedede;
    position: absolute;
    top: 30vh;
    left: 50vw; /* 50% da largura da viewport */
    transform: translateX(-50%);
`;

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

const SmallAvatar = styled.img`
    width: 2.5rem;
    height: 2.5%;
    border-radius: 60px;
    
`

const MiniAvatar = styled.img`
    width: 2rem;
    height: 2.5%;
    border-radius: 60px;
    
`


const defaultAvatar = 'assets/icons/add-photo.svg'

export default function Avatar({ username, size }) {


    const imgUrl = !username ? defaultAvatar : 'https://github.com/jaumzitz.png';



    return (
        <>
            {username && size === 'mini' && (
                <MiniAvatar src={imgUrl}>

                </MiniAvatar>
            )}

            {username && size === 'small' && (
                <SmallAvatar src={imgUrl}>

                </SmallAvatar>
            )}

            {username && size === 'big' &&
                <UserImage src={imgUrl} ></UserImage>

            }






        </>
    )
}