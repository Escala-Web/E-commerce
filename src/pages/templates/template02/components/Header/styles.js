import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerDesktop = styled.header`
	/* padding: 0 2rem; */
	background-color: ${({ theme }) => theme.colors.secondary};

	@media (max-width: 900px) {
		display: none;
	}

	.header-pd {
		padding: 0.6rem 14rem;

		@media (max-width: 1399px) {
			padding: 0.6rem 2rem;
		}
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
			padding: 0.6rem 1rem;
			border-radius: 12px;
			outline: none;
			width: 100%;
			border: none;
		}
	}

	.search-results {
		position: absolute;
		background-color: ${({ theme }) => theme.colors.primary};
		width: 100%;
		top: 36px;

		border-radius: 6px;
		padding: 0.2rem;

		z-index: 9999999;

		list-style: none;

		display: flex;
		flex-direction: column;

		border: 1px solid ${({ theme }) => theme.colors.text_primary};
	}

	.search-result-link {
		/* background-color: aqua; */
		padding: 0.4rem;

		text-decoration: none;
		color: ${({ theme }) => theme.colors.text_primary};

		&:hover {
			background-color: #f2f2f2;
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

		position: relative;
	}

	#header-login-active {
		position: absolute;
		top: 30px;
		right: 22px;
		width: 8rem;
		background-color: ${({ theme }) => theme.colors.primary};
	}

	.header-submenu {
		list-style: none;

		width: 100%;

		li {
			padding: 0.5rem;

			&:hover {
				background-color: #f2f2f2;
			}
		}
	}

	.link_submenu {
		text-decoration: none;
		color: ${({ theme }) => theme.colors.secondary};
		width: 100%;
	}

	.header-container-options-left {
		display: flex;
		align-items: center;
		gap: 0.4rem;
		font-size: 1rem;

		color: ${({ theme }) => theme.colors.primary};
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
		color: ${({ theme }) => theme.colors.text_primary};
		display: flex;
		justify-content: start;

		gap: 4rem;
	}

	.header-menu-location {
		display: flex;
		align-items: center;

		color: ${({ theme }) => theme.colors.text_primary};

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
		padding: 0.4rem 0;

		p {
			font-size: 2rem;
			color: ${({ theme }) => theme.colors.text_secondary};
			font-weight: 300;
		}
	}

	.header-navigation-link {
		text-decoration: none;
		color: ${({ theme }) => theme.colors.text_primary};
		font-weight: 400;
		font-size: 1.1rem;
		opacity: 0.8;
	}

	.header-drop {
		position: relative;

		cursor: pointer;
	}

	.header-container-drop-list {
		position: absolute;
		/* top: 0; */

		z-index: 999;

		background-color: "#000";
		/* height: 2000px; */
		width: 100%;
	}
`;

export const DropList = styled.div`
	position: absolute;
	z-index: 99999999999;
	top: 34px;
	/* background: blue; */
	background-color: "#333";
	width: 20rem;
	overflow: hidden;
	max-height: 600px;
	overflow-y: scroll;

	.list-drop-content {
		position: absolute;
		left: 200px;
	}
	
`;

export const ContainerMobile = styled.div`
	@media (min-width: 900px) {
		display: none;
	}

	display: flex;

	flex-direction: column;

	background-color: ${({ theme }) => theme.colors.secondary};

	.container-header-mobile {
		display: flex;
		align-items: center;
		justify-content: space-between;

		padding: 0.6rem 1rem;
	}

	.header-menu-mobile {
		svg {
			color: ${({ theme }) => theme.colors.primary};
			opacity: 0.9;
			font-size: 1.8rem;
		}
	}

	.header-logo-mobile {
		width: 180px;

		img {
			width: 100%;
		}
	}

	.header-cart-mobile {
		display: flex;
		align-items: center;
		gap: 1rem;

		svg {
			color: ${({ theme }) => theme.colors.primary};
			opacity: 0.9;
			font-size: 1.8rem;
		}
	}

	.header-container-search {
		width: 100%;
		background-color: ${({ theme }) => theme.colors.primary};

		padding: 0.4rem 1rem;

		display: flex;
		align-items: center;
		justify-content: center;

		position: relative;

		input {
			padding: 0.6rem 1rem;
			border-radius: 12px;
			outline: none;
			width: 100%;
			border: 1px solid ${({ theme }) => theme.colors.secondary};
		}
	}

	.icon-search {
		position: absolute;
		right: 36px;
		color: ${({ theme }) => theme.colors.secondary};
	}

	.search-results {
		position: absolute;
		top: 48px;
		z-index: 9999999;

		width: 95%;

		background-color: ${({ theme }) => theme.colors.primary};
		border-radius: 6px;
		border: 1px solid #ccc;
		padding: 0.6rem;
	}

	.search-result-link {
		color: ${({ theme }) => theme.colors.text_primary};
		text-decoration: none;
	}
`;
