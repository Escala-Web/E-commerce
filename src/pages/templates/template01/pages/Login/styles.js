import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    align-items: center;

    flex-direction: row-reverse;

    box-sizing: border-box;
    padding: 1rem;
    height: 100vh;

`;

export const ContainerInfos = styled.div`

    background-color: ${({theme}) => theme.colors.secondary};;
    width: 50%;
    border-radius: 12px;
    height: 100%;

    display: flex;
    align-items: center;
    position: relative;
    justify-content: center;

`;

export const ContainerInfoRegister = styled.div`



    h2 {
        color: #fff;
    }

`;

export const RegisterImage = styled.div`

    position: absolute;
    right: 0rem;
    bottom: 2rem;

`;

export const ContainerLogin = styled.div`

    width: 50%;
    height: 100%;

    box-sizing: border-box;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const LinkEsqueciASenha = styled(Link)`


    width: 100%;

    margin-bottom: 1rem;

    text-align: end;
    color: #1b618c;
    font-weight: 500;

`;