import styled from "styled-components";

export const Container = styled.div`

    height: 100vh;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    border-top: 2px solid ${({ theme }) => theme.colors.secondary};

    background-color: ${({theme}) => theme.colors.background};

`;

export const ContainerRegister = styled.div`

    background-color: ${({theme}) => theme.colors.secondary};

    height: 80%;

    width: 30%;

`;

export const ContainerFormulario = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;

    height: 80%;
    width: 40%;

    background-color: ${({theme}) => theme.colors.accent};

`;