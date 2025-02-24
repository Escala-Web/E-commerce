import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`

    padding: 1.4rem 2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.colors.background};

    /* margin-bottom: 2rem; */

`;

export const Title = styled.h4`

    /* color: ${({ theme }) => theme.colors.text_secondary}; */
    color: ${({ theme }) => theme.colors.text_primary} ;

    font-size: 1rem;

    display: flex;
    align-items: center;

    opacity: .8;

    .icon-breadcrumb {
        margin: 0 4px;
    }

`;

export const LinkStyle = styled(Link)`

    /* color: ${({ theme }) => theme.colors.text_secondary}; */
    color: ${({ theme }) => theme.colors.text_primary} ;

    text-decoration: none;

`;