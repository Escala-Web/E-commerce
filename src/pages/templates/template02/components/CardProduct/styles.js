import styled from "styled-components";

export const ContainerCard = styled.div`

    display: flex;
    align-items: center;

    gap: 2rem;
    
    flex-wrap: wrap;

    justify-content: space-between;

    .breacrums {
        width: 100%;
        padding: .4rem 0;

        a {
            color: ${({ theme }) => theme.colors.text_primary};
            text-decoration: none;
        }
    }

`;