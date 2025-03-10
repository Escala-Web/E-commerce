import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    width: 100%;
    /* align-items: center; */
    flex-direction: column;

    position: relative;

    flex-wrap: wrap;

    margin-top: 2rem;

    gap: 1rem;

    .container {
        display: flex;
        align-items: center;

        gap: 4rem;
        flex-wrap: wrap;
    }

    .card {
        position: relative;
        /* height: 200px; */
        
        p {
            font-size: 14px;
        }

    }

    .settings {
        position: absolute;
        top: 0;
        right: 0;

        cursor: pointer;
    }

    .card_imagem {
        width: 140px;
    }

    .container_card {
        /* background-color: aqua; */
        height: 140px;
        width: 140px;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        text-align: center;
    }

    .container_card_icon {
        height: 100px;

        display: flex;
        align-items: center;
        justify-content: center;

        img {
            width: 100%;
        }
    }

    .container_button {
        border: 1px solid #333;

        /* width: 60%; */
        padding: .4rem;

        top: -2.4rem;

        text-align: center;

        cursor: pointer;

        position: absolute;
    }

    .container_card_image {
        width: 100px;
        height: 100px;

        border-radius: 6px;
        border: 1px solid #ccc;
        overflow: hidden;
        padding: .3rem;

        position: relative;

        img {
            width: 100%;
        }

        svg {

            cursor: pointer;

            position: absolute;
            top: 0;
            right: 0;
            font-size: 22px;

            color: red;
        }
    }

`;