import styled from "styled-components";

export const ContainerSection = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 2rem;


`;

export const ContainerSteps = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    div {
        text-align: center;

        p {
            padding-top: .8rem;
            font-weight: 500;
            font-size: 1rem;
        }
    }

`;

export const Steps = styled.div`

    height: 100px;
    width: 100px;
    border-radius: 50%;

    display: flex;
    align-items: center ;
    justify-content: center;

    background-color: ${({theme}) => theme.colors.secondary};
`;

export const ContainerCart = styled.div`

    display: flex;
    gap: 2rem;

    margin-top: 2rem;

`;

export const CardProduct = styled.div`

    /* height: 200px; */
    width: 100%;


    display: flex;
    flex-direction: column;

    gap: .6rem;

    div {
        background-color: ${({theme}) => theme.colors.accent};
        padding: .4rem;
        display: flex;
        align-items: center;

        justify-content: space-between;

        border-radius: 8px;
        border-radius: 2px solid ${({theme}) => theme.colors.accent};
    }


`;

export const ContainerImage = styled.div`

    width: 100px;
    height: 120px;

    img {
        width: 100%;
    }

`;