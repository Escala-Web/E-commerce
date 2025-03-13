import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    align-items: center;

    gap: 1rem;
    flex-wrap: wrap;

    
    .container {
        display: flex;
        width: 120px;
        background-color:rgb(248, 247, 247);

        align-items: center;
        justify-content: center;

        border-radius: 8px;
        height: 140px;

        position: relative;
        
    }
    
    .container_image {

        align-items: center;
        justify-content: center;
        height: 100%;
        

        padding:.6rem;

        width: 110px;
        height: 110px;

        display: flex;
        flex-wrap: wrap;



        

        img {
            width: 100%;
            height: 100%;
            padding-bottom: 4px;
        }
        

    }

    /* .container_folder {
        background-color: aqua;
        margin-top: -26px;
        
    } */

    .container_text {
        -webkit-line-clamp: 1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        text-align: center;

        width: 100%;
    }

    .container_setting {
        color: #232323;
        border: none;
        font-size: 1.4rem;
        background-color: transparent;

        position: absolute;

        right: 10px;
        top: 0;

        /* background-color: blue; */
        width: 60px;
        cursor: pointer;

        display: flex;
        align-items: center;
        justify-content: end;

        font-weight: 700;

        z-index: 9999999999999999999;

    }

`;