import styled from "styled-components";

export const Container = styled.div`

    background-color: ${({theme}) => theme.colors.background};

    min-height: 100vh;



    margin: 0 auto;

    @media (max-width: 1489px) {
        padding: 1rem 1rem;
    }

    @media (max-width: 768px) {

        padding: 1rem 1rem;

}

`;