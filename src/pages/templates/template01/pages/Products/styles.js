import styled from "styled-components";

export const ContainerProducts = styled.div`

    display: flex;
    align-items: start;

    gap: .6rem;
    margin-top: .4rem;

    .container_menu {
        background-color: ${({ theme }) => theme.colors.accent};
        width: 460px;
        height: 700px;

        border-radius: 6px;
    }

    .container_product {
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;

        gap: .6rem;
    }

`;