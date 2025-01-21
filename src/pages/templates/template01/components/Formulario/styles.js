import styled from "styled-components";

export const ContainerFormulario = styled.form`

    width: ${({w}) => w || '100%'};

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    flex-direction: column;

    position: relative;

    background-color: ${({bg}) => bg};
    padding: ${({p}) => p};

    border-radius: 6px;

    box-sizing: border-box;

    input {
        width: 100%;
        padding: .6rem 2rem;
        border: none;

        border-radius: 8px;
        border: 1px solid #ccc;

        box-sizing: border-box;

        outline: 0;

        margin-bottom: 1rem;

        &:focus {
            border: 1px solid #149dedb0;
            box-shadow: 0 0 6px #149dedb0;
        }
    }

    button {
        background-color:${({theme}) => theme.colors.secondary};
        color: #fff;
        padding: .6rem 2rem;

        width: 100%;
        border: none;

        border-radius: 6px;

        cursor: pointer;
        transition: .1s;
        &:hover {
            transform: scale(1.02);
        }
    }

    h2 {
        text-align: start;
        /* background-color: aqua; */
        width: 100%;
        margin-bottom: 2rem;
        font-size: 2.4rem;
        color: ${({theme}) => theme.colors.text_primary};
    }

`;