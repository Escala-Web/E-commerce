import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerDestaques = styled(Link)`

    display: flex;
    align-items: center;

    justify-content: space-between;

    margin-top: 1rem;

    .container_card {
        width: 32.5%;
        overflow: hidden;
        border-radius: 12px;
        
        box-shadow: 0 0 4px #333;

        max-height: 270px;
        
        img {
            width: 100%;
            max-height: 270px;
            border-radius: 12px;

            object-fit: cover;

            filter: brightness(.7);
            transition: .2s;

            &:hover {
                filter: brightness(1);
                transform: scale(1.08);
            }
        }
    }


`;