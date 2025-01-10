import styled from "styled-components";
import { theme } from "../../theme/theme";

export const Container = styled.div`

    display: flex;

    padding-bottom: 1rem;

    gap: .4rem;

    border-bottom: 1px solid rgba(50, 50, 50, 0.16);

    p {
        color: ${theme.colors.gray[800]};
        
            font-weight: 500;
    }

`; 