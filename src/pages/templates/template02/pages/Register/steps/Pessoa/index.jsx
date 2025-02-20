import { InputMask } from "primereact/inputmask";
import { Formulario } from "../../../../../template01/components/Formulario";
import { ContainerButtonNextAndBack } from "../../styles";
import { FaArrowLeft } from "react-icons/fa";
import { RegisterContext } from "../../../../../../../context/RegisterUser";
import { useContext } from "react";

export const PersonType = ({nextStep, prevStep}) => {

	const { typePerson, handleForm } = useContext(RegisterContext);


	return (
		<Formulario title={`Cadastro`} w="80%">
			<label htmlFor="nome" className="font-bold block mb-2">
				Pessoa
			</label>
			<select name="type" onChange={handleForm}>
				<option value="NATURAL">Pessoa Fisica</option>
				<option value="LEGAL">Pessoa Juridica</option>
			</select>

			{typePerson === "Fisica" ? (
				<>
					<label htmlFor="ssn" className="font-bold block mb-2">
						CPF
					</label>
					<InputMask
						id="ssn"
						mask="999.999.999-99"
						placeholder="CPF"
						name="cpf"
						onChange={handleForm}
					></InputMask>
					<label>Data de Nascimento</label>
					<input 
						type="date"
						name="dt_birth"
						onChange={handleForm}
					/>

					<label>Genero</label>
					<select name="gender"
					onChange={handleForm}>
						<option value="M">Masculino</option>
						<option value="F">Feminino</option>
					</select>
					<ContainerButtonNextAndBack>
						<button className="next-step" type="button" onClick={prevStep}>
							<FaArrowLeft />
							Voltar
						</button>
						<button type="button" onClick={nextStep}>
							Proximo
						</button>
					</ContainerButtonNextAndBack>
				</>
			) : (
				<>
					<label htmlFor="cnpj" className="font-bold block mb-2">
						CNPJ
					</label>
					<InputMask
						id="cnpj"
						mask="99.999.999/9999-99"
						placeholder="CNPJ"
						name="cnpj"
						onChange={handleForm}
					></InputMask>
					<label>Nome da Empresa</label>
					<input
						type="text"
						name="corporate_name"
						id="corporate_name"
						placeholder="Nome da Empresa"
						onChange={handleForm}
					/>

					<label for="trade_name">Nome Fantasia</label>
					<input
						type="text"
						name="trade_name"
						id="trade_name"
						placeholder="Nome Fantasia"
						onChange={handleForm}
					/>

					<label for="state_registration">Registro Estadual</label>
					<input
						type="text"
						name="state_registration"
						id="state_registration"
						placeholder="Registro Estadual"
						onChange={handleForm}
					/>

					<ContainerButtonNextAndBack>
						<button className="next-step" type="button" onClick={prevStep}>
							<FaArrowLeft />
							Voltar
						</button>
						<button type="button" onClick={nextStep}>
							Proximo
						</button>
					</ContainerButtonNextAndBack>
				</>
			)}
		</Formulario>
	);
};
