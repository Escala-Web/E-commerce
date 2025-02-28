import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`

    /* background-image: url(${({image}) => image || 'https://static.vecteezy.com/ti/fotos-gratis/t2/6671698-fundo-azul-escuro-abstrato-com-bokeh-colorido-brilhante-luzes-bokeh-fundo-claro-foto.jpg'}); */
    background-color: #2fa3e7;

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