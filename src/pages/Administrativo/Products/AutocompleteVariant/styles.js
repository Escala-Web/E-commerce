import styled from "styled-components";

export const Container = styled.div`

    background-color: #f2f2f2;

    border-radius: 30px;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0 1rem;


    .container {
        background-color: aqua;
        width: 20px;
        height: 20px;

        display: flex;
        align-items: center;
        justify-content: center;

        overflow: hidden;

        border-radius: 50%;

        span {
            width: 100%;
            height: 100%;
        }
    }

    .container_images{
        margin-top: 2rem;
    }
`;