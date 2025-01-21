import styled from "styled-components";

export const ContainerButton = styled.div`

    width: 100%;

    margin: ${({margin}) => margin};

    button {
        padding: .6rem 1rem;
        width: 100%;
        border: none;

        background-color: ${({theme}) => theme.colors.primary};

        color: #FFF;

        font-size: 1.1rem;

        border-radius: 6px;

        cursor: pointer;

        transition: .2s;



        &:hover {
            background-color: #343434;
            color: #FFF;
        }
    }

`;