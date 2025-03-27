import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    align-items: center;
    flex-direction: column;

    position: relative;
    
    gap: 1.4rem;

    margin-top: 1rem;

    /* overflow: hidden; */

    /* overflow-x: scroll; */
    padding: .6rem 0;

    scrollbar-color: transparent;

    border: 1px solid ${({ theme }) => theme.colors.accent};

    display: flex;
    align-items: center;
    justify-content: center;

    ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;

  .container_category {
    display: flex;
    align-items: center;

    gap: .8rem;

  }

  .card_category {
    display: flex;
    align-items: center;

    button {
        border: 2px solid ${({ theme }) => theme.colors.secondary};
        padding: .6rem 2rem;
        border-radius: 4px;

        color: ${({ theme }) => theme.colors.secondary};
        text-decoration: none;

        font-weight: 500;
        font-size: 14px;

        background-color: transparent;

        cursor: pointer;
    }
  }

  .left {
    position: absolute;
    left: -70px;

    background-color: transparent;
    border: none;

    width: 60px;
    height: 60px;

    z-index: 999999999;
    border-radius: 10px;
    cursor: pointer;

    svg {
      font-size: 40px;
      opacity: .8;
      color: ${({ theme }) => theme.colors.background_secondary};
    }
  }

  .right {
    position: absolute;
    right: -70px;

    background-color: transparent;
    border: none;

    width: 60px;
    height: 60px;

    z-index: 999999999;
    border-radius: 10px;
    cursor: pointer;

    svg {
      font-size: 40px;
      opacity: .8;
      color: ${({ theme }) => theme.colors.background_secondary};
    }
  }

  .container_slider{
    display: flex;
    align-items: start;
  }


`;

