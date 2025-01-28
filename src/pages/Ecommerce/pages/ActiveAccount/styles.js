import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;

    background-color: #00aabb47;

    gap: 1rem;

`;

export const LinkStyle = styled(Link)`

    background-color: ${({color}) => color || '#4ab4ff'};
    padding: .6rem 2rem;
    border-radius: 6px;

    color: #fff;
    font-size: 1rem;
    text-decoration: none;

    box-shadow: 0 0 2px rgba(52, 52, 52, 0.43);

    transition: .3s;

    &:hover {
        transform: scale(1.04);
    }
`;

export const ContainerModal = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 3rem;

    flex-direction: column;

    background-color: #fff;

    width: 40%;
    height: 60%;

    border-radius: 12px;

    box-shadow: 0 0 6px rgba(52, 52, 52, 0.43);

    h2 {
        opacity: .7;
        font-size: 2rem;
    }

    p {
        width: 50%;
        font-size: 17px;
        text-align: center;
    }

`;

export const ContainerModalActive = styled.div`


    background-color:rgba(0, 0, 0, 0.57);
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

`;

export const ContainerModalContent = styled.div`

    background-color: #fff;

    width: 40%;

    height: 30%;

    border-radius: 12px;
    box-shadow: 0 0 6px rgba(52, 52, 52, 0.43);

    padding: 1rem;

    z-index: 99999999;


`;


export const FormularioContainer = styled.form`

    height: 80%;
    display: flex;
    align-items: start;
    justify-content: space-between;

    flex-direction: column;

    width: 100%;

    h2 {
        margin-top: .5rem;
        opacity: .8;
    }

    div {
        width: 100%;
    }

`;

export const ContainerIconClose = styled.div`

    width: 100%;
    display: flex;
    align-items: center;
    justify-content: end;

`