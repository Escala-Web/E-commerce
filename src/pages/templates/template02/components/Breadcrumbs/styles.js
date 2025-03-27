import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`

    padding: 1.4rem 2rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: ${({ theme }) => theme.colors.background};


    .container_title {
        
        display: flex;
        align-items: center;
        gap: .4rem;

        a {
            color: ${({ theme }) => theme.colors.text_primary};
            font-size: 14px;

            font-weight: 400;
            text-decoration: none;
        }

        p {
            font-size: 14px;
            font-weight: 500;
            color: ${({ theme }) => theme.colors.text_primary};
        }

        svg {
            color: ${({ theme }) => theme.colors.text_primary};
            font-size: 12px;
            font-weight: 400;
        }
    }

    .container_total {
            color: ${({ theme }) => theme.colors.text_primary};
            font-size: 14px;
            font-weight: 400;
    }

`;
