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
    flex-wrap: wrap; 
    justify-content: space-between; 
    overflow: hidden;

    
`;

export const ContainerCard = styled.div`
    width: 100%; 
    max-width: 300px; 
    /* background-color: aqua; */
    padding: 1rem;
    border-radius: 8px; 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
    
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

    height: 200px;

    display: flex;
    align-items: start;
    justify-content: space-between;
    flex-direction: column;
    padding: 6px;

`;

export const CardContentTitle = styled.div`

    p {
        font-size: 1.2rem;
        font-weight: 500;
        color: ${({theme}) => theme.colors.text_primary};
    }

`;


export const CardContentPrice = styled.div`

    p {
        font-size: 1.4rem;
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