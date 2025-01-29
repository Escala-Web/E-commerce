import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerDesktop = styled.header`
	/* padding: 1rem; */
	display: flex;
	justify-content: space-between;
	align-items: center;

	padding: 2rem 14rem;

	

	@media (max-width: 1539px) {
		padding: 0 6rem;
	}

	@media (max-width: 1109px) {
		padding: 0 4rem;
	}


	@media (max-width: 999px) {
		padding: 0 1rem;
		display: none;
	}
`;

export const ContainerImage = styled.div`
	img {
		width: 150px;

		@media (max-width: 999px) {
			width: 120px;
		}
	}
`;

export const ContainerNavegation = styled.nav`

	@media (max-width: 999px) {
        
        border-top: 2px solid ${({theme}) => theme.colors.secondary};

		width: 100%;
        box-sizing: border-box;

	}

	ul {
		list-style: none;
		display: flex;
		gap: 2rem;

		@media (max-width: 999px) {
			flex-direction: column;
			align-items: start;
			width: 100%;
			gap: .2rem;
            box-sizing: border-box;
            padding: 1rem ;

            li {
                background-color: ${({theme}) => theme.colors.accent};
                width: 100%;
                padding: 1rem;
                border-radius: 6px;
                box-sizing: border-box;
            }
		}
	}
`;

export const ContainerLoginToCart = styled.div`
	display: flex;
	align-items: center;

	gap: 1.4rem;
`;

export const ContainerIcons = styled.div`
	width: 40px;
	height: 40px;

	background-color: ${({ theme }) => theme.colors.accent};
	border-radius: 50%;

	display: flex;
	align-items: center;
	justify-content: center;

	color: ${({ theme }) => theme.colors.secondary};

	cursor: pointer;

	/* overflow: hidden; */

	position: relative;

	&::before {
		content: "";
		border-radius: 50%;
		position: absolute;
		background-color: ${({ theme }) => theme.colors.secondary};
		top: 0;
		left: 0;
		width: 0%;
		height: 100%;

		opacity: 0.6;

		transition: 0.2s;
	}

	&:hover::before {
		width: 100%;
		color: #fff;
	}

	&:hover {
	}
`;

export const ContainerNumberFavorite = styled.div`

	position: absolute;
	top: -8px;
	right: -8px;

	z-index: 99999;
	
	height: 20px;
	width: 20px;
	background-color: ${({ theme }) => theme.colors.secondary};
	color: ${({theme}) => theme.colors.primary};

	border-radius: 50%;

	display: flex;
	align-items: center;
	justify-content: center;

	padding: .1rem;

	span {
		font-size: 12px;
		font-weight: 500;
	}

`;

export const LinkMenu = styled(Link)`
	text-decoration: none;
	color: ${({ theme }) => theme.colors.text_primary};
	font-weight: 400;
	position: relative;

	${({ isActive, theme }) =>
		isActive &&
		`
            color: ${theme.colors.secondary};
            
            font-weight: 500;

            &::before {
            content: '';
            position: absolute;
            bottom: -6px;
            left: 0;
            height: 2px;
            width: 100%;
            transition: .3s;
            background-color: ${({ theme }) => theme.colors.secondary};
        }
    `}

	&:hover {
		color: ${({ theme }) => theme.colors.secondary};
	}

	&::before {
		content: "";
		position: absolute;
		bottom: -6px;
		left: 0;
		height: 2px;
		width: 0%;
		transition: 0.3s;
		background-color: ${({ theme }) => theme.colors.secondary};

		${({ isActive, theme }) => isActive && `width: 100%;`}
	}

	&:hover::before {
		width: 100%;
	}

    @media (max-width: 999px) {
        font-size: 1.2rem;
        font-weight: 500;
        color: ${({theme}) => theme.colors.text_primary};
    }
`;

export const ContainerMobile = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	padding: 0.6rem 1rem;
    box-sizing: border-box;

	position: relative;

	@media (min-width: 999px) {
		display: none;
	}
`;

export const ContainerMenuMobile = styled.div`
	position: absolute;
	left: 0;
	top: 101px;
	width: 100%;

	z-index: 999;

	display: flex;
	align-items: center;
	flex-direction: column;
    justify-content: space-between;
	height: 90vh;
	background-color: ${({ theme }) => theme.colors.primary};
`;

export const ContainerMenuMobileLogin = styled.div`

    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0.6rem 1rem;
    box-sizing: border-box;
    gap: 1rem;

`;