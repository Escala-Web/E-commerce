import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	width: 100%;
	/* align-items: center; */
	flex-direction: column;

	position: relative;

	flex-wrap: wrap;

	margin-top: 2rem;

	gap: 2rem;

	align-items: start;

	.container_cards {
		width: 100%;

		display: block;

		gap: 0.8rem;
	}

	.activeCard {
		display: flex;
		/* width: 100%; */

		gap: 0.8rem;
	}

	.container {
		/* display: flex; */
		align-items: center;
	}

	.card {
		position: relative;
		/* height: 200px; */

		p {
			font-size: 14px;
		}
	}

	.settings {
		position: absolute;
		top: 10px;
		right: 10px;

		z-index: 9999999;

		cursor: pointer;
	}

	.card_imagem {
		width: 140px;
	}

	.container_card {
		/* background-color: aqua; */
		height: 140px;
		width: 140px;

		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;

		text-align: center;
	}

	.container_card_icon {
		height: 100px;

		display: flex;
		align-items: center;
		justify-content: center;

		img {
			width: 100%;
		}
	}

	.container_button {
		border-radius: 6px;

		width: 100%;

		display: flex;
		align-items: center;
		justify-content: space-between;

		padding: 0.4rem 0;
	}

	.back {
		display: flex;
		align-items: center;

		cursor: pointer;
	}

	.images {
		width: 40%;
	}

	.container_card_image {
		width: 100px;
		height: 100px;

		border-radius: 6px;
		border: 1px solid #ccc;
		overflow: hidden;
		padding: 0.3rem;

		position: relative;

		img {
			width: 100%;
		}

		svg {
			cursor: pointer;

			position: absolute;
			top: 0;
			right: 0;
			font-size: 22px;

			color: red;
		}
	}

	.name_text_folder_and_file {
		text-overflow: ellipsis;
		-webkit-line-clamp: 1;
		white-space: nowrap;
		max-width: 100%;
		overflow: hidden;
	}

	.container_add_files {
		/* background-color: aqua; */
		/* width: 100%; */

		padding: 1rem;

		border-left: 1px solid #ccc;
	}

	.card_files {
		display: flex;
		flex-wrap: wrap;
		gap: 0.6rem;
	}
`;

export const ContainerCard = styled.div`
	display: ${({ display }) => display || "block"};
	/* width: 100%; */

	width: 100%;

	.container_b {
		margin-top: 1rem;
	}

	.cardsss {
		width: 75%;
	}
	.container_add_files {
		width: 25%;
	}
`;
