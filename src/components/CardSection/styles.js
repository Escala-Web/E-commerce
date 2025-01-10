import styled from "styled-components";
import { theme } from "../../theme/theme";

export const Container = styled.div`

    padding: 1rem 2rem;
    background-color: ${theme.colors.white['100']};

    box-sizing: border-box;

    border-radius: .5rem;

    width: ${({w}) => w};

    border: 1px solid rgba(50, 50, 50, 0.16);

`;