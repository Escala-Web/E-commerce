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

    input, select {
        width: 100%;
        padding: .6rem 1rem;
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

    h3 {
        text-align: start;
        /* background-color: aqua; */
        width: 100%;
        margin-bottom: 1rem;
        font-size: 1.2rem;
        color: ${({theme}) => theme.colors.text_primary};
    }

    label {
        text-align: start;
        width: 100%;
        opacity: .8;
        margin-bottom: .4rem;
    }

    .error {
        border: 1px solid red;

        &:focus {
            border: 1px solid rgba(237, 27, 20, 0.69);
            box-shadow: 0 0 6px rgba(237, 27, 20, 0.69);
        }
    }

`;