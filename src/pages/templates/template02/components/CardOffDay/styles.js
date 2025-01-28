import styled from "styled-components";

export const Container = styled.div`

    background-color: #fff;
    width: 21rem;
    /* height: 450px; */
    position: relative;
    border-radius: 6px;

    overflow: hidden;
    box-shadow: 0 0 4px #ccc;

`;

export const CardImage = styled.div`

    width: 100%;

    /* height: 250px; */

    img {
        width: 100%;
    }

`;

export const CardBody = styled.div`

    padding: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;

    div > p {
        color: ${({theme}) => theme.colors.text_primary};
        margin-bottom: 1rem;
    }

    div > h4 {
        color: ${({theme}) => theme.colors.text_primary};
        font-size: 1.4rem;
    }
`;

export const CardHeart = styled.div`

    position: absolute;
    right: 20px;
    top: 20px;

    width: 40px;
    height: 40px;

    border-radius: 50%;

    background-color: ${({theme}) => theme.colors.accent};

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    /* padding: .1rem; */

`;