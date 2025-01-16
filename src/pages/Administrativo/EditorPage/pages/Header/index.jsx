import { useEffect, useState } from "react";
import { ContainerContentEditor } from "../../styles";
import { useParams, useSearchParams } from "react-router-dom";
import { Formulario } from "../../components/Formulario";
import { CardSection } from "../../../../../components/CardSection";
import { Title } from "../../../../../components/Title";
import { HeaderPage } from "../../components/HeaderPage";
import { ContainerStyle, Form } from "./styles";
import { http } from "../../../../../config/http";
import { useApi } from "../../../../../hooks/useApi";
import { toast } from "react-toastify";
import { LinkButton } from "../../components/LinkButton";
import { TabNavigate } from "../../components/Tabnavigation";
import { ListarMenu } from "../../views/Header/List";
import { CadastrarMenu } from "../../views/Header/Register/cadastrar";

export const HeaderEditorPage = () => {

	const { theme } = useParams();
	const [params, setParams] = useSearchParams();
	const [edit, setEdit] = useState('listar');
	
	const edite = params.get('edite');

	useEffect(() => {
		const edite = params.get('edite');
		if (edite) {
		  setEdit(edite);
		}
	  }, [params]);
	

	return (
		<>
			<div>
				<ContainerContentEditor>
					<CardSection w="100%">
						<Title textAlign="center">Thema {theme} - Cabeçario</Title>
					</CardSection>
					<CardSection w="100%" h="40vh">
						<HeaderPage />
					</CardSection>

					<CardSection w="100%">
						<Title textAlign="center" fontSize="2rem">
							Configuração do menu
						</Title>
						<TabNavigate>
							<LinkButton link='?edite=listar'>Listar</LinkButton>
							<LinkButton link='?edite=cadastrar'>Cadastrar</LinkButton>
						</TabNavigate>

						{edit === 'listar' ? (
							<ListarMenu />
						): (
							<CadastrarMenu />
						)}

						

					</CardSection>
				</ContainerContentEditor>
			</div>
		</>
	);
};
