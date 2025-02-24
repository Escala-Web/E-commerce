import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    
    align-items: center;
    

    gap: 1rem;

    position: relative;

    .container-menu {
        width: 92%;
        /* background-color: aqua; */
    }

    .container-sidebar {
        width: 100%;
        height: 80px;
        padding: 2rem;
        box-sizing: border-box;
        background-color: #fff;

        display: flex;
        align-items: center;
        justify-content: space-between;

        margin-top: -1rem;
        

        border-radius: 12px;
    }

    .content-template {
        width: 92%;

        border-radius: 12px;
        overflow: hidden;
    }

    .link-voltar {
        color: #fff;
        text-decoration: none;

        display: flex;
        align-items: center;
        justify-content: center;

        gap: .4rem;
    }

`;

export const ContainerLink = styled(Link)`

    background-color: aqua;
    position: absolute;
    right: 40px;

    top: 20px;

    background-color: rgb(237, 50, 55);
    padding: 0.6rem 2rem;
    color: #fff;
    font-weight: 600;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: 0.2s;

    text-decoration: none;

`;