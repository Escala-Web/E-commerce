import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;

    color: ${({theme}) => theme.colors.text_primary};
    margin-top: 2rem;
    h2 {
        font-size: 1.8rem;
        font-weight: 600;
        
    }

`;

export const LinkCategory = styled(Link)`

    text-decoration: none;
    color: ${({theme}) => theme.colors.text_primary};
    font-weight: 500;

    &:hover {
        color: ${({theme}) => theme.colors.secondary};
        /* transform: scale(1.04); */

        box-sizing: border-box;
    }

`;