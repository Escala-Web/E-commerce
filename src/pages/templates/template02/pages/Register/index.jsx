import { Formulario } from "../../../template01/components/Formulario";
import { InputMask } from "primereact/inputmask";
import {
	Container,
	ContainerButtonNextAndBack,
	ContainerSteps,
	RegisterContent,
	Step,
} from "./styles";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import { useContext, useState } from "react";
import { FaArrowLeft, FaUserCircle, FaUserTie } from "react-icons/fa";
import { MdOutlineMyLocation } from "react-icons/md";
import { Dadospessoais } from "./steps/DadosPessoais";
import { PersonType } from "./steps/Pessoa";
import { Endereco } from "./steps/Endereco";
import { Link } from "react-router-dom";
import { RegisterContext } from "../../../../../context/RegisterUser";

export const RegisterTemplate02 = () => {
	const [steps, setSteps] = useState(1);

	const { typePerson } = useContext(RegisterContext);

	const stepsIcons = [
		{
			step: 1,
			title: "Dados Pessoais",
			icon: <FaUserCircle />,
		},
		{
			step: 2,
			title: "Pessoa " + typePerson,
			icon: <FaUserTie />,
		},
		{
			step: 3,
			title: "Endereço",
			icon: <MdOutlineMyLocation />,
		},
	];

	const nextStep = () => {
		if (steps === 3) return;
		setSteps(steps + 1);
	};
	const prevStep = () => {
		if (steps === 1) return;
		setSteps(steps - 1);
	};

	return (
		<>
			<Container>
				<RegisterContent>
					<div>
						<h4>Seja Bem-Vindo de volta!</h4>
						<p>Faça login para acessar sua conta e continuar sua jornada de compras. É rápido e seguro!</p>
					</div>
					<Link className="link" to='/login'>Entrar</Link>
				</RegisterContent>
				<div className="form-content">
					<Link className="link-back">Voltar</Link>
					<ContainerSteps>
						{stepsIcons.map((step, index) => (
							<Step key={step.step} active={steps === step.step}>
								<div className="container-icon">{step.icon}</div>
								<p>{step.title}</p>
							</Step>
						))}
					</ContainerSteps>

					{steps === 1 && <Dadospessoais nextStep={nextStep} />}
					{steps === 2 && (
						<PersonType
							typePerson={typePerson}
							nextStep={nextStep}
							prevStep={prevStep}
						/>
					)}
					{steps === 3 && <Endereco nextStep={nextStep} prevStep={prevStep} />}
				</div>
			</Container>
		</>
	);
};
