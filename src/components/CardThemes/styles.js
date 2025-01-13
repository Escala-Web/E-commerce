import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../theme/theme";

export const ConatinerCard = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

`;

export const Card = styled.div`

    position: relative;
    margin-bottom: 2rem;

    img {
        filter: brightness(.8);
    }

`;

export const CardBody = styled.div`

    position: absolute;
    bottom: 20px;
    left: 0;

    padding: 0 1rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    width: 100%;

    p {
        color: ${theme.colors.white['200']};
        font-size: 1.2rem;
        font-weight: 600;
    }

    a {
        background-color: ${theme.colors.black['600']};
        padding: .4rem 1.4rem;
        border-radius: 6px;
        color: ${theme.colors.white['300']};
        font-weight: 600;

        text-decoration: none;

        transition: .2s;

        &:hover {
            background-color: ${theme.colors.black['500']};

            color: ${theme.colors.white['200']};
        }
    }

`;

export const CardLink = styled(Link)`

    background-color: ${theme.colors.black['600']};
    padding: .4rem 1.4rem;
    border-radius: 6px;
    color: ${theme.colors.white['300']};
    font-weight: 600;

    text-decoration: none;

    transition: .2s;

    &:hover {
        background-color: ${theme.colors.black['500']};

        color: ${theme.colors.white['200']};
    }

`;


export const ContainerTitle = styled.div`

    padding-bottom: 1.2rem;

    h2 {
        color: ${theme.colors.gray[800]};

	    font-weight: 600;
    }

`;