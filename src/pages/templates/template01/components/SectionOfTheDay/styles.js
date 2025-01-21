import styled from "styled-components";

export const Container = styled.div`
	/* background-color: aqua; */

	margin-top: 2.4rem;

	border-radius: 30px;
	/* padding: 1rem; */

	height: 70vh;

	display: flex;
	gap: 1rem;

	@media (max-width: 768px) {
		display: flex;
		justify-content: center;
		flex-direction: column;
	}
`;

export const ContainerSection = styled.div`
	border: 1px solid #ccc;

	height: 100%;

	border-radius: 20px 20px 0 0;
	overflow: hidden;
`;

export const ContainerSubTitle = styled.div`
	background-color: ${({ theme }) => theme.colors.secondary};
	padding: 1rem 2rem;
	width: 100%;

	box-sizing: border-box;

	border-radius: 20px 20px 0 0;

	@media (max-width: 768px) {
		border-radius: 10px 10px 0 0;
		flex-direction: column;
	}

	h3 {
		color: ${({ theme }) => theme.colors.text_secondary};
	}
`;

export const ContainerContent = styled.div`
	padding: 1rem 2rem;

	display: flex;
	align-items: center;
	gap: 4rem;

	height: 100%;

	background-color: ${({ theme }) => theme.colors.primary};

	@media (max-width: 768px) {
		/* background-color: aqua; */
		display: flex;
		/* flex-direction: column; */
		/* padding: 2rem; */
	}
`;
