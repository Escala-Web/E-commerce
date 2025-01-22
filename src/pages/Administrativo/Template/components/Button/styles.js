import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.button`
	background-color: rgb(237, 50, 55);
	padding: 0.6rem 2rem;
	color: #fff;
	font-weight: 600;

	border: none;
	border-radius: 6px;
	cursor: pointer;

	transition: 0.2s;

	&:hover {
		transform: scale(1.06);
	}

	.active {
		transform: scale(1.06);
	}
`;

export const LinkContainer = styled(Link)`
	background-color: rgb(237, 50, 55);
	padding: 0.6rem 2rem;
	color: #fff;
	font-weight: 600;

	border: none;
	border-radius: 6px;
	cursor: pointer;

    text-decoration: none;

	transition: 0.2s;
`;
