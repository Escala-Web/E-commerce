import styled from "styled-components";
import { theme } from "../../theme/theme";

export const Container = styled.div`

    /* background-color: aqua; */

    height: 100vh;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

`;

export const Form = styled.form`

    background-color: ${theme.colors.white['100']};
    border-radius: 12px;
    border: 1px solid rgb(222, 222, 222);
    padding: 2rem;

    width: ${({w}) => w};

    h1 {
        margin-bottom: .6rem;
        color: ${theme.colors.black['600']};
        font-weight: 600;
    }

`;