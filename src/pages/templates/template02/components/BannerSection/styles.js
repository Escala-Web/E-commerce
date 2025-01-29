import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    padding: 0 2rem;

    background-color: #000000;

    margin: 2rem 0;

    border-radius: 8px;


    @media (max-width: 870px) {
        flex-direction: column;
        padding: 2rem 0 0;
    }

    /* height: 200vh; */


`;

export const ContainerDescription = styled.div`

    color: #fff;

    @media (max-width: 870px) {
        padding-bottom: 1rem;
    }

    h2 {
        font-size: 2rem;
        margin-bottom: .4rem;
    }

`;