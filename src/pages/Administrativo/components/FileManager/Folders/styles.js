import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    align-items: center;

    flex-wrap: wrap;

    margin-top: 2rem;

    gap: 3rem;

    .card {
        position: relative;
    }

    .settings {
        position: absolute;
        top: 0;
        right: 0;

        cursor: pointer;
    }

`;