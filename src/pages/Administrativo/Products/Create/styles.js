import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    align-items: start;
    gap: 2rem;
    padding: 0 0rem;

    width: 100%;

    margin-top: 1rem;

    z-index: 9699999;

`;


export const MainContent = styled.form`

    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .container {
        display: flex;
        align-items: center;

        flex-wrap: wrap;
        gap: 1rem;
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

    .container-registrar {
        display: flex;
        align-items: center;

        gap: 1rem;

        padding: 1rem 2rem;
        background-color: #fff;

        margin-bottom: 4rem;
        border-radius: 8px;

        button {
            /* background-color:rgb(15, 143, 241); */
            padding: .6rem;
            width: 30%;

            border-radius: 6px;
            border: 1px solid transparent;

            color: #fff;

            cursor: pointer;
        }

        .cancelar {
            background-color: red;
            padding: .6rem;
            width: 30%;

            border-radius: 6px;
            border: none;

            color: #fff;

            text-align: center;
            text-decoration: none;
        }
    }

    .container_variants_values {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: .4rem;

        margin: .8rem 0 .6rem;
    }

    .container_variant {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #f4f4f4;

        padding: .6rem 1rem;
        border-radius: 8px;
    }

`;

export const Aside = styled.aside`

    width: 30%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

`;

export const PriceDescont = styled.div`

    display: flex;
    align-items: center;
    gap: .6rem;

`;

export const PromocionDiscont = styled.div`

    display: flex;
    align-items: center;
    gap: 1rem;

    margin-top: 2rem;

`;