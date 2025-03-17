import {
	Button,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Typography,
} from "@mui/material";
import { Container, ContainerLayouts } from "./styles";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { TemplateContext } from "../../../../../context/Template";
import { toast } from "react-toastify";
import { Opacity } from "@mui/icons-material";
import { ConteudoTemplateAdministrador } from "../Conteudo";
import { ThemeColorContext } from "../../../../../context/ThemeContext";

export const LayoutsAdm = () => {
	const dataLayouts = [
		{
			id: 1,
			name: "NeonX",
		},
		{
			id: 2,
			name: "Vortex",
		},
	];

	const { setTemplate, template } = useContext(TemplateContext);

	console.log(template)

	
		const { setTheme } = useContext(ThemeColorContext);
		const [navigationPage, setNavigationPage] = useState(template);

		function templateSelectd(thema) {
			setTemplate(thema.id);
			localStorage.setItem("_template", JSON.stringify(thema.id));
			toast.success(`Tema ${thema.name} selecionado com sucesso!`);

			setNavigationPage(thema.id);
		}

	return (
		<>
			<Container>
				{navigationPage !== template ? (
				<>
				{dataLayouts?.map((data) => (
					<Card 
						key={data.id}
						sx={{ maxWidth: 345 }}>
					<CardActionArea sx={{ width: "100%" }}>
						<CardMedia
							component="img"
							image="https://placehold.co/600x400"
							alt="Imagem"
						/>
					</CardActionArea>
					<CardContent
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							width: "100%",
						}}
					>
						<Typography variant="h6" component="div" sx={{ opacity: '.8' }}>
							{data.name}
						</Typography>
						<Button 
							variant="contained" 
							component='div' 
							sx={{ borderRadius: "16px" }}
							onClick={() => templateSelectd(data)}
						>
							Saiba mais
						</Button>
					</CardContent>
				</Card>
				))}
				</>

				) : (
					<>
					<Button 
							variant="contained" 
							component='div' 
							sx={{ borderRadius: "16px" }}
							onClick={() => setTemplate(0)}
						>
							Voltar
						</Button>
						<Button onClick={() => setTheme("black")}>
						Tema Preto
					</Button>
					<Button onClick={() => setTheme("green")}>
						Tema Verde
					</Button>
					<Button onClick={() => setTheme("purple")}>
						Teme Roxo
					</Button>
					<Button onClick={() => setTheme("blue")}>
						Tema Azul
					</Button>
					<Button onClick={() => setTheme("orange")}>
						Tema Laranja
					</Button>
					<Button onClick={() => setTheme("red")}>
						Tema Vermelho
					</Button>
					</>
				)}
			</Container>

			{template > 0 && (
				<ContainerLayouts>
					<ConteudoTemplateAdministrador />
				</ContainerLayouts>
			)}

		</>
	);
};
