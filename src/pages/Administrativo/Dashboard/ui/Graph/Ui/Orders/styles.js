import styled from "styled-components";

export const Container = styled.div`

    width: 100%;


    .container {
        width: 50%;
        display: flex;
        align-items: center;
        gap: 0 1rem;

        .container_form {
        display: flex;
        align-items: center;
        gap: 1.2rem;
        margin-top: 1rem;
        margin-bottom: 1rem;

        width: 100%;

        label {

            font-size: 12px;
            padding: 0.5rem 0;
            font-weight: 500;
            color: #565656;

            /* display: flex; */
            /* flex-direction: column; */

            width: 12%;

            select {
                width: 100%;
                padding: 0.5rem;
                border: 1px solid #ccc;
                border-radius: 4px;
                font-size: 12px;

                color: #565656;
            }

            input {
                width: 100%;
                padding: 0.5rem;
                border: 1px solid #ccc;
                border-radius: 4px;
                font-size: 12px;

                outline: 0;

                color: #565656;
            }
        }
    }
    }

    .title {
        color: #565656;
        font-size: 26px;
        font-weight: 500;

        margin-bottom: 1rem;
    }

    

`;