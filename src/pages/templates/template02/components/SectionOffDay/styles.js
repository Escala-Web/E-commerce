import styled from "styled-components";

export const Container = styled.section`

    margin-top: 4rem;
    background-color: ${({theme}) => theme.colors.accent};

    border-radius: 6px;

    min-height: 80vh;
    padding: 1rem 2rem;

    box-shadow: 0 0 4px #ccc;

    @media (max-width: 500px) {
        padding: .6rem;
    }

`;

export const ContainerCard = styled.div`

    width: 100%;
    height: 100%;

    margin-top: 3rem;

`;

export const ContainerPositionCard = styled.div`

    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;


    gap: 2rem;

    flex-direction: ${({direction}) => direction};

    @media (max-width: 870px) {
        width: 100%;
        flex-direction: row;
    }

`;