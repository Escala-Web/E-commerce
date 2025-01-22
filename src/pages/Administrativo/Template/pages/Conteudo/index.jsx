import { useContext } from "react";
import { ThemeColorContext } from "../../../../../context/ThemeContext";
import { ButtonTemplate } from "../../components/Button";
import { Content } from "../../components/Content";
import { HeaderTemplateEditor } from "../../components/Header";
import { Container, ContainerLink } from "./styles";
import { Link, useParams } from "react-router-dom";

export const ConteudoTemplateAdministrador = () => {
	const { setTheme } = useContext(ThemeColorContext);

    const { theme } = useParams();

    

	return (
		<>
			<Container>
				<HeaderTemplateEditor>
					<ButtonTemplate click={() => setTheme("black")}>
						Tema Preto
					</ButtonTemplate>
					<ButtonTemplate click={() => setTheme("green")}>
						Tema Verde
					</ButtonTemplate>
					<ButtonTemplate click={() => setTheme("purple")}>
						Teme Roxo
					</ButtonTemplate>
					<ButtonTemplate click={() => setTheme("blue")}>
						Tema Azul
					</ButtonTemplate>
					<ButtonTemplate click={() => setTheme("orange")}>
						Tema Laranja
					</ButtonTemplate>
					<ButtonTemplate click={() => setTheme("red")}>
						Tema Vermelho
					</ButtonTemplate>
					<ContainerLink to={`/administrativo/${theme}/editor/create-page`}>
						Adicionar Pagina
					</ContainerLink>
				</HeaderTemplateEditor>
				<Content />
			</Container>
		</>
	);
};
