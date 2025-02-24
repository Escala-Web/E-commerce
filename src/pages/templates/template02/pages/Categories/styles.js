import styled from "styled-components";

export const ContainerProduct = styled.div`

    display: flex;

    gap: 2rem;

    @media (max-width: 786px) {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

`;


export const Aside = styled.aside`


    box-shadow: 0 0 6px #00000024;

    width: 22%;
    padding: 1rem;

    height: 100%;

    border-radius: 6px;

    background-color: ${({ theme }) => theme.colors.primary};

    h4 {
        margin-bottom: 1rem;
        font-size: 1.4rem;
        color: ${({ theme }) => theme.colors.text_primary};
    }

    @media (max-width: 768px) {
        width: 74%;
        height: 100%;
        padding: 1rem;
    }

    .form-filter {
        display: flex;
        flex-direction: column;
        margin-bottom: 1.4rem;
    }

`;



export const ContainerContent = styled.div`

    width: 80%;

    .container-pagination {
        /* background-color: aqua; */
        display: flex;
        align-items: end;
        justify-content: end;
        margin: 3rem 0 2rem;
    }


`;

export const ContainerCardStyle = styled.div`

    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

`;