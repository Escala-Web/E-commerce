import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    gap: 3rem;
    height: 100%;

    flex-wrap: wrap;

    .card {
        text-align: center;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .setting {
        position: absolute;
        top: 0;
        right: 0;

        cursor: pointer;
    }

    .card-input {
        width: 8rem;
    }

    .container-setting {
        background-color: #fff;
        padding: .6rem;
        border-radius: 8px;
        position: absolute;
        right: 0;
        top: 20px;
        width: 11rem;

        border: 1px solid #ccc;

        text-align: end;

        ul {
            list-style: none;

            li {
                padding: .2rem;
                cursor: pointer;

                &:hover {
                    background-color: #f2f2f2;
                }
            }
        }
    }

`;

export const SideBar = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;

`;