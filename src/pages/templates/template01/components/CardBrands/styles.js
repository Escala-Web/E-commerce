import styled from "styled-components";

export const ContainerBread = styled.div`

    display: flex;
    flex-direction: column;

    margin-top: 1rem;

    gap: .5rem;

    .container_card {
        display: flex;
        align-items: center;

        gap: 1rem;

        position: relative;
    }

    .card {
        width: 300px;
        height: 300px;

        border-radius: 12px;

        background-color: #f3f3f3;

        overflow: hidden;

        cursor: pointer;
        transition: .2s;

        &:hover {
            transform: scale(1.04);
        }

        img {
            width: 100%;
            object-fit: cover;
        }
    }

    .card_content {
        position: absolute;

        bottom: 25px;

        color: #333;

        padding: 0 1rem;

        p {
            font-size: 20px;
            font-weight: 500;
        }
    }

`;