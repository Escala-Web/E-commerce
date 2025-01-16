import styled from "styled-components";
import { theme } from "../../../../../theme/theme";


export const ContainerForm = styled.div``;

export const FormularioStyle = styled.form`

    /* background-color: aqua; */

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;

    box-sizing: border-box;

    gap: .6rem;
    padding: 4rem 2rem;
    min-height: 50vh;
    border-radius: 8px;
    /* border: 1px solid #ccc; */
    /* padding: 2rem 0rem; */

    h3 {
        font-size: 2rem;
        color: #374151;
        padding-bottom: 4rem;
        text-align: center;
    }

    input {
        padding: .8rem 1rem;
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

        font-size: 1rem;
        font-weight: 700;

        margin-top: 1.4rem;
    }

    select {
        padding: .8rem 1rem;
        border-radius: 6px;

        border: 1px solid ${theme.colors.black['500']};
        outline: 0;
    }

`;