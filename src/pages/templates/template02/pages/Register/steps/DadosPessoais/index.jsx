import { InputMask } from "primereact/inputmask";
import { Formulario } from "../../../../../template01/components/Formulario";
import { RegisterContext } from "../../../../../../../context/RegisterUser";
import { useContext } from "react";

export const Dadospessoais = ({ nextStep }) => {
	const { handleForm } = useContext(RegisterContext);

	return (
		<Formulario title="Dados Pessoais" w="80%">
			<label htmlFor="name" className="font-bold block mb-2">
				Nome
			</label>
			<input
				placeholder="Nome completo"
				name="name"
				id="name"
				onChange={handleForm}
			/>

			<label>Telefone</label>
			<InputMask
				id="ssn"
				mask="(99) 99999-9999"
				name="phone"
				placeholder="(11) 99999-9999"
				onChange={handleForm}
			></InputMask>

			<label htmlFor="nome" className="font-bold block mb-2">
				E-mail
			</label>
			<input placeholder="E-mail" name="email" id="nome" onChange={handleForm} />

			<label>Senha</label>

			<input 
				type="password"
				name="password"
				placeholder="******"
				onChange={handleForm}
			/>

			<label>Confirmar Senha</label>
			<input 
				type="password"
				name="confirmPassword"
				placeholder="******"
				onChange={handleForm}
			/>

			

			<button type="button" onClick={nextStep}>
				Proximo
			</button>
		</Formulario>
	);
};
