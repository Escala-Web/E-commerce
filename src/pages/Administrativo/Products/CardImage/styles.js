import styled from "styled-components";

export const Container = styled.div`

    .container_images {
		display: flex;
		align-items: center;
		justify-content: start;

		gap: 1rem;

		margin-top: 2rem;
	}

    .image {

        width: 100px;
        height: 100px;

        border: 1px solid #ccc;
        border-radius: 4px;

        display: flex;
        align-items: center;
        justify-content: center;

        position: relative;


        img {
            width: 100%;
            object-fit: cover;

            padding: .8rem;
        }

        svg {
            position: absolute;

            top: 0;
            right: 0;

            color: red;
            font-size: 20px;

            cursor: pointer;
        }
    }

`;