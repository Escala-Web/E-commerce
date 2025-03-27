import { Link } from "react-router-dom";
import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;


export const CardContainer = styled.div`
    width: 100%;
    display: flex;
    gap: 1rem;
    flex-wrap: ${({ flex }) => flex === false ? 'nowrap' : 'wrap'}; 
    justify-content: space-between; 
    overflow: hidden;

    
`;

export const ContainerCard = styled.div`
    /* width: 100%;  */
    ${({ flex, w }) => flex === false ? `min-width: ${w || '268px'};` : `max-width: ${w || '268px'};`}

    padding: 1rem;
    border-radius: 8px; 
    border: 1px solid #ccc;
    
`;


export const ContainerImage = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 100%;

    }
`;

export const CardContent = styled.div`

    height: 190px;

    display: flex;
    align-items: start;
    justify-content: space-between;
    flex-direction: column;
    padding: 6px;

`;

export const CardContentTitle = styled.div`

    p {
        font-size: 14px;
        font-weight: 500;
        color: ${({theme}) => theme.colors.text_primary};
    }

`;


export const CardContentPrice = styled.div`

    p {
        font-size: 1.5rem;
        font-weight: 600;
        color: ${({theme}) => theme.colors.secondary};
    }

`;

export const CardContentButton = styled(Link)`

    background-color: ${({theme}) => theme.colors.secondary};
    padding: .6rem 2rem;
    width: 100%;

    box-sizing: border-box;

    text-align: center;
    border-radius: 6px;

    font-weight: 500;

    color: ${({theme}) => theme.colors.text_secondary};
    text-decoration: none;


`;