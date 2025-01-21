import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
	width: 14%;
	background-color: ${({theme}) => theme.colors.primary};

    /* overflow: hidden; */
  /* ou */
  /* overflow: scroll; */
	
	position: static;
	left: 0;
	top: 0;

	height: 93vh;

	border: 0 10px 10px 0;

	padding: 2rem 1rem;

	box-shadow: 0 0 4px #CCC;
`;

export const ContainerLogo = styled.div`
	padding-bottom: 2rem;
	border-bottom: 1px solid #CCC;

	display: flex;
	align-items: center;
	justify-content: center;
`;

export const ContainerNavegacao = styled.nav`
	/* padding-top: 2rem; */

	padding: 2rem 0rem 0;

	position: relative;
`;

export const ContainerLinksUl = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: column;

	position: relative;

	height: 100%;

	li {
		margin-bottom: 1rem;

		display: flex;
		align-items: center;
		gap: 1rem;

		padding: 0.4rem 2rem;
		border-radius: 6px;

		transition: 0.2s;

		cursor: pointer;
		&:hover {
			background-color: #F6F6F6;
		}
	}
`;

export const LILInk = styled(Link)`
	margin-bottom: 1rem;

	display: flex;
	align-items: center;
	gap: 1rem;

	padding: 0.4rem 2rem;
	border-radius: 6px;

	text-decoration: none;
	color: ${({theme}) => theme.colors.text_primary};

	font-weight: 500;

	transition: 0.2s;

	cursor: pointer;
	&:hover {
		transform: scale(1.02);
	}

    &.active {
        background-color: ${({theme}) => theme.colors.accent};
		transform: scale(1.04);
    }
`;

export const LinkStyle = styled(Link)`
	text-decoration: none;
	color: ${({theme}) => theme.colors.text_primary};

	font-weight: 500;
`;


export const LogoutAdm = styled.div`

	position: absolute;
	bottom: -400px;

	width: 100%;

`;