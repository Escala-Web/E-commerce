import styled from "styled-components";
import { theme } from "../../../../../../theme/theme";

export const ContainerCardListStyle = styled.div`

    width: 100%;
    justify-content: start;

    /* align-content: end; */

    box-sizing: border-box;

    display: flex;
    align-items: center;
    flex-wrap: wrap;

    padding: 2rem 0 3rem;
`;

export const CardBodyStyle = styled.div`

    background-color: ${theme.colors.gray['400']};
    position: relative;

    border-radius: 4px;

    width: 12rem;

    margin: 2rem 4rem;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 2rem;

    color: ${theme.colors.white['200']};
    text-align: center;
    font-weight: 700;

    border: 1px solid ${theme.colors.gray['500']};

    p {
        z-index: 999;
        color: ${theme.colors.gray['800']};
    }
`;

export const CardEditStyle = styled.div`

    position: absolute;
    bottom: -18px;
    right: -40px;

    background-color: ${theme.colors.gray['400']};
    padding: .4rem;
    display: flex;
    gap: .4rem;
    border-radius: 4px;

    border: 1px solid ${theme.colors.gray['500']};
`;

export const CardEditColorStyle = styled.div`

    background-color: ${({color}) => color};

    padding: .4rem;

    border-radius: 4px;

    width: 20px;
    height: 20px;
    transition: .1s;
    cursor: pointer;
    &:hover {
        opacity: .6;
    }

`;