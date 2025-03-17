import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    /* background-color: aqua; */

    height: 100vh;

`;

export const Header = styled.header`

        display: flex;
        flex-direction: column;

        gap: .6rem;
        width: 100%;

        padding: 1rem 0;

        .header_top {
            display: flex;
            align-items: center;
            justify-content: space-between;

            width: 100%;

            h4 {
                font-size: 18px;
                font-weight: 700;

                opacity: .8;
                text-transform: uppercase;
            }

            img {
                width: 200px;
            }

            
        }

        .header_content {

            border-top: 1px solid #ccc;
            border-bottom: 1px solid #ccc;

            width: 100%;

            text-align: center;

            p {
                font-weight: 400;
                font-size: 14px;

                font-size: #1e1e1e;
            }
        }

        .header_botton {
            width: 100%;
            text-align: end;

            p {
                font-size: 16px;
                font-weight: 500;
            }
        }

`;

export const Fotter = styled.footer`

        display: flex;
        align-items: center;

        flex-direction: column;

        border-top: 1px solid #ccc;

        padding-top: 12px;
        p {


            text-align: center;
            font-size: 16px;

            font-weight: 400;

            color: #1e1e1e;

            opacity: .8;
        }

`;