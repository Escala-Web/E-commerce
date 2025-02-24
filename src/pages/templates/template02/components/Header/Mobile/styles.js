import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    flex-direction: column;

    width: 16rem;

    .header-mobile-logar{
        display: flex;
        align-items: center;
        justify-content: space-between;

        color: ${({ theme }) => theme.colors.secondary};

        border-bottom: 1px double ${({ theme }) => theme.colors.secondary};

        padding-bottom: 1rem;

    }

    .mobile-logar {
        display: flex;
        align-items: center;

        gap: .6rem;

        p {
            font-size: 1.2rem;
            font-weight: 500;
        }

        svg {
            font-size: 1.6rem;
        }
    }

    .mobile-drop {
        width: 30px;
        height: 30px;

        border-radius: 6px;
        background-color: ${({theme}) => theme.colors.accent};

        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            font-size: 1.4rem;
            color: ${({ theme }) => theme.colors.secondary};
        }
    }

    .header-mobile-navigation {
        list-style: none;

        margin-top: 1rem;

    }

    .header-mobile-list-li {
        width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;

    }

    .header-drop-mobile {
        display: flex;
        align-items: start;
        flex-direction: column;
        width: 100%;
        justify-content: space-around;

        /* background-color: aqua; */
    }

    .header-mobile-link {
        /* background-color: aqua; */
        width: 100%;
        padding: .6rem 0;

        text-decoration: none;
        font-size: 1.4rem;
        font-weight: 500;

        color: ${({ theme }) => theme.colors.secondary};
    }

    .logar-mobile {
        /* background-color: aqua; */
        list-style: none;
        margin-top: .6rem;
        
        li {
            display: flex;
            flex-direction: column;

            gap: .6rem;
        }
    }

    .header-mobile-link-logar {
        padding: .6rem ;
        background: ${({ theme }) => theme.colors.secondary};
        text-align: center;
        font-size: 1.2rem;

        color: ${({ theme }) => theme.colors.primary};
        text-decoration: none;

        border-radius: 6px;
    }

    .header-mobile-link-register {
        padding: .6rem ;
        background: transparent;
        text-align: center;
        font-size: 1.2rem;

        color: ${({ theme }) => theme.colors.secondary};
        text-decoration: none;

        border: 1px double ${({ theme }) => theme.colors.secondary};

        border-radius: 6px;
    }

    .accordion-content {
        /* background-color: aqua; */

        margin-left: 12px;
        /* background-color: #f1f1f1; */
        ul {
            list-style: none;

            li {
                padding: 1rem;
            }
        }
    }


`;