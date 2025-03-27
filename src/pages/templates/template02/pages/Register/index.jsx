import { Container } from "./styles";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import { useContext, useState } from "react";
import { RegisterContext } from "../../../../../context/RegisterUser";
import { Stepper, Step, StepLabel, Button, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useClients } from "../../../../../hooks/Clients/useUserAuth";
import { toast } from "react-toastify";

const steps = ["Dados Pessoais", "Endereço"];

export const RegisterTemplate02 = () => {
	const { typePerson } = useContext(RegisterContext);
	const [activeStep, setActiveStep] = useState(0);
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	const [formData, setFormData] = useState({
		username: "",
		email: "",
		phone: "",
		password: "",
		confirmPassword: "",
		type: "NATURAL",
		gender: "",
		cpf: "",
		dt_birth: "",
		zip_code: "",
		public_area: "",
		number: "",
		complement: "",
		district: "",
		city: "",
		state: "",
		CNPJ: "",
		corporate_name: "",
		trade_name: "",
		state_registration: "",
	});

	function handleForm(event) {
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
		});
	}

	const { create } = useClients();

	const handleNext = () => {
		// Validação para garantir que as senhas sejam iguais antes de avançar
		if (activeStep === 0 && formData.password !== formData.confirmPassword) {
			toast.error("As senhas não coincidem. Verifique e tente novamente.");
			return;
		}

		if (activeStep < steps.length - 1) {
			setActiveStep((prevStep) => prevStep + 1);
		} else {
			create.mutate(formData);
			if(create.isLoading) {

				setFormData({
					username: "",
					email: "",
					phone: "",
					password: "",
					confirmPassword: "",
					type: "NATURAL",
					gender: "",
					cpf: "",
					dt_birth: "",
					zip_code: "",
					public_area: "",
					number: "",
					complement: "",
					district: "",
					city: "",
					state: "",
					CNPJ: "",
					corporate_name: "",
					trade_name: "",
					state_registration: "",
				});
			}
		}
	};

	const handleBack = () => {
		if (activeStep > 0) {
			setActiveStep((prevStep) => prevStep - 1);
		}
	};

	return (
		<Container>
			<div className="container">
				<div className="container_step">
					<Stepper activeStep={activeStep} alternativeLabel>
						{steps.map((label, index) => (
							<Step key={index}>
								<StepLabel>{label}</StepLabel>
							</Step>
						))}
					</Stepper>
				</div>
				<div className="form">
					<form className="container_form">
						{activeStep === 0 && (
							<>
								<div className="form_flex">
									<div className="form_group">
										<label>Nome</label>
										<input
											name="username"
											placeholder="Digite seu nome"
											type="text"
											value={formData.username}
											onChange={handleForm}
										/>
									</div>
									<div className="form_group">
										<label>E-mail</label>
										<input
											name="email"
											placeholder="Ex: @email.com.br"
											type="email"
											value={formData.email}
											onChange={handleForm}
										/>
									</div>
								</div>

								<div className="form_group">
									<label>Telefone</label>
									<input
										name="phone"
										type="text"
										placeholder="Ex: (11) 0000-00000"
										value={formData.phone}
										onChange={handleForm}
									/>
								</div>

								<div className="form_flex">
									<div className="form_group">
										<label>Pessoa</label>
										<select name="type" onChange={handleForm}>
											<option value="NATURAL">Física</option>
											<option value="LEGAL">Jurídica</option>
										</select>
									</div>
								</div>

								{formData.type === "NATURAL" ? (
									<>
										<div className="form_flex">
											<div className="form_group">
												<label>CPF</label>
												<input
													placeholder="Digite seu CPF"
													name="cpf"
													type="text"
													value={formData.cpf}
													onChange={handleForm}
												/>
											</div>
											<div className="form_group">
												<label>Data de Nascimento</label>
												<input
													name="dt_birth"
													type="date"
													value={formData.dt_birth}
													onChange={handleForm}
												/>
											</div>
											<div className="form_group">
												<label>Gênero</label>
												<select name="gender" onChange={handleForm}>
													<option value="M">Masculino</option>
													<option value="F">Feminino</option>
												</select>
											</div>
										</div>
									</>
								) : (
									<>
										<div className="form_flex">
											<div className="form_group">
												<label>CNPJ</label>
												<input
													name="CNPJ"
													type="text"
													placeholder="Digite seu CNPJ"
													value={formData.CNPJ}
													onChange={handleForm}
												/>
											</div>
											<div className="form_group">
												<label>Nome da empresa</label>
												<input
													name="corporate_name"
													placeholder="Nome da empresa"
													type="text"
													value={formData.corporate_name}
													onChange={handleForm}
												/>
											</div>
											<div className="form_group">
												<label>Nome fantasia</label>
												<input
													name="trade_name"
													placeholder="Nome fantasia"
													type="text"
													value={formData.trade_name}
													onChange={handleForm}
												/>
											</div>
											<div className="form_group">
												<label>Escrição estadual</label>
												<input
													name="state_registration"
													placeholder="Inscrição estadual"
													type="text"
													value={formData.state_registration}
													onChange={handleForm}
												/>
											</div>
										</div>
									</>
								)}

								<div className="form_flex">
									<div className="form_group">
										<label>Senha</label>
										<div style={{ display: "flex", alignItems: "center" }}>
											<input
												name="password"
												type={showPassword ? "text" : "password"}
												value={formData.password}
												onChange={handleForm}
												placeholder="********"
											/>
											<IconButton
												className="pass"
												onClick={() => setShowPassword(!showPassword)}
											>
												{showPassword ? <VisibilityOff /> : <Visibility />}
											</IconButton>
										</div>
									</div>
									<div className="form_group">
										<label>Confirmar senha</label>
										<div style={{ display: "flex", alignItems: "center" }}>
											<input
												name="confirmPassword"
												type={showConfirmPassword ? "text" : "password"}
												value={formData.confirmPassword}
												onChange={handleForm}
												placeholder="********"
											/>
											<IconButton
												className="pass"
												onClick={() =>
													setShowConfirmPassword(!showConfirmPassword)
												}
											>
												{showConfirmPassword ? (
													<VisibilityOff />
												) : (
													<Visibility />
												)}
											</IconButton>
										</div>
									</div>
								</div>
							</>
						)}

						{activeStep === 1 && (
							<>
								<div className="form_flex">
									<div className="form_group" style={{ width: "20%" }}>
										<label>CEP</label>
										<input
											name="zip_code"
											placeholder="Digite seu cep"
											type="text"
											value={formData.zip_code}
											onChange={handleForm}
										/>
									</div>
									<div className="form_group">
										<label>Endereço</label>
										<input
											name="public_area"
											placeholder="Digite seu endereço"
											type="text"
											value={formData.public_area}
											onChange={handleForm}
										/>
									</div>
									<div className="form_group">
										<label>Cidade</label>
										<input
											name="city"
											placeholder="Complemento"
											type="text"
											value={formData.city}
											onChange={handleForm}
										/>
									</div>
								</div>

								<div className="form_flex">
									<div className="form_group">
										<label>Bairro</label>
										<input
											name="district"
											placeholder="Digite seu bairro"
											type="text"
											value={formData.d}
											onChange={handleForm}
										/>
									</div>
									<div className="form_group">
										<label>Estado</label>
										<input
											name="state"
											placeholder="Digite seu estado"
											type="text"
											value={formData.state}
											onChange={handleForm}
										/>
									</div>
									<div className="form_group">
										<label>Complemento</label>
										<input
											name="complement"
											placeholder="Complemento"
											type="text"
											value={formData.complement}
											onChange={handleForm}
										/>
									</div>
									<div className="form_group" style={{ width: "20%" }}>
										<label>Numero</label>
										<input
											name="number"
											placeholder="Digite seu numero"
											type="text"
											value={formData.number}
											onChange={handleForm}
										/>
									</div>
								</div>
							</>
						)}

						<div className="buttons">
							<Button
								disabled={activeStep === 0}
								onClick={handleBack}
								variant="contained"
							>
								Anterior
							</Button>
							<Button onClick={handleNext} variant="contained" color="primary">
								{activeStep === steps.length - 1 ? "Finalizar" : "Próximo"}
							</Button>
						</div>
					</form>
				</div>
			</div>
		</Container>
	);
};
