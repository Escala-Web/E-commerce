import { useContext, useState } from "react";
import { ContainerContentEditor } from "../../styles";
import { useParams } from "react-router-dom";
import { Formulario } from "../../components/Formulario";
import { CardSection } from "../../../../../components/CardSection";
import { Title } from "../../../../../components/Title";
import { TemplateContext } from "../../../../../context/Template";
import { HeaderPage } from "../../components/HeaderPage";
import { Form } from "./styles";
import { Banners } from "../../components/Banners";

export const ConteudoEditorPage = () => {
	const { theme } = useParams();	

	return (
		<>
			<div>
				<ContainerContentEditor>
					<CardSection w="100%">
						<Title>Thema {theme} - Conteudo</Title>
					</CardSection>
					<CardSection w="100%" h="70vh" scroll={'scroll'}>
						<HeaderPage />
						<Banners/>
					</CardSection>

					<CardSection w="100%">
						<Title>Configuração do conteudo</Title>

						<div>
							ss
						</div>
					</CardSection>
				</ContainerContentEditor>
			</div>
		</>
	);
};
