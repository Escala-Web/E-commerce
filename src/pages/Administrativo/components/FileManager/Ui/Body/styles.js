import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    flex-direction: column;

    width: 100%;

    gap: 1rem;

    /* height: 200px; */

    /* background-color: aqua; */

`;

export const HeaderManager = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;

    border-bottom: 1px solid #ccc;
    padding-bottom: 1rem;

    .dirname {
        display: flex;
        align-items: center;

        height: 30px;

        /* gap: .6rem; */

        p {
            background-color: #f3f3f3;

            height: 100%;
            display: flex;
            align-items: center;
            width: 250px;
            padding: 0 .6rem;

            border: 1px solid #ccc;

            font-size: 14px;
            font-weight: 400;
        }

        span {
            background-color: #f3f3f3;
            border: 1px solid #ccc;
            width: 40px;

            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;

            /* transform: scale(1.1); */

            cursor: pointer;

            svg {
                font-size: 17px;
                color: #333;
            }
        }
    }

    .actions_header {
        display: flex;
        align-items: center;

        height: 30px;

        span {
            background-color: #f3f3f3;
            border: 1px solid #ccc;
            width: 40px;

            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;

            cursor: pointer;

            svg {
                font-size: 17px;
                color: #333;
            }
        }
    }

`; 


export const ContentManager = styled.div`

    display: flex;
    align-items: center;
    
    gap: 1rem;

`;