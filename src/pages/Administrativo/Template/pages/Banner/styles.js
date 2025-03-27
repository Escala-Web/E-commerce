import styled from "styled-components";

export const Container = styled.div`

    border-radius: 8px;
    display: flex;
    flex-direction: column;

    gap: 1rem;

    
    .container {
        padding: 1rem 2rem;
        background-color: #fff;

        border-radius: 8px;

        height: 100%;
    }

    .container_banner {
        display: flex;
        align-items: start;
        justify-content: space-between;

        gap: 1rem


    }
    
    .create_banner {
        width: 65%;
        height: 200px;
    }

    .position_banner {
        width: 35%;
    }

    .banner_content {
        
        line-height: 28px;
        border-bottom: 1px solid #ccc;
        padding-bottom: 6px;

        h4 {
            font-size: 14px;
            font-weight: 400;

            color: #333;
        }

        h3 {
            font-size: 28px;
            font-weight: 500;

            color: #333;
        }
    }

    .banner_content_card {
        
    }
`;

export const ContainerCard = styled.div`

        display: flex;
        flex-wrap: wrap;

        align-items: center;
        gap: 1rem;
        margin-top: 2rem;
        
        .card {
            border: 1px solid #ccc;
            width: 100%;
            height: 450px;
            padding: 1rem;

            box-sizing: border-box;

            transition: .2s;

            cursor: pointer;

            &:hover {
                transform: scale(1.02);
            }

        }

        .card_content {
            display: flex;
            align-items: center;
            justify-content: space-between;

            height: 100%;

            gap: 1rem;
        }

        .card_content_container {
            height: 100%;
            width: 100%;
        }

        .border {
            border-right: 1px solid #ccc;
            padding-right: 1rem;
            height: 100%;
        }

        .cart_title_type {

            text-align: center;



            p {
                font-size: 20px;
                font-weight: 400;
                
                color: #333;
            }
        }

        .card_image {

            width: 100%;

            display: flex;
            align-items: center;
            justify-content: center;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .conatiner_content {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;

        }

        .card_content_description {
            display: flex;
            align-items: center;
            justify-content: space-between;

            padding: 0 0 2rem;
        }

`;