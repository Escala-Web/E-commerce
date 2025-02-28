import styled from "styled-components";

export const Container = styled.div`

    border-radius: 6px;
    border: 1px solid #ccc;
    padding: 1rem;

    width: 100%;

    display: flex;
    flex-direction: column;

    gap: 1rem;

    .container-edit {
        display: flex;
        justify-content: center;
        gap: 1rem;
        align-items: center;
    }

    .container-edit-delete {
        background-color: rgb(237, 50, 55);

    }

    .container-form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

`;