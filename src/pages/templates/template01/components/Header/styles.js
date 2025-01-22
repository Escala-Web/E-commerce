import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerHeader = styled.header`

    display: flex;
    flex-direction: column;
    width: 100%;

    @media (max-width: 768px) {

        display: none;

    }
    
    `;

export const ContainerHeaderMenu = styled.div`

display: flex;
align-items: center;
justify-content: space-between;

padding: 1rem 10rem;

background-color: ${({theme}) => theme.colors.primary};



`

export const ContainerHeaderLogo = styled.div`

    width: 20%;

    /* background-color: aqua; */

    display: flex;
    align-items: center;
    justify-content: start;

    img {
        width: 50%;
    }

`;

export const ContainerHeaderNavegacao = styled.nav`

    /* width: 80%; */


    ul {
        list-style: none;
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    li {
        gap: 1rem;
    }

`;

export const HeaderLink = styled(Link)`

    text-decoration: none;
    color: ${({theme}) => theme.colors.text_primary};

    font-weight: 400;

    font-size: 1.1rem;
    padding: .4rem 1rem;
    border-radius: 6px;

`;

export const HeaderLogin = styled.div`

    display: flex;
    gap: 2rem;

`;

export const HeaderContainerLinkLogin = styled.div`
    display: flex;
    flex-direction: column;

`;

export const HeaderLinkLogin = styled(Link)`

    text-decoration: none;

    color: ${({theme}) => theme.colors.text_primary};;

`;

export const HeaderContainerLoginIcon = styled.div`

    display: flex;
    align-items: center;
    gap: .6rem;

`;

export const HeaderIconLogin = styled.div`

    padding: .4rem;
    border-radius: 50%;

    width: 20px;
    height: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #cccccc26;

    position: relative;

    

    p {
        position: absolute;
        top: -10px;
        right: -5px;
        font-weight: 600;
        font-size: 12px;
        background-color: ${({theme}) => theme.colors.secondary};
        width: 20px;
        height: 20px;

        color: ${({theme}) => theme.colors.text_secondary};

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 50%;
    }

`;


export const ContainerHeaderSearch = styled.div`

    padding: 1rem 12rem;
    background-color: ${({theme}) => theme.colors.secondary};
    border-radius: 6px;

`;

export const HeaderIconSearch = styled.div`

    position: absolute;
    right: 20px;
    top: 7px;

`;

export const HeaderResultsSearch = styled.div`

    position: absolute;
    top: 40px;
    background-color: ${({theme}) => theme.colors.primary};;
    left: 0;

    padding: 1rem;

    border-radius: 0 22px 22px 22px;
    border: 1px solid #ccc;

    p {
        cursor: pointer;
        padding: .4rem 0;

        &:hover {
            background-color: ${({theme}) => theme.colors.text_secondary};
        }
    }

`;