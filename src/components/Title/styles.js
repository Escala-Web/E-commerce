import styled from "styled-components";

export const Container = styled.h1`

    font-size: ${({fontSize}) => fontSize};

    color: #343434;
    font-weight: 600;

    text-align: ${({textAlign}) => textAlign};

`;