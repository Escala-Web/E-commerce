import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	display: flex;
	align-items: start;

	gap: 1rem;
	position: relative;

	.button-modal {
		background-color: rgb(60, 148, 243);
		padding: 0.8rem 2rem;
		cursor: pointer;
		color: #fff;
		border-radius: 6px;
	}
`;

export const ContainerModal = styled.div`

	width: 100%;
	height: 100vh;

	background-color: #55555594;

	position: absolute;
	left: 0;
	top: 0;

	z-index: 999;

	display: flex;
	align-items: center;
	justify-content: center;

	
	.content {
		overflow: hidden;

		width: 80%;
		height: 86vh;

		background-color: #fff;
		border-radius: 6px;

		border: 1px solid #ccc;
		/* padding: 1rem 0; */
		padding: 0;
		display: block;

	}

	.header-top {
		box-sizing: border-box;
		padding: .6rem 1rem;

		display: flex;
		justify-content: space-between;
		align-items: center;

		border-bottom: 1px solid #ccc;

		h3 {
			opacity: .8;
		}
	}

	.container-modal {
		display: flex;
		gap: 2rem;

		height: 100%;
		padding: .6rem 1rem;

	}

	.header {
		width: 16rem;
		padding: 0;
		border-right: 1px solid #ccc;
		/* background-color: #ccc; */
	}

	.header-gerenciador {

		h4 {
			opacity: .8;

			border-bottom: 1.6px solid #ccc;
			/* margin-bottom: .6rem; */
		}

	}

	.navigation {
		list-style: none;

		li {
			padding: .4rem .6rem;
			cursor: pointer;

			&:hover {
				background-color: #f2f2f2;
			}
		}
	}

	.title-navigation {
		margin-top: .6rem;
	}

	.body {
		width: 100%;
	}

`;