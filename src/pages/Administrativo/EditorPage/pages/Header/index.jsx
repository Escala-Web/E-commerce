import { useContext, useState } from "react";
import { ContainerContentEditor } from "../../styles";
import { useParams } from "react-router-dom";
import { Formulario } from "../../components/Formulario";
import { CardSection } from "../../../../../components/CardSection";
import { Title } from "../../../../../components/Title";
import { TemplateContext } from "../../../../../context/Template";
import { HeaderPage } from "../../components/HeaderPage";
import { Form } from "./styles";
import { useCreate } from "../../../../../hooks/useCreate";
import axios from "axios";

export const HeaderEditorPage = () => {
	const { theme } = useParams();
	const [link, setLink] = useState('');
	const { headerLinks, setHeaderLinks } = useContext(TemplateContext);

	async function addLinkToHeaderr(event) {
		event.preventDefault();
		
		try {
			await axios.post('http://localhost:3001/template', {
				link
			})
			console.log('Cadasytr')
		} catch (error) {
			console.log(error)
		}
		
	}

	return (
		<>
			<div>
				<ContainerContentEditor>
					<CardSection w="100%">
						<Title>Thema {theme} - Cabeçario</Title>
					</CardSection>
					<CardSection w="100%" h="40vh">
						<HeaderPage />
					</CardSection>

					<CardSection w="100%">
						<Title>Configuração do menu</Title>

						<div>
							<Formulario>
								<Title fontSize="18px">
									<p>Adicionar menu</p>
								</Title>
								<Form >
									<input
										placeholder="Nome do link"
										value={link}
										onChange={(e) => setLink(e.target.value)}
										name="link"
									/>
									<button onClick={addLinkToHeaderr}>Adicionar +</button>
								</Form>
							</Formulario>
						</div>
					</CardSection>
				</ContainerContentEditor>
			</div>
		</>
	);
};
