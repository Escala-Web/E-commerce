import { FaCheckCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import {
	Container,
	ContainerIconClose,
	ContainerModal,
	ContainerModalActive,
	ContainerModalContent,
	FormularioContainer,
	LinkStyle,
} from "./styles";
import { https } from "../../../../config/https";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { GiPadlock } from "react-icons/gi";
import { Input } from "../../../../components/Input";
import { Button } from "../../../../components/Button";
import { IoCloseCircleSharp } from "react-icons/io5";

export const ActiveAccountPage = () => {
	const [param, setParam] = useSearchParams();
	const [active, setActive] = useState(false);
	const [isActiveModal, setIsActiveModal] = useState(false);
	const [email, setEmail] = useState("");

	const navigate = useNavigate();

	const tokenActive = param.get("token");
	const firstAccess = param.get("first-access");

	console.log(firstAccess)

	function toggleActiveModal() {
		setIsActiveModal((prevActive) => !prevActive);
	}

	async function submitActive(event) {
		event.preventDefault();

		try {
			const { data } = await https.post("/admin/send-active-account", {
				email,
			});

			toast.success(data.message);
			toast.success(data.response.message);
		} catch (error) {
			toast.error(error.response.data.message);
		}
	}
	
	if(firstAccess === null) {
	async function toogleActiveAccount() {
		try {
			await https.put("/admin/active-account", {
				token: tokenActive,
			});

			setActive(true);
			toast.success("Conta ativada com sucesso!");
			setTimeout(() => {
				navigate("/login");
			}, 5000);
		} catch (error) {
			toast.error(error.response.data.message);
			setActive(false);
			console.log(error);
		}
	}

	useEffect(() => {
			toogleActiveAccount();
			
			
		}, [tokenActive]);
		
	}
	return (
		<>
			<Container>
				<ContainerModal>
					{firstAccess !== null ? (
						<>
							<h2>Foi enviado um email para ativar sua conta!</h2>
							<FaCheckCircle size={150} color="#4ab4ff" />
							<p>Não recebeu email? Clique abaixo para receber o link</p>
							<button onClick={toggleActiveModal}>Enviar link</button>
						</>

					) : (

						<>
							{active ? (
								<>
									<h2>Conta ativada com sucesso</h2>
									<FaCheckCircle size={150} color="#4ab4ff" />
									<LinkStyle to="/login">Entrar</LinkStyle>
								</>
							) : (
								<>
									<h2>Link invalido</h2>
									<GiPadlock size={150} color="#e74d3c" />
									<p>Clique abaixo para receber um novo link de</p>
									<LinkStyle color="#e74d3c" onClick={toggleActiveModal}>
										Reenviar link de ativação
									</LinkStyle>
								</>
							)}
						</>
					)}
					
					
				</ContainerModal>
			</Container>
			{isActiveModal ? (
				<ContainerModalActive>
					<ContainerModalContent>
						<ContainerIconClose onClick={toggleActiveModal}>
							<IoCloseCircleSharp size={32} color="#e74d3c" />
						</ContainerIconClose>
						<FormularioContainer onSubmit={submitActive}>
							<h2>Reenviar link</h2>
							<div>
								<Input
									placeholder="Digite o seu email*"
									type="email"
									label="E-mail"
									name="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
								<br />
								<Button color="#343434" name="Receber Codigo" />
							</div>
						</FormularioContainer>
					</ContainerModalContent>
				</ContainerModalActive>
			) : (
				""
			)}
		</>
	);
};
