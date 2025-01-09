import styled from "styled-components";
import { theme } from "../../theme/theme";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`

    width: 14%;
    background-color: ${theme.colors.white[100]};

    position: static;
    left: 0;
    top: 0;

    height: 100vh;

    border: 0 10px 10px 0;

    padding: 2rem 1rem;

    box-shadow: 0 0 4px ${theme.colors.black[400]};

`;

export const ContainerLogo = styled.div`

    padding-bottom: 2rem;
    border-bottom: 1px solid ${theme.colors.gray[400]};

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ContainerNavegacao = styled.nav`

    /* padding-top: 2rem; */


    padding: 2rem 0rem 0;

`;

export const ContainerLinksUl = styled.ul`

    list-style: none;
    display: flex;
    flex-direction: column;

    
    li {
        margin-bottom: 1rem;
        
        display: flex;
        align-items: center;
        gap: 1rem;

        padding: .4rem 2rem;
        border-radius: 6px;

        transition: .2s;

        cursor: pointer;
        &:hover {
            background-color: ${theme.colors.gray[300]};
        }
    }

`;

export const LinkStyle = styled(Link)`

    text-decoration: none;
    color: ${theme.colors.gray[800]};

    font-weight: 500;

`;