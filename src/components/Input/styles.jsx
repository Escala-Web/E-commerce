import styled from "styled-components";
import { theme } from "../../theme/theme";

export const ContainerInput = styled.div`

    display: flex;
    flex-direction: ${({display}) => display || 'column'};

    width: 100%;

    gap: .6rem 0;

    

    label {
        color: ${theme.colors.black['600']};
        font-weight: 500;
        margin-top: 1rem;
    }

`;

export const InputStyle = styled.input`

    padding: .6rem 1rem;
    outline: 0;

    border: 1px solid rgb(222, 222, 222);

    border-radius: 4px;

`;