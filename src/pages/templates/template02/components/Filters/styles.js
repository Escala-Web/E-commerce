import styled from "styled-components";

export const Container = styled.div`

    padding: 1rem;


    .border {
        border-bottom: 1px solid #ccc;
        padding-bottom: .6rem;
    }

    .container_filter {
        display: flex;
        flex-direction: column;
        gap: .8rem;
    }

    .mt {
        margin-top: .8rem;
    }

    .title {
        font-size: 30px;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.text_primary};
    }

    .container_form {
        display: flex;
        flex-direction: column;

        gap: .4rem;
    }

    .form_grup {
        display: flex;
        align-items: center;
        gap: .4rem;

        label {
            color: ${({ theme }) => theme.colors.text_primary};
            font-size: 14px;
            font-weight: 400;

            text-transform: capitalize;
        }
    }

    .children {
        /* background-color: aqua; */
        margin-left: 6px;

        border-left: 1px solid #ccc;
        padding-left: 1rem;

        margin-bottom: 6px;

    }

    .input_radio {
        border-radius: 1px;
        
    }


`;