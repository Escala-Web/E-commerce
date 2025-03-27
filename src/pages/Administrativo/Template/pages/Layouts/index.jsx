import {
	Button,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Typography,
} from "@mui/material";
import { Container, ContainerLayouts } from "./styles";
import { useContext, useState } from "react";
import { TemplateContext } from "../../../../../context/Template";
import { toast } from "react-toastify";
import { Opacity } from "@mui/icons-material";
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
				<Typography className="title" component='div' variant="h5">Layouts disponiveis</Typography>
	
				<div className="container">
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
							Selecionar
						</Button>
					</CardContent>
				</Card>
				))}
				</div>
			

				
	
			</Container>

			

		</>
	);
};
