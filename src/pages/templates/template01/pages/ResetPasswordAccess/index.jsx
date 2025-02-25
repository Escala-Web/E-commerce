import { useState } from "react";

import { https } from "../../../../../config/https";
import { useNavigate, useSearchParams } from "react-router-dom";

import imageReset from "../../../../../assets/reset-pass.png";
import { Container, ContainerInfos, LinkEsqueciASenha } from "../Login/styles";
import { Formulario } from "../../components/Formulario";
import { ContainerForm } from "../ResetPassword/styles";
import { toast } from "react-toastify";
import { useResetPassword } from "../../../../../hooks/useResetPassword";

export const ResetPasswordAccess = () => {
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [param, setParams] = useSearchParams();
	const token = param.get("token");

	const { resetPassword } = useResetPassword(password);

	const navigate = useNavigate();

	async function submit(event) {
		event.preventDefault();

		if (password !== confirmPassword) {
			toast.error("Por favor, verifique se as duas senhas são iguais.");
			return;
		}

		if (!password) {
			toast.error("O campo senha não pode ser vazio.");
			return;
		}

		try {
			resetPassword();
		} catch (error) {
			// console.log(error)
			toast.warning(error.response.data.message);
		}
	}

	return (
		<>
			<Container>
				<ContainerInfos>
					<img src={imageReset} alt="Resetar senha" />
				</ContainerInfos>
				<ContainerForm>
					<Formulario submit={submit} w="80%" title="Nova senha">
						<input
							placeholder="Digite sua senha*"
							name="password"
							type="password"
							value={password}
							onChange={(event) => setPassword(event.target.value)}
						/>
						<input
							placeholder="Confirme sua senha*"
							name="confirm"
							type="password"
							value={confirmPassword}
							onChange={(event) => setConfirmPassword(event.target.value)}
						/>
						<LinkEsqueciASenha to="/esqueci-senha">
							Enviar codigo novamente
						</LinkEsqueciASenha>
						<button>Atualiza a senha</button>
					</Formulario>
				</ContainerForm>
			</Container>
		</>
	);
};
