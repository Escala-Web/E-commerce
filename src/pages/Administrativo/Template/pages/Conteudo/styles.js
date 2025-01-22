import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    flex-direction: column;

    gap: 1rem;

    position: relative;

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