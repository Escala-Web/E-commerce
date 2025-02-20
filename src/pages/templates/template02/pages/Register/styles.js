import styled from "styled-components";

export const Container = styled.div`
	/* background-color: aqua; */

	height: 100vh;

	display: flex;
	align-items: center;
	align-items: center;

	flex-direction: row-reverse;
	background-color: #f4f4f4;

	padding: 4rem;

	.form-content {
		width: 50%;
		display: flex;
		align-items: center;
		justify-content: center;

		flex-direction: column;
		height: 100%;

		padding: 4rem 1rem;
		background-color: #fff;
		

		@media (max-width: 1068px) {
			background-color: #fff;
			width: 100%;
	}
	}
`;

export const ContainerSteps = styled.div`
	display: flex;
	align-items: center;

	margin-bottom: 2rem;

	gap: 2rem;
`;

export const Step = styled.div`
	color: ${({ theme, active }) => (active ? theme.colors.secondary : "inherit")};
    opacity: .9;

	svg {
		color: ${({ theme, active }) =>
		active ? theme.colors.secondary : "inherit"};
        font-size: 2rem;
        width: 100%;
        opacity: .9;
	}

    p {
        font-weight: ${({ active }) => (active ? "bold" : "normal")};
    }
`;

export const RegisterContent = styled.div`


		width: 50%;
		display: flex;
		align-items: center;
		justify-content: center;

		flex-direction: column;

		text-align: center;

		background-color: ${({ theme }) => theme.colors.secondary};
		height: 100%;

		h4 {
			font-size: 2rem;
			color: ${({ theme }) => theme.colors.primary};
			opacity: .9;
			margin-bottom: 1rem;
			text-align: center;
		}

		p {
			color: ${({ theme }) => theme.colors.primary};
			opacity: .9;
		}

		.link {
			background-color: ${({ theme }) => theme.colors.primary};
			color: ${({ theme }) => theme.colors.secondary};
			padding: .6rem 2rem;
			border-radius: 5px;
			cursor: pointer;
			text-decoration: none;
			margin-top: 2rem;
			width: 50%;
		}

		@media (max-width: 1068px) {
		display: none;
	}

`;


export const ContainerButtonNextAndBack = styled.div`

    display: flex;

    gap: 1rem;
    width: 100%;

    .next-step {
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.secondary};
		border: 1px solid ${({ theme }) => theme.colors.secondary};
        padding: .6rem 2rem;
        border-radius: 5px;
        /* border: none; */
        cursor: pointer;

		display: flex;
		align-items: center;
		justify-content: center;
		gap: .4rem;
    }
`;