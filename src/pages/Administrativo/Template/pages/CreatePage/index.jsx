import { useContext, useState } from "react";
import { ThemeColorContext } from "../../../../../context/ThemeContext";
import { Container, ContainerLink } from "../Conteudo/styles";
import { HeaderTemplateEditor } from "../../components/Header";
import { ButtonTemplate } from "../../components/Button";
import { Form } from "../../../components/Form";
import { SubmitButton } from "../../../components/Formulario/styles";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
export const CreatePageAdministrador = () => {
	const { setTheme } = useContext(ThemeColorContext);
	const { theme } = useParams();
	const navigate = useNavigate();
	const [pages, setPages] = useState([]);

	async function submit(event) {
		event.preventDefault();

		try {
			await axios.post("http://localhost:3001/pages", {
				page: pages.name_page,
				link: pages.name_link,
			});
			toast.success("Página criada com sucesso");
			navigate(
				`/administrativo/${theme}/editor/personalizar/${pages.name_link}`
			);
		} catch (error) {
			console.log(error);
		}
	}

	function handlePages(event) {
		const { name, value } = event.target;

		setPages((prevPage) => ({
			...prevPage,
			[name]: value,
		}));
	}

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
					<ContainerLink to={`/administrativo/${theme}/editor/`}>
						Voltar
					</ContainerLink>
				</HeaderTemplateEditor>
				<>
					<Form name="Crie sua pagina" submit={submit}>
						<label>Nome da página</label>
						<input
							name="name_page"
							placeholder="Digite o nome da página*"
							onChange={handlePages}
						/>
						<label>
							Página
						</label>
						<input
							name="componentPage"
							placeholder="Select page*"
							onChange={handlePages}
						/>
						<label>Link da página</label>
						
						<input
							name="name_link"
							placeholder="Digite o link da página*"
							onChange={handlePages}
						/>

						<SubmitButton>Cadastrar Página</SubmitButton>
					</Form>
				</>
			</Container>
		</>
	);
};
