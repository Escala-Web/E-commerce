import styled from "styled-components";

export const ContainerBody = styled.div`

    padding: 1rem;

    background-color: ${({ theme }) => theme.colors.primary};

    width: 100%;

    box-shadow: 0 0 2px ${({ theme }) => theme.colors.text_primary};
    border-radius: 0 6px 6px 0;

    .header {
        opacity: .9;
        border-bottom: 1px double ${({ theme }) => theme.colors.secondary};
        color: ${({ theme }) => theme.colors.secondary};
    }

`;