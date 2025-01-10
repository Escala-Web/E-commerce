import styled from "styled-components";
import { theme } from "../../theme/theme";

export const ContainerButton = styled.div`

    width: 100%;

    margin: ${({margin}) => margin};

    button {
        padding: .6rem 1rem;
        width: 100%;
        border: none;

        background-color: ${theme.colors.black['600']};
        color: ${theme.colors.white['100']};

        font-size: 1.1rem;

        border-radius: 6px;

        cursor: pointer;

        transition: .2s;

        &:hover {
            background-color: ${theme.colors.black['500']};
            color: ${theme.colors.white['100']};
        }
    }

`;