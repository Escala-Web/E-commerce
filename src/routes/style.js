import styled from "styled-components";
import { theme } from "../theme/theme";

export const ContainerRouter = styled.div`

    display: flex;

    background-color: ${theme.colors.white['200']};
`;

export const ContainerContent = styled.div`

    padding: 0 2rem;

    width: 100%;
    height: 100vh;

    overflow: auto;

`;