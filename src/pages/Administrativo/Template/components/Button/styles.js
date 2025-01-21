import styled from "styled-components";

export const Container = styled.button`

    background-color: #1e1e1e;
    padding: .6rem 2rem;
    color:rgb(221, 221, 221);
    font-weight: 600;

    border: none;
    border-radius: 6px;
    cursor: pointer;

    transition: .2s;

    &:hover {
        transform: scale(1.06);
    }

    .active {
        transform: scale(1.06);
    }


`;