import { useContext } from "react";
import { ButtonTemplate } from "../../components/Button";
import { HeaderTemplateEditor } from "../../components/Header";
import { ContainerLink } from "../Conteudo/styles";
import { ThemeColorContext } from "../../../../../context/ThemeContext";
import { useNavigate, useParams } from "react-router-dom";

export const Pesonalizar = () => {

    const { setTheme } = useContext(ThemeColorContext);
    const { theme } = useParams();
    const { page } = useParams();
    const navigate = useNavigate();

	return (
		<>
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
				<ContainerLink to={`/administrativo/${theme}/editor/`}>
					Voltar
				</ContainerLink>
			</HeaderTemplateEditor>
			<div>
                
            </div>
		</>
	);
};
