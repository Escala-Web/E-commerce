import styled from "styled-components";

export const Container = styled.div`
	/* background-color: aqua; */

	height: 100vh;

	width: 100%;

	display: flex;
	align-items: center;
	justify-content: center;


	background-color: #f4f4f4;

	padding: 4rem;

	.container {
		width: 60%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		background-color: ${({ theme }) => theme.colors.primary};

		border-radius: 12px;

		min-height: 75%;

		padding: 1rem 2rem;
	}

	.back {
		position: absolute;
	}

	.container_step {
		/* background-color: aqua; */
	}

	.buttons {
		display: flex;
		align-items: center;
		

		margin-top: 4rem;

		gap: .5rem;
	}


	.form_group {
		display: flex;
		flex-direction: column;
		gap: .2rem;

		width: 100%;

		label {
			font-size: 15px;
			font-weight: 400;

			color: ${({ theme }) => theme.colors.text_primary};
		}

		input {
			padding: .6rem 1rem;
			border: 1px solid #ccc;

			outline: 0;

			width: 100%;
		}

		select {
			padding: .6rem 1rem;
			border: 1px solid #ccc;

			outline: 0;
		}
	}

	.form_flex {
		display: flex;
		align-items: center;
		justify-content: space-between;


		gap: 1rem;
	}


	.container_form {
		display: flex;
		flex-direction: column;

		gap: 1.2rem;
	}
	
	.pass {
		background-color: #ccc;

		border-radius: 6px;
	}

`;