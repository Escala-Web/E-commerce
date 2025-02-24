import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    align-items: center;
    
    gap: 1.6rem;

    margin-top: 2rem;

    overflow: hidden;

    overflow-x: scroll;
    padding: .6rem 0;

    scrollbar-color: transparent;

    ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;

  
`;

export const ContainerCard = styled(Link)`

    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column;

    text-decoration: none;

    color: ${({ theme }) => theme.colors.text_primary};


    p {
        margin-top: .6rem;
        font-weight: 400;
        font-size: 1.1rem;
    }

`;

export const ContainerImageCategory = styled.div`

    cursor: pointer;

    height: 120px;
    width: 120px;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({theme}) => theme.colors.accent};

    border: 1px solid ${({theme}) => theme.colors.secondary};

    box-shadow: 0 0 6px #000000a1;

    position: relative;

    overflow: hidden;

    &:hover {
        color: ${({ theme }) => theme.colors.text_secondary};
    }

    img {
        object-fit: cover;
        width: 100%;
        height: 120px;
    }

    &::before {
        content: '';
        background-color: ${({ theme }) => theme.colors.secondary};

        opacity: .4;
        
        height: 100%;
        width: 0%;

        position: absolute;
        left: 0;
        top: 0;
        /* border-radius: 50%; */

        transition: .3s;
    }

    &:hover::before {
        width: 100%;
    }

    @media (max-width: 500px) {

        width: 80px;
        height: 80px;
    }




`;