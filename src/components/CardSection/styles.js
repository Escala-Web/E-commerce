import styled from "styled-components";

export const Container = styled.div`

    padding: 1rem 2rem;
    background-color: #FFF;

    box-sizing: border-box;

    border-radius: .5rem;

    width: ${({w}) => w};
    height: ${({h}) => h};

    border: 1px solid rgba(50, 50, 50, 0.16);

    overflow-y: ${({scroll}) => scroll || 'none'};

`;