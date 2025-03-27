import styled from "styled-components";

export const ContainerBreadcrumb = styled.div`

    height: 46px;

    background-color: ${({ theme }) => theme.colors.accent};

    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: .6rem 1rem;

    .container {
        display: flex;
        align-items: center;    

        height: 100%;

        gap: .2rem;


        p {
            font-weight: 500;
            font-size: 14px;
            color: ${({ theme }) => theme.colors.text_primary};
        }

        a {
            color: ${({ theme }) => theme.colors.text_primary};
            text-decoration: none;
            font-weight: 400;
            font-size: 14px;
        }

        svg {
            color: ${({ theme }) => theme.colors.text_primary};
            font-weight: 400;
            font-size: 14px;
        }
    }

    .container_qtd {
        p {
            font-weight: 400;
            font-size: 14px;
            color: ${({ theme }) => theme.colors.text_primary};
        }
    }
`;