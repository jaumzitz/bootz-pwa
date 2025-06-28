import { useLocation, useNavigate } from "react-router-dom"
import styled from "styled-components"

const SearchInput = styled.input`
    //margin-top: 4vh;
    display: flex;
    width: 84%;
    padding: 18px 18px;
    justify-content: center;
    align-items: center;
    gap: 20px;
    border-radius: 50px;
    background: var(--gray-color);
    border: none;
    font-family: var(--default-label-font);
    font-size: var(--default-font-size);
`

export default function SearchBar({onChange, value, inputRef}) {

    const navigate = useNavigate()  
    const location = useLocation()

    const handleClick = () => {
        const currentPage = location.pathname
        console.log('currentPage', currentPage)

        if (currentPage !== '/explore') {
            navigate('/explore')
            return
        }
    }

    return (
        <>
            <SearchInput ref={inputRef} type="text" onClick={handleClick} onChange={e => onChange(e.target.value)} placeholder="Busque por uma localização"  ></SearchInput>
        </>
    )
}