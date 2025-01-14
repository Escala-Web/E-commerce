import { useContext, useState } from "react";
import { ContainerContentEditor } from "../../styles";
import { useParams } from "react-router-dom";
import { Formulario } from "../../components/Formulario";
import { CardSection } from "../../../../../components/CardSection";
import { Title } from "../../../../../components/Title";
import { TemplateContext } from "../../../../../context/Template";
import { HeaderPage } from "../../components/HeaderPage";
import { Form } from "./styles";

export const HeaderEditorPage = () => {
	const { theme } = useParams();
	const [links, setLinks] = useState("");
	const { headerLinks, setHeaderLinks } = useContext(TemplateContext);

	function addLinkToHeaderr(event) {
		event.preventDefault();

		if (links) {
			setHeaderLinks((prev) => [...prev, links]);
		}
		setLinks("");
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
								<Form onClick={addLinkToHeaderr}>
									<input
										placeholder="Nome do link"
										value={links}
										onChange={(e) => setLinks(e.target.value)}
										name="link"
									/>
									<button type="submit">Adicionar +</button>
								</Form>
							</Formulario>
						</div>
					</CardSection>
				</ContainerContentEditor>
			</div>
		</>
	);
};
