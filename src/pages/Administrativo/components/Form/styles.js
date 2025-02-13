import styled from "styled-components";

export const Container = styled.form`

	margin: 0 auto;




	h2 {
		text-align: start;
		font-size: 24px;
		color: #333;

		margin-bottom: 2rem;
	}
`;

export const ContainerFormControll = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	gap: 1rem;
`;

export const ControlForm = styled.div`
	margin-bottom: 15px;
	width: ${({ w }) => w};

	label {
		display: block;
		font-weight: 400;
		margin-bottom: 12px;
		color: #20455e;
		font-size: 14px;
	}

	input {
		width: 100%;
		padding: 8px;
		font-size: 14px;
		border: 1px solid #c1e4fe;
		border-radius: 4px;
		box-sizing: border-box;

		margin-bottom: 1rem;

		&:focus {
			border-color: #007bff;
			outline: none;
		}
	}

	input[type="file"] {
  width: 100%;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #c1e4fe;
  border-radius: 4px;
  box-sizing: border-box;
  margin-bottom: 1rem;
  display: none; /* Oculta o campo file */
}

/* Estilo para o botão customizado */
.file-upload {
  width: 100%;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #c1e4fe;
  border-radius: 4px;
  background-color:rgb(108, 179, 250);
  cursor: pointer;
  text-align: center;
  display: inline-block;
  color: #fff;
  transition: background-color 0.3s ease;
}

.file-upload:hover {
  background-color:rgb(118, 192, 248);
}

.file-upload:active {
  background-color: #007bff;
  color: white;
}

.file-upload span {
  font-weight: bold;
}



	select {
		width: 100%;
		padding: 10px;
		font-size: 14px;
		border: 1px solid #c1e4fe;
		border-radius: 4px;
		box-sizing: border-box;

		margin-bottom: 1rem;

		&:focus {
			border-color: #007bff;
			outline: none;
		}
	}

	button {
		width: 100%;
		padding: 12px;
		background-color: #007bff;
		color: white;
		border: none;
		border-radius: 6px;
		font-size: 16px;
		cursor: pointer;
		transition: background-color 0.3s ease;

		margin-top: 1rem;

		&:hover {
			background-color: #0056b3;
		}

		&:focus {
			outline: none;
		}
	}

	.error {
		border: 1px solid red;
	}
`;

export const ErrorMessageStyled = styled.div`
	color: red;
	font-size: 12px;
	margin-top: 5px;
`;

export const SubmitButton = styled.button`
	width: 100%;
	padding: 12px;
	background-color: #007bff;
	color: white;
	border: none;
	border-radius: 4px;
	font-size: 16px;
	cursor: pointer;
	transition: background-color 0.3s ease;

	margin-top: 4rem;

	&:hover {
		background-color: #0056b3;
	}

	&:focus {
		outline: none;
	}
`;

export const ContainerPrevImage = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;

	gap: 1rem;

	width: 100%;

	margin-bottom: 1rem;

	img {
		width: 40%;
		height: 200px;

		object-fit: cover;

		padding: 2rem;
		background-color: aqua;

		border-radius: 6px;

		background-color: #f4f4f4;
	}
`;
