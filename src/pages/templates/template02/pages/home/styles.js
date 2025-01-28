import styled from "styled-components";

export const Container = styled.div`
	padding: 0 14rem;

	background-color: ${({ theme }) => theme.colors.background};

	@media (max-width: 999px) {
		padding: 0 1rem;
	}
`;
