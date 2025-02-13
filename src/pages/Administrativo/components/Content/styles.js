import styled from "styled-components";

export const Container = styled.div`

    background-color: #fff;
    border-radius: 6px;

    overflow: hidden;

    width: ${({ w }) => w};
    height: 100%;

    .header {
        border-bottom: 1px solid #f3f3f3;
        padding: 1rem 0;

        h3 {
            padding: 0 2rem;
            color: #333;
            opacity: .8;
        }
    }

    .content {
        padding: 2rem 2rem;
    }

`;