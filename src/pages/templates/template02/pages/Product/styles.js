import styled from "styled-components";

export const ContainerProduct = styled.div`

    display: flex;
    flex-direction: column;
    gap: 1rem;
    
    padding-top: 1rem;
    

    .container-product {
        height: 76vh;
        /* background-color: aqua; */

        display: flex;
        align-items: center;
        gap: 1rem;

        border-bottom: 1px solid #ccc;
        border-top: 1px solid #ccc;
    }
    
    .container-product-banner {
        width: 60%;
        border-right: 1px solid #ccc;
        /* background-color: azure; */
        padding: 1rem;

        display: flex;
        align-items: center;

        gap: 1rem;
    }

    .container-product-banner-step {
        display: flex;
        flex-direction: column;
        width: 10%;

        gap: 1rem;
    }

    .container-product-content {
        padding: 1rem;
        width: 40%;
        /* background-color: aqua; */
    }

    .container-product-content-price {
        display: flex;
        align-items: center;
        gap: .4rem;
        margin-top: 2rem;
    }

    .container-product-content-size {
        margin-top: 2rem;
        
    }

    .container-product-content-size-image {
        display: flex;
        align-items: center;

        gap: .4rem;
        padding-top: 1rem;
    }

    .container-product-content-buy {
        margin-top: 2rem;
        display: flex;
        gap: 1rem;
    }

    .container-button {
        background-color: ${({ theme }) => theme.colors.secondary};
        padding: .6rem 4rem;
    }

    .text-color-primary {
        color: ${({ theme }) => theme.colors.text_primary};
        /* opacity: .9; */
    }

`;