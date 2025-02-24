import styled from "styled-components";

export const ContainerHeader = styled.div`

    border-bottom: 1px double ${({ theme }) => theme.colors.secondary};

    h2 {
        color: ${({ theme }) => theme.colors.secondary};
        font-size: 2rem;
        opacity: .9;
    }

    margin-bottom: 2rem;

`;

export const Container = styled.div`

    display: flex;
    flex-direction: column;

    gap: 1rem;

    .container-favorid {
        display: flex;
        align-items: center;
        gap: 1rem;

        /* background-color:rgb(248, 248, 248); */
        border-radius: 6px;

        padding: .6rem;

        box-shadow: 0 0 6px #00000040;

        text-decoration: none;

        color: ${({ theme }) => theme.colors.text_primary};

        &:hover {
            transform: scale(1.02);
        }

    }

    .favorid-image {
        width: 60px;

        img {
            width: 100%;
        }
    }

    .favorid-content {
        /* background-color: aqua; */
        width: 12rem;


        p {
            line-height: 18px;
            font-size: 14px;
        }
    }




    .link-ver-mais {

        margin-top: 2rem;

        background-color: transparent;
        border: 1px double ${({ theme }) => theme.colors.secondary};

        text-align: center;
        color: ${({ theme }) => theme.colors.secondary};

        text-decoration: none;
        font-weight: 500;
        padding: .2rem 0;

        border-radius: 6px;
        transition: .2s;

        &:hover {
            opacity: .8;
            background-color: ${({ theme }) => theme.colors.secondary};
            color: ${({ theme }) => theme.colors.primary};
        }
    }

`;
