import styled from "styled-components";


export const Form = styled.form`

    display: flex;
    flex-direction: column;

    gap: .6rem;

`;

export const SectionPageStyle = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:  ${({display}) => display || 'row'};

    margin: ${({m}) => m || '0'};
    
    gap: 1rem;

    width: ${({w}) => w || '100%'};

`;