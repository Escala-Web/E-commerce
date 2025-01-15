import styled from "styled-components";
import { theme } from "../../../../../theme/theme";


export const ContainerForm = styled.div``;

export const FormularioStyle = styled.form`

    /* background-color: aqua; */

    height: 100%;
    
    width: ${({w}) => w || '100%'};

    display: flex;
    flex-direction: column;
    gap: 1rem;

    /* padding: 2rem 0rem; */

    input {
        padding: .6rem 1rem;
        border-radius: 6px;
        
        border: 1px solid ${theme.colors.black['500']};
        outline: 0;

        &:focus {
            border: 1px solid #009ae3;
            box-shadow: 0 0 4px #009ae3;
        }
    }

    button {
        padding: .6rem 1rem;
        border-radius: 6px;

        border: 1px solid ${theme.colors.black['500']};
        outline: 0;

        cursor: pointer;

        background-color: #009ae3;
        color: ${theme.colors.white['100']};

        font-weight: 700;
    }

    select {
        padding: .6rem 1rem;
        border-radius: 6px;

        border: 1px solid ${theme.colors.black['500']};
        outline: 0;
    }

`;