import styled from "styled-components";

export const Container = styled.div`

    /* background-color: #fff; */
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    .header-bar {
        width: 92%;
        background-color: #fff;

        padding: 1rem;

        z-index: 999;

        margin-top: -1rem;
        border-radius: 6px;

        display: flex;
        gap: 1rem;
    }

    .button-link {
        /* background-color: ${({ theme }) => theme.colors.segundary}; */
        padding:  .4rem 2rem;
    }
`;