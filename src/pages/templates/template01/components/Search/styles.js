import styled from "styled-components";

export const ContainerSearch = styled.div`

    display: flex;
    align-items: center;

    flex-direction: column;

    position: relative;

    .container_search {
        display: flex;
        align-items: center;

        @media (max-width: 842px) {
                width: 100%;
            }

        input {
            padding: 12px 16px;

            outline: 0;
            border: 1px solid #ccc;

            border-radius: 4px 0 0 4px;

            min-width: 450px;

            @media (max-width: 1190px) {
                min-width: 300px;
            }

            @media (max-width: 842px) {
                width: 100%;
                padding: 6px 12px;
            }
            
        }

        button {
            padding: 12px 16px;
            outline: 0;
            border: 1px solid ${({ theme }) => theme.colors.secondary};

            border-radius: 0 4px 4px 0;

            cursor: pointer;

            background-color: ${({ theme }) => theme.colors.secondary};

            color: ${({ theme }) => theme.colors.primary};
            
            font-weight: 400;

            @media (max-width: 842px) {
                background-color: ${({ theme }) => theme.colors.background_secondary};;
                border: 1px solid ${({ theme }) => theme.colors.background_secondary};
                padding: 6px 12px;
            }
        }
    }

    .container_search_results {
        /* background-color: aqua; */
        position: absolute;

        width: 100%;

        top: 43px;
        left: 0;

        max-height: 500px;

        z-index: 9999;

        border: 1px solid #ccc;
        border-radius: 0 0 4px 4px;

        background-color: ${({ theme }) => theme.colors.primary};
    }

`;