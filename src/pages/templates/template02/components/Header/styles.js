import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerDesktop = styled.header`
	
	/* padding: 0 2rem; */
	background-color: ${({ theme }) => theme.colors.secondary};

	.header-pd {
		padding: .6rem 8rem;
	}

	.header-top {

		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	
	.logo-imagem {
		width: 170px;

		img {
			width: 100%;
		}

	} 

	.header-container-search {
		/* background-color: aqua; */
		width: 40%;
		position: relative;

		input {
			padding: .6rem 1rem;
			border-radius: 12px;
			outline: none;
			width: 100%;
			border: none;
		}
	}

	.icon-search {
		position: absolute;
		top: 4px;
		right: 20px;

		font-size: 1.4rem;
		opacity: 1;

		color: ${({ theme }) => theme.colors.secondary};
	}

	.header-container-left {
		display: flex;
		align-items: center;
		gap: 2rem;
	}

	.header-container-options-left {
		display: flex;
		align-items: center;
		gap: .4rem;
		font-size: 1rem;

		color: ${({theme}) => theme.colors.primary};
	}

	.header-icons-options {
		font-size: 1.5rem;
	}

	.header-option-cart {
		position: relative;
	}

	.header-option-qtd-cart {
		position: absolute;
		top: -14px;
		right: -10px;

		width: 20px;
		height: 20px;

		font-size: 12px;

		background-color: ${({ theme }) => theme.colors.primary};
		color: ${({ theme }) => theme.colors.secondary};
		font-weight: 500;
		
		display: flex;
		align-items: center;
		justify-content: center;

		border-radius: 50%;
	}

	.header-content-menu {
		background-color: ${({ theme }) => theme.colors.primary};
		color: ${({theme}) => theme.colors.text_primary};
		display: flex;
		justify-content: start;

		gap: 4rem;

	}

	.header-menu-location {
		display: flex;
		align-items: center;

		color: ${({theme}) => theme.colors.text_primary};

		svg {
			font-size: 1.5rem;
		}

	}

	.header-navigation-menu {
		/* background-color: aqua; */
		/* width: 90%; */

		ul {
			display: flex;
			align-items: center;

			list-style: none;
			gap: 2rem;
		}
	}

	.header-content-descont {
		width: 100%;

		display: flex;
		justify-content: center;
		padding: .4rem 0;

		p {
			font-size: 2rem;
			color: ${({ theme }) => theme.colors.text_secondary};
			font-weight: 300;
		}
	}
`;
