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

export const SeoPageAdm = () => {
	const { items } = useApi("/pages");
	const [pagesSelect, setPagesSelect] = useState("");

	// const filter = pagesSelect.filter((f) => f.link === )

	console.log(pagesSelect);

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
						<Form name="Seo para minha pagina">
							<label>Meta Title</label>
							<input 
								placeholder="Digite um meta title"
							/>
							<label>Meta Description</label>
							<input 
								placeholder="Digite a meta description da página"
							/>
							<label>Palavras chaves</label>
							<input 
								placeholder="Digite as palavras chaves desejadas"
							/>
							<label>Google Analytics</label>
							<input 
								placeholder="Digite o ID DA MÉTRICA"
							/>
							<label>Google Search Console</label>
							<input />
							<SubmitButton>Cadastrar</SubmitButton>
						</Form>
					</div>
				</ContainerPageAdm>
			</ContainerPage>
		</>
	);
};
