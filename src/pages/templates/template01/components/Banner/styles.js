import styled from "styled-components";

export const Container = styled.div`
	display: flex;

	align-items: start;
	gap: 1rem;

	width: 100%;

	@media (max-width: 768px) {
		display: none;
	}
`;

export const Section = styled.div`
	width: ${({ w }) => w || "100%"};
	padding: ${({ p }) => p};

	height: 65vh;

	img {
		width: 100%;
		height: 100%;
	}
`;

export const ContainerMobile = styled.div`
	@media (min-width: 768px) {
		display: none;
	}
`;
