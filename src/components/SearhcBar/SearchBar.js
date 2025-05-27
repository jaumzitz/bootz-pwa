import styled from "styled-components"

const SearchInput = styled.input`
    margin-top: 4vh;
    display: flex;
    width: 100%;
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

export default function SearchBar() {
    return (
        <>
            <SearchInput type="search" placeholder="Busque por uma localização"  ></SearchInput>
        </>
    )
}