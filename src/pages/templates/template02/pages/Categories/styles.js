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

    background: ${({ theme }) => theme.colors.accent};

    width: 22%;
    padding: 1rem;

    height: 60vh;

    border-radius: 6px;

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

`;

export const AsideFilter = styled.div`

    display: flex;
    flex-direction: column;

    label > input {
        margin-right: .4rem;
    }

`;

export const ContainerContent = styled.div`

    width: 80%;



`;

export const ContainerCardStyle = styled.div`

    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

`;