import styled from "styled-components";

export const ContainerHeader = styled.div`



    display: flex;
    flex-direction: column;


    .container_header_main_mobile {

        display: flex;
        flex-direction: column;

        @media (min-width: 862px) {
            display: none;
        }
    }

    .header_mobile_top {
        display: flex;
        align-items: center;
        justify-content: space-between;

        height: 72px;

        padding: 0 1rem;

        svg {
            font-size: 28px;
            color: ${({ theme }) => theme.colors.background_secondary};
            opacity: .7;
        }
    }

    .search_mobile {
        background-color: ${({ theme }) => theme.colors.secondary};
        padding: .8rem 1rem ;

        width: 100%;
    }




    .container_header_main {
        display: flex;
        align-items: center;
        justify-content: space-between;

        min-width: 1440px;
        margin: 0 auto;
        height: 93px;

        @media (max-width: 1440px) {
            min-width: 100%;
        }

        @media (max-width: 862px) {
            display: none;
        }
        
    }

    .container_header_logo {

        max-width: 180px;

        @media (max-width: 900px) {
            max-width: 150px;
        }

        img {
            width: 100%;
            padding: 1.4rem;
        }
    }

    .container_header_actions {
        display: flex;
        align-items: center;
        gap: 2rem;

        padding: 0 1.6rem;
    }

    .container_header_login {
        display: flex;
        align-items: center;

        gap: .6rem;

        p {
            font-size: 0.85rem;
            color: ${({ theme }) => theme.colors.text_primary};

            line-height: 16px;

            a {
                text-transform: uppercase;
                text-decoration: none;
                color: ${({ theme }) => theme.colors.text_primary};
                font-weight: 500;

                opacity: 0.8;
            }
        }
    }

    .header_login_icon {
        svg {
            font-size: 26px;
            color: ${({ theme }) => theme.colors.background_secondary};
            opacity: .7;
        }
    }


    .container_favorid_and_cart {
        display: flex;
        align-items: center;
        gap: 1.2rem;
    }

    .favorid {

    }

    .icons {
        font-size: 26px;
            color: ${({ theme }) => theme.colors.background_secondary};
            opacity:.7;
    }

    .container_header_navigation {
        background-color: ${({ theme }) => theme.colors.secondary};;

    
        min-width: 1440px;
        height: 60px;
        display: flex;

        align-items: start;

        padding: 0 2rem;

        @media (max-width: 1440px) {
            min-width: 100%;
        }

        @media (max-width: 862px) {
            display: none;
        }
    }

    .container_navigation {
        /* max-width: 1440px; */
        margin: 0 auto;
        width: 1440px;
        height: 100%;
        display: flex;
        align-items: center;

        @media (max-width: 1190px) {
            width: 100%;
        }

        ul {
            
            display: flex;
            align-items: center;

            gap: 2rem;

            list-style: none;
            
            li > a {
                color: ${({ theme }) => theme.colors.primary};
                text-decoration: none;

                /* text-transform: uppercase; */

                font-size: 16px;
                font-weight: 500;
            }
        }

    }

`;

export const ContainerNavibar = styled.div`

    /* background-color: aqua; */
    display: flex;
    flex-direction: column;

    justify-content: space-between;
    height: 100vh;


    .container_enter {
        padding: 1rem;

        /* background-color: black; */

        display: flex;
        flex-direction: column;
        gap: .4rem;
    }

    .link {

        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 16px;
        font-weight: 500;

        text-decoration: none;

        padding: .4rem;
        border-radius: 6px;
    }

    .enter {
        color: ${({ theme }) => theme.colors.primary};
        background-color: ${({ theme }) => theme.colors.secondary};
    }

    .register {
        color: ${({ theme }) => theme.colors.secondary};
        border: 1px solid ${({ theme }) => theme.colors.secondary};
    }

    .container_nav {
        height: 80px;

        display: flex;
        align-items: center;

        gap: 1rem;
        padding: 0 1rem ;

        p {
            font-size: 17px;
            font-weight: 500;

            color: ${({ theme }) => theme.colors.background_secondary};
        }
    }

`;