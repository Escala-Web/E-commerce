import styled from "styled-components";

export const ContainerPageAdm = styled.div`
	width: 100%;
	background-color: #f5f5f5;

	padding: 2rem;

	border: 1px solid #ccc;

	border-radius: 8px;
	height: 600px;
`;

export const ContainerCardContent = styled.div`
	display: flex;
	align-items: center;

	gap: 1rem;

	margin-top: 1rem;
`;

export const ContainerCard = styled.div`
	background-color: #fff;

	padding: 1rem;

	width: 10rem;

	display: flex;
	align-items: center;
	justify-content: center;

	border-radius: 6px;

	border: 1px solid #ccc;

	transition: 0.2s;

	cursor: pointer;
	&:hover {
		transform: scale(1.04);
	}
`;

export const Container = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;

	.container-header {
		background-color: #fff;
		width: 92%;
		margin-top: -1rem;
		padding: 1rem;
		border-radius: 6px;
	}

	.container-form {
        background-color: #fff;
        width: 92%;
        margin-top: 1rem;
        min-height: 60vh;
        border-radius: 6px;

        padding: 1rem;
	}

    .form-input {
        display: flex;
        flex-direction: column;

        margin-top: 2rem;

        gap: 1rem;
    }
`;
