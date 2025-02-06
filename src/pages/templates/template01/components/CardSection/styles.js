import styled from "styled-components";

export const Container = styled.div`

    background-color: ${({theme}) => theme.colors.primary};
    padding: 1rem 2rem;

    margin: ${({m}) => m};

    /* border: 1px solid #ccc; */

    border-radius: 6px;

`;

export const ContainerHeaderTitle = styled.div`

    h3 {
        color: ${({theme}) => theme.colors.text_primary};
        font-size: 2.2rem;

        opacity: .9;

        margin-bottom: 2rem;
    }

`;