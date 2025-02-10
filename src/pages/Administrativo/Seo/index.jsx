import { Link } from "react-router-dom";
import { useApi } from "../../../hooks/useApi";
import { ContainerPage } from "../components/Section";
import { HeaderTemplateEditor } from "../Template/components/Header";
import {
	ContainerCard,
	ContainerCardContent,
	ContainerPageAdm,
} from "./styles";
import { useState } from "react";
import { Form } from "../components/Form";
import { SubmitButton } from "../components/Form/styles";
import { http } from "../../../config/http";

export const SeoPageAdm = () => {
	const { items } = useApi("/pages");
	const [pagesSelect, setPagesSelect] = useState("");
	const [formSubmit, setFormSubmit] = useState([]);

	function handleSubmit(event) {
		try {
			const {name,value} = event.target;
			setFormSubmit((prevForm) => ({
				...prevForm,
				[name]: value
			}))
		} catch (error) {
			console.log(error)
		}
	}

	async function submitForm(event) {
		event.preventDefault();
		try {
			const {data} = await http.post('/seo', {
				meta_title: formSubmit.meta_title,
				meta_description: formSubmit.meta_description,
				meta_keywords: formSubmit.meta_keywords,
				google_analytics: formSubmit.google_analytics,
				google_search_console: formSubmit.google_search_console,
				pagina_link: pagesSelect
			});

			console.log(data)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<>
			<HeaderTemplateEditor>
				<h2>Seo do E-commerce</h2>
			</HeaderTemplateEditor>
			<ContainerPage>
				<ContainerPageAdm>
					<h4>Minhas paginas</h4>
					<ContainerCardContent>
						{items.map((i) => (
							<>
								<ContainerCard onClick={() => setPagesSelect(i.link)}>
									<p>{i.page}</p>
								</ContainerCard>
							</>
						))}
					</ContainerCardContent>
					<div style={{ marginTop: "2rem" }}>
						<Form name="Seo para minha pagina" submit={submitForm}>
							<label>Meta Title</label>
							<input 
								name="meta_title"
								placeholder="Digite um meta title"
								onChange={handleSubmit}
							/>
							<label>Meta Description</label>
							<input 
								name="meta_description"
								placeholder="Digite a meta description da página"
								onChange={handleSubmit}
							/>
							<label>Palavras chaves</label>
							<input 
								name="meta_keywords"
								placeholder="Digite as palavras chaves desejadas"
								onChange={handleSubmit}
							/>
						
							
							<SubmitButton>Cadastrar</SubmitButton>
						</Form>
					</div>
				</ContainerPageAdm>
			</ContainerPage>
		</>
	);
};
