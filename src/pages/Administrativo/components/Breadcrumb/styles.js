import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`

    background-image: url(${({image}) => image});

    /* height: 140px; */

    background-repeat: no-repeat;
    background-size: cover;

    padding: 2rem 4rem 4rem;

    /* opacity: .6; */


`;

export const ContainerBread = styled.div`

    z-index: 999999;

    color: #fff;

    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    height: 100%;

    gap: .4rem;

    line-height: 2rem;

    .header-breadcrumb {
        display: flex;
        align-items: center;
    }

    h2 {
        font-size: 2.4rem;
    }

`;

export const LinkStyle = styled(Link)`

    color: #fff;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 700;
    opacity: .9;

`;