import { Link } from "react-router-dom";
import { useApi } from "../../../hooks/useApi";
import { ContainerPage } from "../components/Section";
import { HeaderTemplateEditor } from "../Template/components/Header";
import {
	Container,
	ContainerCard,
	ContainerCardContent,
	ContainerPageAdm,
} from "./styles";
import { useState } from "react";
import { Form } from "../components/Form";
import { SubmitButton } from "../components/Form/styles";
import { http } from "../../../config/http";
import { Breadcrumb } from "../components/Breadcrumb";
import { Box, Button, Tab, Tabs, TextField, Typography } from "@mui/material";

export const SeoPageAdm = () => {
	const { items } = useApi("/pages");
	const [pagesSelect, setPagesSelect] = useState("");
	const [formSubmit, setFormSubmit] = useState([]);

	function handleSubmit(event) {
		try {
			const { name, value } = event.target;
			setFormSubmit((prevForm) => ({
				...prevForm,
				[name]: value,
			}));
		} catch (error) {
			console.log(error);
		}
	}

	async function submitForm(event) {
		event.preventDefault();
		try {
			const { data } = await http.post("/seo", {
				meta_title: formSubmit.meta_title,
				meta_description: formSubmit.meta_description,
				meta_keywords: formSubmit.meta_keywords,
				google_analytics: formSubmit.google_analytics,
				google_search_console: formSubmit.google_search_console,
				pagina_link: pagesSelect,
			});

			console.log(data);
		} catch (error) {
			console.log(error);
		}
	}

	const [value, setValue] = useState("1");

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<>
			<Breadcrumb page="Seo do E-commecer" />

			<Container>
				<div className="container-header">
					<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
						<Tabs
							value={value}
							onChange={handleChange}
							aria-label="basic tabs example"
						>
							<Tab label="Página inicial" value="1" />
							<Tab label="Produtos" value="2" />
							<Tab label="Categorias" value="3" />
							<Tab label="Contato" value="4" />
						</Tabs>
					</Box>
				</div>
			</Container>

			<Container>
				<div className="container-form">
					<Typography variant="h6" component="div">
						Página Inicial
					</Typography>
					<div className="form-input">
						<TextField
							size="small"
							fullWidth
							label="Meta title"
							id="fullWidth"
						/>
						<TextField
							size="small"
							fullWidth
							label="Meta Description"
							id="fullWidth"
						/>
						<TextField
							size="small"
							fullWidth
							label="Palavras chaves"
							id="fullWidth"
						/>
					<Button variant="contained">Cadastrar</Button>
					</div>
				</div>
			</Container>

			{/* <HeaderTemplateEditor>
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
			</ContainerPage> */}
		</>
	);
};
