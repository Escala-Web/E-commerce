import styled from "styled-components";

export const Container = styled.div`

    height: 100vh;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    border-top: 2px solid ${({ theme }) => theme.colors.secondary};

    background-color: ${({theme}) => theme.colors.background};

    @media (max-width: 1449px){

    }   

`;

export const ContainerRegister = styled.div`

    background-color: ${({theme}) => theme.colors.secondary};

    height: 80%;

    width: 30%;

    @media (max-width: 1449px){
        display: none;
    } 

`;

export const ContainerFormulario = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;

    height: 80%;
    width: 40%;

    background-color: ${({theme}) => theme.colors.accent};

    @media (max-width: 1449px){
        display: flex;

        box-shadow: 0 0 4px #0000004f;

        border-radius: 8px;
    } 

    @media (max-width: 1219px){
        display: flex;

        box-shadow: 0 0 4px #0000004f;

        border-radius: 8px;

        width: 80%;
        height: 60%;
    } 

    @media (max-width: 1219px){
        width: 96%;
        height: 70%;
    }


`;