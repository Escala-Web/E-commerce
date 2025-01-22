import styled from "styled-components";

export const Container = styled.div`

    padding: 1.4rem 2rem 2rem;

    /* background-color: ${({theme}) => theme.colors.secondary}; */
    background-color: #f5f5f5;
    box-sizing: border-box;

    border-radius: 0 0 10px 10px;

    border: 1px solid #ccc;

    width: 100%;

`;

export const ContainerMenu = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;

`;

export const ContainerButton = styled.div`
    display: flex;
    gap: 1rem;
    /* width: 100%; */

`;