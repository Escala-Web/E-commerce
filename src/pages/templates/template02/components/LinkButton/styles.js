import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`

    padding: .6rem 2rem;
    width: ${({w}) => w};

    background-color: ${({theme}) => theme.colors.secondary};

    border-radius: 6px;

    box-sizing: border-box;

    color: ${({theme}) => theme.colors.text_secondary};
    text-align: center;
    text-decoration: none;
    font-weight: 500;

    @media (max-width: 999px) {

        width: 100%;

        text-align: center;

    }

`;