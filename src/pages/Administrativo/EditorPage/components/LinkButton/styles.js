import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../../../theme/theme";

export const ContainerLinkStyle = styled(Link)`

    padding: .6rem 1rem;
    background-color: ${theme.colors.black['600']};
    
    color: ${theme.colors.white['300']};
    font-weight: 500;

    border: 1px solid ${theme.colors.gray['400']};

    border-radius: 6px;
    text-decoration: none;

    width: 100%;
    transition: .1s;

    &:hover {
        background-color: ${theme.colors.black['500']};
        color: ${theme.colors.white['100']};
    }

`;