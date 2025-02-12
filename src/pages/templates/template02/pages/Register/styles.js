import styled from "styled-components";

export const Container = styled.div`

    /* background-color: aqua; */

    height: 100vh;

    display: flex;
    align-items: center;
    align-items: center;

    flex-direction: row-reverse;

    /* padding: 0 6rem; */

    .form-image-register {
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: center;

        background-color: ${({ theme }) => theme.colors.secondary};
        height: 100%;
    }

    .form-content {
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

`;