import styled from "styled-components";

export const ContainerImage = styled.div`

    width: 200px;
    height: 110px;
    background-color: #ccc;

    border-radius: 6px;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        padding: 1rem;
    }


`;