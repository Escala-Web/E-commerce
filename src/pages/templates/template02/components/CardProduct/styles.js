import styled from "styled-components";

export const ContainerCard = styled.div`

    display: flex;
    align-items: center;

    gap: 2rem;
    
    flex-wrap: wrap;

    justify-content: space-between;

    .card-action {
        height: 400px;
    }

    .card-content {
        display: flex;
        align-items: start;
        flex-direction: column;
        justify-content: space-between;
    }

    .button-comprar {
        background-color: ${({ theme }) => theme.colors.secondary};
        width: 100%;
        /* margin-top: 1rem; */
    }

    .icon-cart-comprar {
        margin-right: 6px;
        font-size: 1rem;
    }

    .pd-skeleton {
        padding: .4rem;
    }

`;