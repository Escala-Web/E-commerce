import { Link } from "react-router-dom";
import styled from "styled-components";

export const ConatinerCard = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;

`;

export const Card = styled.div`
	position: relative;
	margin-bottom: 2rem;

	img {
		filter: brightness(0.8);
		border: 1px solid #ccc;
		border-radius: 6px;
		width: 600px;
	}
`;

export const CardBody = styled.div`
	position: absolute;
	bottom: 20px;
	left: 0;

	padding: 0 1rem;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	width: 100%;

	p {
		color: #fff;
		font-size: 1.2rem;
		font-weight: 600;
	}

	a {
		background-color: ${({ theme }) => theme.colors.secondary};

		padding: 0.4rem 1.4rem;
		border-radius: 6px;
        color: ${({theme}) => theme.colors.text_secondary};
        ;
		font-weight: 600;

		text-decoration: none;

		transition: 0.2s;

		&:hover {
			background-color: #000;

			color: #fff;
		}
	}
`;

export const CardLink = styled(Link)`
	background-color: ${({ theme }) => theme.colors.secondary};

	padding: 0.4rem 1.4rem;
	border-radius: 6px;
	color: #fff;
	font-weight: 600;

	text-decoration: none;

	transition: 0.2s;

	&:hover {
		background-color: ${({ theme }) => theme.colors.secondary};

		color: #fff;
	}
`;

export const ContainerTitle = styled.div`
	padding-bottom: 1.2rem;
	/* text-align: center; */

	h2 {
		color: #555;

		font-weight: 600;
	}
`;


export const ContainerTheme = styled.div`

	display: flex;
	/* align-items: center;
	justify-content: center; */

	flex-direction: column;

	background-color: #fff;

	width: 100%;

	padding: 1rem;
	border-radius: 8px;

	.container-card {
		display: flex;
		align-items: center;

		gap: 1rem;
	}

	.card-body {
		border: 1px solid #ccc;
	}

	.card-button {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1rem;
	}

`;