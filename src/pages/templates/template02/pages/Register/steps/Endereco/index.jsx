import { InputMask } from "primereact/inputmask";
import { Formulario } from "../../../../../template01/components/Formulario";
import { ContainerButtonNextAndBack } from "../../styles";
import { FaArrowLeft } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { RegisterContext } from "../../../../../../../context/RegisterUser";
import axios from "axios";

export const Endereco = ({ prevStep }) => {

	const { handleForm, formData, submitCreateUser } = useContext(RegisterContext);
	const [zipCode, setZipCode] = useState([]);

	async function getAddress() {
		const cep = formData.zip_code.replace("-", "");
		const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
		setZipCode(data);
	}

	useEffect(() => {
		
		getAddress();
		formData.public_area = zipCode.logradouro
		formData.city = zipCode.localidade
		formData.state = zipCode.uf
		formData.neighborhood = zipCode.bairro
	}, [formData.zip_code]);


	

	return (
		<>
			<Formulario title="Endereço" w="80%">
				<label>CEP</label>
				<InputMask
					id="ssn"
					mask="99999-999"
					name="zip_code"
					placeholder="CEP"
					onChange={handleForm}
					value={formData.zip_code}
				></InputMask>

				<label htmlFor="public_area" className="font-bold block mb-2">
					Endereço
				</label>
				<input placeholder="Endereço" name="public_area" type="text"
				onChange={handleForm}
				value={formData.public_area} 
				 />

				<label htmlFor="number" className="font-bold block mb-2">
					Numero
				</label>
				<input placeholder="Numero" name="number" type="text"
				onChange={handleForm} />

				<label htmlFor="city" className="font-bold block mb-2">
					Cidade
				</label>
				<input placeholder="Cidade" name="city" type="text"
				onChange={handleForm}
				value={formData.city}
				 />

				<label htmlFor="public_area" className="font-bold block mb-2">
					Bairro
				</label>
				<input placeholder="Cidade" name="neighborhood" type="text"
				onChange={handleForm} 
				value={formData.neighborhood}
				/>

				<label htmlFor="state" className="font-bold block mb-2">
					Estado
				</label>
				<input placeholder="Estado" name="state" type="text"
				onChange={handleForm} 
				value={formData.state}
				/>

				<ContainerButtonNextAndBack>
					<button className="next-step" type="button" onClick={prevStep}>
						<FaArrowLeft />
						Voltar
					</button>
					<button type="button" onClick={submitCreateUser}>
						Cadastrar
					</button>
				</ContainerButtonNextAndBack>
			</Formulario>
		</>
	);
};
