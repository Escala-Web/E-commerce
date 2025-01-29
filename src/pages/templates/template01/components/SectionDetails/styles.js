import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    flex-direction: column;

    /* background-color: aqua; */

    height: 90vh;
    width: 100%;

    /* padding: 2rem; */

    box-sizing: border-box;

    border-radius: 6px;

`;

export const ContainerHeader = styled.div`

    display: flex;
    gap: 2rem;

    padding-bottom: 2rem;

    border-bottom: 2px solid ${({theme}) => theme.colors.accent};

`;

export const ContainerHeaderBanner = styled.div`

    background-color: ${({theme}) => theme.colors.secondary};

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;

    width: 44%;

    border-radius: 12px;

`;

export const ContainerContentImage = styled.div`

    display: flex;
    align-items: start;

    flex-wrap: wrap;

    gap: 1rem;

    img {
        width: 80px;
        height: 80px;

        border: 1px solid #ccc;
        border-radius: 6px;
    }

    p {
        color: #343434;
        margin-top: 22px;
        font-weight: 600;
        font-size: 1.2rem;
    }

`;

export const ContainerHeaderBannerText = styled.div`

    color: ${({theme}) => theme.colors.text_secondary};
    opacity: .9;

    gap: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h3 {
        font-size: 2.4rem;
    }

    p {
        font-size: 1.4rem;
    }

`;

export const ContainerHeaderBannerImage = styled.div`

    width: 32%;

    img {
        width: 100%;
    }

`;

export const ContainerContent = styled.div`

    margin-top: 4rem;

`;