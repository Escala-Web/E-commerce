import styled from "styled-components";

export const Container = styled.div`

    background-color: ${({theme}) => theme.colors.primary};
    padding: 1rem;
    width: 100%;

    margin: ${({m}) => m};

    /* border: 1px solid #ccc; */

    border-radius: 6px;

    .container_title {
    
    text-transform: capitalize;

    position: relative;
    z-index: 1; 

    h3 {
        position: relative;
        z-index: 2;
        font-size: 1.8rem;
        font-weight: 600;
        opacity: .9;
        text-transform: capitalize;
        color: ${({ theme }) => theme.colors.background_secondary};
        /* color: #1a1a1a; */
    }

    &::before {
        content: '';
        width: 9.5%;
        height: 3px;
        /* background-color: ${({ theme }) => theme.colors.secondary}; */

        border-radius: 20px;

        position: absolute;
        bottom: 4px;
        left: 0;
        z-index: 0; 
    }
}


`;
