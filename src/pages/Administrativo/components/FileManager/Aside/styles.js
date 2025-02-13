import styled from "styled-components";

export const Container = styled.div`


		width: 14%;
		height: 100%;
		padding: 1rem 0;

		h3 {
			color: #555;
			font-weight: 500;
			border-bottom: 1px solid #f2f2f2;
			padding-bottom: 0.6rem;
		}

		.header-navegacao {
			list-style: none;
			display: flex;
			flex-direction: column;
			gap: 0.2rem;
			margin-top: 1rem;
			margin-left: 0.8rem;
		}

		.pastas-title {
			margin-top: 2rem;
		}

		.header-navegacao > li {
			gap: 1rem;
			display: flex;

			/* background-color: antiquewhite; */
			padding: 0.6rem 0.4rem;

			cursor: pointer;

			&:hover {
				background-color: #f2f2f2;
			}
		}
	

`;