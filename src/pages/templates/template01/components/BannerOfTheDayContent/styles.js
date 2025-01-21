import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`

    /* background-color: aqua; */
    height: 60%;

    display: flex;
    align-items: start;
    flex-direction: column;

    justify-content: space-evenly;

    width: 50%;

    color: ${({theme}) => theme.colors.text_primary};;
`;

export const ContainerSubTitle = styled.div`

    gap: 1rem;

    h2 {
        font-size: 2.4rem;
        margin-bottom: 1rem;
    }

    h1 {
        color: ${({theme}) => theme.colors.secondary};
        font-weight: 800;
    }

`;

export const ContainerFooter = styled.div`

    display: flex;
    align-items: center;

    gap: 2rem;

`;

export const ContainerRelogio = styled.div`

    display: flex;
    align-items: center;

    gap: .6rem;

    span {
        background-color: ${({theme}) => theme.colors.accent};;
        font-size: 2rem;
        padding: .6rem;
        border-radius: 6px;
    }

`;

export const LinkStyle = styled(Link)`

    font-size: 2rem;
    padding: .6rem 2rem;

    background-color: ${({theme}) => theme.colors.secondary};

    text-decoration: none;
    color: ${({theme}) => theme.colors.text_secondary};
    border-radius: 6px;

`;