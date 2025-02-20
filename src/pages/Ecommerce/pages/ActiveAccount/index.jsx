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
import { useActiveAccount } from '../../../../hooks/useActiveAccount';

export const ActiveAccountPage = () => {

	const { active, toggleSubmitActiveAccount, email, setEmail, toggleActiveAccountToken } = useActiveAccount();
	
	const [isOpenModal, setIsOpenModal] = useState(false);

	function toggleActiveModal() {
		setIsOpenModal((prevModal) => !prevModal);
	}

	console.log(active)

	const firstAccess = null;
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
			{isOpenModal ? (
				<ContainerModalActive>
					<ContainerModalContent>
						<ContainerIconClose onClick={toggleActiveModal}>
							<IoCloseCircleSharp size={32} color="#e74d3c" />
						</ContainerIconClose>
						<FormularioContainer onSubmit={toggleSubmitActiveAccount}>
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
