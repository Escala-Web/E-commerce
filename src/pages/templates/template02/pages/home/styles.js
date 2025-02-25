import styled from "styled-components";

export const Container = styled.div`
	padding: 0 14rem;

	min-height: 86vh;

	background-color: ${({ theme }) => theme.colors.background};
	
	@media (max-width: 1539px) {
		padding: 0 6rem;
	}

	@media (max-width: 1109px) {
		padding: 0 4rem;
	}


	@media (max-width: 999px) {
		padding: 0 1rem;
	}
`;
