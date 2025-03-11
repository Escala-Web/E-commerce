import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    /* background-color: antiquewhite; */

    width: 100%;

    margin: .6rem 0;

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    .container_content {
        display: flex;
        align-items: center;
        width: 100%;

        gap: 1rem;
        
    }

    /* flex-wrap: wrap; */

    .content {
        display: flex;
        /* background-color: aqua; */

        width: 90px;
        height: 100px;

        border: 1px solid #ccc;

        border-radius: 6px;

        overflow: hidden;

        position: relative;

        img {
            width: 100%;
            /* object-fit: cover; */
        }

        svg {
            position: absolute;
            right: 0;
            cursor: pointer;
        }
    }

`;