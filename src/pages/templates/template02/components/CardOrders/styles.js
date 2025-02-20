import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
    
    
    
    `;

export const ContainerCard = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 4rem;
    background-color:rgba(247, 247, 247, 0.79);
    border-radius: 12px;

    box-shadow: 0 0 2px ${({ theme }) => theme.colors.text_primary};

    .image {
        width: 140px;
        /* height: 120px; */

        img {
            width: 100%;
            border-radius: 6px;
            box-shadow: 1px 1px 4px #ccc;
        }
    }

    .content {

        height: 100%;
        line-height: 20px;

    }

    .container-link {
        display: flex;
        flex-direction: column;
        margin-left: 20px;
        /* background-color: aqua; */
        width: 16rem;
        gap: .3rem;
    }

    .link {
        width: 100%;
        /* background-color: aqua; */
        text-align: center;
        padding: .4rem;

        color: ${({ theme }) => theme.colors.secondary};
        text-decoration: none;
        border: 1px double ${({ theme }) => theme.colors.secondary};
        border-radius: 6px;
    }

`;