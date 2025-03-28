import styled from "styled-components";

export const ContainerGlobal = styled.div`
	background-color: ${({ theme }) => theme.colors.background};
	width: 100%;
	.container {
		max-width: 1440px;
		margin: 0 auto;
	}
`;
