import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
	height: 100%;

	display: flex;
	align-items: center;
	gap: 1rem;
	justify-content: space-evenly;
	width: 50%;

	/* background-color: aqua; */

	@media (max-width: 768px) {
		/* background: aqua; */
		width: 100%;
		padding: 1rem;
		flex-direction: column;
	}
`;

export const ContainerBox = styled.div`
	display: flex;
	flex-direction: column;

	gap: 0.6rem;

	@media (max-width: 768px) {
		@media (max-width: 768px) {
			border-radius: 10px 10px 0 0;
		}
	}
`;

export const ContainerBoxSelect = styled.div`
	width: 80px;
	height: 80px;

	border-radius: 6px;

	cursor: pointer;

	display: flex;
	align-items: center;
	justify-content: center;

	border: 1px solid #ccc;

	img {
		width: 100%;
	}
`;

export const ContainerBannerImage = styled.div`
	width: 80%;

	img {
		width: 100%;
	}
`;

export const ContainerCardContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	height: 100%;

	width: 100%;
	justify-content: space-between;

	/* @media (min-width: 768px) {
		display: flex;
		flex-direction: row;
	} */
`;

export const ContainerCard = styled.button`
	background-color: ${({ theme }) => theme.colors.text_primary};
	height: 50%;

	width: 100%;

	overflow: hidden;

	border-radius: 28px;

	border: 1px solid #ccc;

	display: flex;
	align-items: center;
	justify-content: center;

	text-decoration: none;
	color: ${({ theme }) => theme.colors.text_secondary};

	cursor: pointer;

	transition: 0.2s;

	@media (min-width: 768px) {
		width: 100%;
	}

	&:hover {
		transform: scale(1.04);
	}

	img {
		width: 100%;
		object-fit: cover;
		padding: 1rem;
	}
`;
