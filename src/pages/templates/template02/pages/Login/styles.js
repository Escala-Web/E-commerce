import styled from "styled-components";

export const Container = styled.div`

    height: 100vh;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: row-reverse;

    border-top: 2px solid ${({ theme }) => theme.colors.secondary};

    background-color: ${({theme}) => theme.colors.background};


    @media (max-width: 1220px){
        /* background-color: aqua; */

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column-reverse;

    }   

`;

export const ContainerRegister = styled.div`

    background-color: ${({theme}) => theme.colors.secondary};

    height: 80%;
    
    width: 30%;

    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    
    padding: 1.2rem;

    box-sizing: border-box;
    
    border-radius: 0 12px 12px 0;

    @media (max-width: 1220px){
        display: none;

    } 

`;


export const ContainerRegisterContent = styled.div`

    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    text-align: center;

    .register-title {
        color: ${({ theme }) => theme.colors.text_secondary};
        opacity: .9;
        
        font-size: 2rem;
    }

    .register-subtitle {
        color: ${({ theme }) => theme.colors.text_secondary};
        opacity: .9;
        line-height: 20px;
    }

    `;


export const ButtonRegister = styled.div`



    margin-top: 1.4rem;

    border-radius: 6px;

    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    .register-button {
        text-align: center;

        background-color: ${({ theme }) => theme.colors.primary};
        padding: .5rem 1.6rem;
        width: 100%;

        color: ${({ theme }) => theme.colors.text_primary};
        border: 1px solid ${({ theme }) => theme.colors.secondary};
        text-decoration: none;
        border-radius: 6px;

        &:hover {
            transform: scale(1.01);
        }
    }

    @media (max-width: 1220px){
        display: none;
    }


`;

export const ButtonRegisterMobile = styled.div`

@media (min-width: 1220px){
        display: none;
    }

    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 1rem;
    background-color: ${({ theme }) => theme.colors.primary};
    
    padding: .5rem 1.6rem;
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.secondary};

    text-decoration: none;
    border-radius: 6px;

    .register-button {
        text-align: center;
        color: ${({ theme }) => theme.colors.secondary};
        text-decoration: none;
    }
    
`;

export const ContainerFormulario = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;

    height: 80%;
    width: 40%;

    background-color: ${({theme}) => theme.colors.primary};

    border-radius: 12px 0 0 12px;

    @media (max-width: 1449px){
        display: flex;

        width: 50%;

        box-shadow: 0 0 4px #0000004f;

        border-radius: 8px;
    } 

    @media (max-width: 1219px){
        display: flex;

        box-shadow: 0 0 4px #0000004f;

        border-radius: 8px;

        width: 80%;
        height: 60%;
    } 

    @media (max-width: 1219px){
        width: 90%;
        height: 70%;
    }

    .back {
        position: absolute;
        top: 60px;
        left: 34px;
        color: ${({ theme }) => theme.colors.text_primary};

        font-size: 1rem;
        font-weight: 600;

        text-decoration: none;

        opacity: .8;

        display: flex;
        align-items: center;

        gap: .2rem;

        &:hover {
            opacity: 1;
        }
    }

    .icon-back {
        font-size: 20px;
    }

    .link-reset-password {
        width: 100%;
        text-align: end;

        color: ${({ theme }) => theme.colors.text_primary};

    }

    .content-reset-password {
        text-align: center;
        width: 100%;
        margin: .4rem 0;
    }


`;