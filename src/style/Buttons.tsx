import styled from "styled-components";

export const ButtonTest = styled.button `
    font-family: 'Poppins', sans-serif;
    border: black 1px solid;
    border-radius: 5px;
    padding: 10px 15px;
    margin: 5px;
    transition: all 0.3s ease-in-out;

    &:hover {
        cursor: pointer;
        background-color: #0E0E0E;
        color: rgb(243, 237, 201);
        border-color: rgb(243, 237, 201);;
    }
    &:disabled{
        background-color: transparent;    
    }
    &:disabled:hover{
        padding: 10px 15px;;
        cursor: not-allowed;
    }
    
`
