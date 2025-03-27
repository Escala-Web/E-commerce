import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	display: flex;
	align-items: start;

	gap: 1rem;
	position: relative;

	.button-modal {
		background-color: rgb(60, 148, 243);
		padding: 0.4rem 1rem;
		cursor: pointer;
		color: #fff;
		border-radius: 6px;

		font-size: 14px;
		font-weight: 400;
	}
`;

export const ContainerModal = styled.div`

	/* width: 100%;

	background-color: #55555594;

	position: absolute;
	left: 0;
	top: 0;

	z-index: 999;

	display: flex;
	align-items: center;
	justify-content: center; */
	overflow: hidden;
	
	.content {
		overflow: hidden;
		height: 70vh; 
		padding: 0;
		display: block;
	overflow: hidden;


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
		overflow-y: scroll;
	}

`;