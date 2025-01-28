import styled from "styled-components";

export const ContainerPageAdm = styled.div`

    width: 100%;
    background-color: #f5f5f5;

    padding: 2rem;

    border: 1px solid #ccc;

    border-radius: 8px;
    height: 600px;

`;

export const ContainerCardContent = styled.div`

    display: flex;
    align-items: center;

    gap: 1rem;

    margin-top: 1rem;

`;

export const ContainerCard = styled.div`

    background-color: #fff;

    padding: 1rem;

    width: 10rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 6px;

    border: 1px solid #ccc;

    transition: .2s;

    cursor: pointer;
    &:hover {
        transform: scale(1.04);
    }
`;