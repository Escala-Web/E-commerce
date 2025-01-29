import styled from "styled-components";

export const ContainerSpan = styled.div`

    background-color: transparent;
    border-radius: 4px;

    width: 18px;
    height: 18px;

    border: 1px solid #ccc;

    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: .2s;
    position: relative;

    &.active {
        background-color: #007bff;
    }

    span {
        position: absolute;
        left: 26px;
        color: #343434;
    }


`;

export const ContainerVariant = styled.div`

    /* background-color: aqua; */
    margin-top: 1rem;
    display: flex;
    gap: 2rem;

`;

export const ContainerVariantForm = styled.div`

    width: 30%;
    margin-left: 30px;

`;

export const ContainerVariantImages = styled.div`

    width: 60%;

`;