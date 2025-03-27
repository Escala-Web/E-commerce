import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: space-between;
    gap: 1rem;
    width: 100%;
    max-width: 60vw;
    padding: 1rem 0;

    .container_card {
        width: 100%;
        max-width: 254px;
        height: auto;
        min-height: 335px;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 1rem;
        text-decoration: none;
        transition: .2s;

    

        margin: 0 auto;

        &:hover {
            transform: scale(1.03);
        }
    }

    .card_media {
        width: 100%;
        max-width: 202px;
        height: auto;
        height: 172px;
        margin: 0 auto;

        display: flex;
        align-items: center;
        justify-content: center;

        img {
            width: 174px;
            height: auto;
        }
    }

    .card_content {
        height: 46%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    .content {
        display: flex;
        flex-direction: column;
        gap: .4rem;
    }

    .card_frete_gratis {
        color: ${({theme}) => theme.colors.secondary};
        font-size: 14px;
        font-weight: 500;
    }

    .card_description {
        color: ${({theme}) => theme.colors.text_primary};
        font-weight: 400;
        font-size: 16px;
        display: -webkit-box;
        -webkit-line-clamp: 2; 
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    .card_price {
        display: flex;
        align-items: start;
        flex-direction: column;
        gap: .3rem;
    }

    .price {
        font-weight: 500;
    }

    .card_price_discount {
        color: ${({theme}) => theme.colors.text_primary};
        text-decoration: line-through;
        font-size: 14px;
    }

    .card_price_normal {
        color: ${({theme}) => theme.colors.secondary};
        font-size: 20px;
    }

    @media (max-width: 1460px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 999px) {

        display: flex;
        justify-content: start;
        gap: 1rem;
        width: 100%;
        max-width: 100vw;

        flex-wrap: wrap;

        /* background-color: aquamarine; */

        .container_card {
            /* background-color: black; */
            width: 500px;
        }
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    }

    @media (max-width: 552px) {
        grid-template-columns: 1fr;
        .container_card {
            max-width: 100%;
        }
    }
`;
