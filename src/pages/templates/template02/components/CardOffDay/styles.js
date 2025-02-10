import styled from "styled-components";

export const Container = styled.div`
	background-color: #fff;
	width: 21rem;
	height: 450px;
	/* height: 50vh; */
	position: relative;
	border-radius: 6px;

	display: flex;
	align-items: center;
	justify-content: space-between;

	flex-direction: column;

	overflow: hidden;
	box-shadow: 0 0 4px #ccc;

	@media (max-width: 870px) {
		width: 47%;

		/* display: flex; */
	}

	@media (max-width: 630px) {
		width: 46%;
	}

	@media (max-width: 500px) {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-direction: row;
	}
`;

export const CardImage = styled.div`
	width: 80%;
	@media (max-width: 870px) {
		width: 100%;
		/* display: flex; */
	}
	/* height: 250px; */

	img {
		width: 100%;
		padding: 1rem;
		box-sizing: border-box;
	}
`;

export const CardBody = styled.div`
	padding: 1rem;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 2rem;
box-sizing: border-box;
	width: 100%;

	div > p {
		color: ${({ theme }) => theme.colors.text_primary};
		margin-bottom: 1rem;
	}

	div > h4 {
		color: ${({ theme }) => theme.colors.text_primary};
		font-size: 1.4rem;
	}
`;

export const CardHeart = styled.div`
	position: absolute;
	right: 20px;
	top: 20px;

	width: 40px;
	height: 40px;

	border-radius: 50%;

	background-color: ${({ theme }) => theme.colors.accent};

	display: flex;
	align-items: center;
	justify-content: center;

	cursor: pointer;

	@media (max-width: 500px) {
		position: absolute;
		left: 20px;
		top: 20px;
	}
`;
