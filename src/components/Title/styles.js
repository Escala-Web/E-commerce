import styled from "styled-components";
import { theme } from "../../theme/theme";

export const Container = styled.h1`

    font-size: ${({fontSize}) => fontSize};

    color: ${theme.colors.black['600']};
    font-weight: 600;

    text-align: ${({textAlign}) => textAlign};

`;