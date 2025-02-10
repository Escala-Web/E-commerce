import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`

    padding: 4rem 2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.colors.secondary};

    margin-bottom: 2rem;

`;

export const Title = styled.h4`

    color: ${({ theme }) => theme.colors.text_secondary};

    font-size: 2rem;

    display: flex;
    align-items: center;

    opacity: .9;

`;

export const LinkStyle = styled(Link)`

    color: ${({ theme }) => theme.colors.text_secondary};

    text-decoration: none;

`;