import styled from "styled-components";

export const Container = styled.section`

    max-width: 1440px;
    margin: 0 auto;

    padding-top: 1rem;

    .container_product {
        display: flex;
        align-items: start;

        justify-content: space-between;

        width: 100%;

        gap: 1rem;

        @media (max-width: 999px){


            display: flex;
            flex-direction: column;
        }
    }

    .product_aside {
        min-width: 360px;



        @media (max-width: 999px){

            width: 100%;
            

            display: flex;
            align-items: center;
        

            padding: 1rem;
        }
    }
`;