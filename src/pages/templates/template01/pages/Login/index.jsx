import { Link, useNavigate } from "react-router-dom";
import { Formulario } from "../../components/Formulario";
import {
	Container,
	ContainerInfoRegister,
	ContainerInfos,
	ContainerLogin,
	LinkEsqueciASenha,
	RegisterImage,
} from "./styles";
import registra from "../../../../../assets/registrar.png";
import { useContext, useEffect, useState } from "react";
import { https } from "../../../../../config/https";
import { toast } from "react-toastify";
import { AuthContext } from "../../../../../context/Auth";
import { useLogin } from "../../../../../hooks/useLogin";

export const LoginPageTemplate01 = ({ user }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const { onSubmitAdmin, onSubmitUser } = useLogin(email, password);

	return (
		<>
			<Container>
				<ContainerInfos>
					<ContainerInfoRegister>
						<img src={registra} />
					</ContainerInfoRegister>
				</ContainerInfos>
				<ContainerLogin>
					<Formulario submit={user === 'user' ? onSubmitUser : onSubmitAdmin} w="60%" p="4rem 2rem" title="Login">
						<input
							placeholder="E-mail"
							name="email"
							type="email"
							value={email}
							onChange={(event) => setEmail(event.target.value)}
						/>

						<input
							placeholder="Senha"
							name="password"
							type="password"
							value={password}
							onChange={(event) => setPassword(event.target.value)}
						/>

						<LinkEsqueciASenha to="/esqueci-senha">
							Esqueci a senha
						</LinkEsqueciASenha>
						<button>Entrar</button>
					</Formulario>
				</ContainerLogin>
			</Container>
		</>
	);
};
