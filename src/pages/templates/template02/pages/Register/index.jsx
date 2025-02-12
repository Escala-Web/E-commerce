import { Formulario } from "../../../template01/components/Formulario";
import { InputMask } from "primereact/inputmask";
import { RadioButton } from "primereact/radiobutton";
import { Container } from "./styles";
import { Steps } from "primereact/steps";
import { Calendar } from "primereact/calendar";
import "primereact/resources/themes/lara-light-blue/theme.css"; // ou outro tema
import "primereact/resources/primereact.min.css";

export const RegisterTemplate02 = () => {
	return (
		<>
			<Container>
				<div className="form-image-register">Teste</div>
				<div className="form-content">
					<Formulario title="Registre-se" w="80%">
						<label htmlFor="name" className="font-bold block mb-2">
							Nome
						</label>
						<input placeholder="Nome completo" name="name" id="name" />

						<label htmlFor="nome" className="font-bold block mb-2">
							E-mail
						</label>
						<input placeholder="E-mail" name="name" id="nome" />

						<label htmlFor="nome" className="font-bold block mb-2">
							Pessoa
						</label>
						<select name="type">
							<option value="NATURAL">Pessoa Fisica</option>
							<option value="">Pessoa Juridica</option>
						</select>

						<label htmlFor="ssn" className="font-bold block mb-2">
							CPF
						</label>
						<InputMask
							id="ssn"
							mask="999.999.999-99"
							placeholder="CPF"
						></InputMask>

						<label htmlFor="ssn" className="font-bold block mb-2">
							Genero
						</label>
						<select name="type">
							<option value="M">Masculino</option>
							<option value="F">Feminina</option>
							<option value="O">Outros</option>
							<option value="N/E">Prefiro não responder</option>
						</select>


                        <label htmlFor="ssn" className="font-bold block mb-2">
							Data de Nasc
						</label>
						<Calendar placeholder="01/01/2025"  />

						<label htmlFor="phone" className="font-bold block mb-2">
							Phone
						</label>
						<InputMask
							id="phone"
							mask="(999) 999-9999"
							placeholder="(999) 999-9999"
						></InputMask>

						<label htmlFor="serial" className="font-bold block mb-2">
							Serial
						</label>
						<InputMask
							id="serial"
							mask="a*-999-a999"
							placeholder="a*-999-a999"
						></InputMask>
						<button>Cadastrar</button>
					</Formulario>
				</div>
			</Container>
		</>
	);
};
