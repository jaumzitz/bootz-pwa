import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { uploadProfilePicture } from "../../../services/registerUser";

const UserImage = styled.img`
    max-height: 180px;
    max-width: 180px;
    height: 180px;
    width: 180px;
    object-fit: cover;
    background-color: #d9d9d9;
    border-radius: 60%;
    border: 4px solid #dedede;
    position: absolute;
    top: 30vh;
    left: 50vw;
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
const MediumAvatar = styled.img`
    width: 3rem;
    height: 3rem;
    border-radius: 60px;
    object-fit: cover;
    
`

const SmallAvatar = styled.img`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 60px;
    object-fit: cover;
    
`


const MiniAvatar = styled.img`
    width: 2rem;
    height: 2rem;
    border-radius: 60px;
    object-fit: cover;
    
`

const ChangeAvatar = styled.label`

`



const defaultAvatar = '/assets/images/avatar-default.svg';

export default function Avatar({ username, size, allowUpdate }) {
    const navigate = useNavigate();
    const location = useLocation();

    const [imgUrl, setImgUrl] = useState(defaultAvatar);

    // Função para verificar se o avatar existe no bucket
    async function checkAvatarExists(username) {
        const publicUrl = `https://qckpgmmxnpyptwhjhiwd.supabase.co/storage/v1/object/public/avatar/${username}.jpg`;
        try {
            const res = await fetch(publicUrl, { method: "HEAD" });
            if (res.ok) {
                return publicUrl;
            } else {
                return defaultAvatar;
            }
        } catch {
            return defaultAvatar;
        }
    }

    useEffect(() => {
        let isMounted = true;
        checkAvatarExists(username).then(url => {
            if (isMounted) setImgUrl(url);
        });
        return () => { isMounted = false; };
    }, [username, allowUpdate]);

    function handleChangeAvatar(e) {
        const file = e.target.files[0];
        if (file) {
            const newFileUrl = URL.createObjectURL(file);
            uploadProfilePicture(file, username);
            setImgUrl(newFileUrl);
        }
    }

    if (!allowUpdate) {
        return (
            <div
                onClick={() => {
                    const profilePath = `/profile/${username}`;
                    if (location.pathname !== profilePath) {
                        navigate(profilePath);
                    }
                }}
            >
                {username && size === 'mini' && <MiniAvatar src={imgUrl} />}
                {username && size === 'small' && <SmallAvatar src={imgUrl} />}
                {username && size === 'medium' && <MediumAvatar src={imgUrl} />}
                {username && size === 'big' && <UserImage src={imgUrl} />}
            </div>
        );
    }

    if (allowUpdate) {
        return (
            <>
                <ChangeAvatar htmlFor="changeAvatar">
                    {username && size === 'mini' && <MiniAvatar src={imgUrl} />}
                    {username && size === 'small' && <SmallAvatar src={imgUrl} />}
                    {username && size === 'medium' && <MediumAvatar src={imgUrl} />}
                    {username && size === 'big' && <UserImage src={imgUrl} />}
                </ChangeAvatar>
                <input type="file" accept="image/*" id="changeAvatar" onChange={handleChangeAvatar} hidden />
            </>
        );
    }
}