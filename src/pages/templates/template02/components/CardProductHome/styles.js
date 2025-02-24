import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
    
    flex-wrap: wrap;

    @media (max-width: 984px) {
            gap: .6rem;
        }
    
    .container-card {
        width: 22rem;
        box-shadow: 0 0 5px #00000052;
        margin-bottom: 1.4rem;

        @media (max-width: 984px) {
            width: 32%;
        }

        @media (max-width: 886px) {
            width: 48%;
        }

        @media (max-width: 524px) {
            width: 100%;
        }

    }

    .card-content {
        padding: .6rem;
    }

`;