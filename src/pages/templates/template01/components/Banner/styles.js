import styled from "styled-components";

export const Container = styled.div`
	display: flex;

	align-items: start;
	gap: 1rem;

	width: 100%;

	/* margin-bottom: 8rem; */

	@media (max-width: 768px) {
		display: none;
	}

	/* Altera a cor das setas de navegação */
	.swiper-button-next,
	.swiper-button-prev {
		color: ${({ theme }) => theme.colors.background_secondary}; 

		background-color:rgba(243, 243, 243, 0.37);
		width: 50px;
		height: 50px;

		border-radius: 8px;

		transition: .2s;

		&:hover {
			transform: scale(1.06);
		}
	}

	/* Se você quiser alterar o fundo das setas, pode fazer isso também */
	.swiper-button-next::after,
	.swiper-button-prev::after {
		font-size: 30px;
		color: ${({ theme }) => theme.colors.background_secondary};
	}
`;

export const Section = styled.div`
	width: ${({ w }) => w || "100%"};
	padding: ${({ p }) => p};

	/* height: 65vh; */

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
