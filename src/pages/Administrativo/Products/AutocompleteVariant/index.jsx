import * as React from "react";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Box, Button } from "@mui/material";
import { Container } from "./styles";
import { Formulario } from "../Create/styles";
import { useVariation } from "../../../../hooks/Variants/useVariation";

// Função para traduzir as cores para o português
const translateColor = (color) => {
	const colorMap = {
		Red: "Vermelho",
		Green: "Verde",
		Blue: "Azul",
		Yellow: "Amarelo",
		Purple: "Roxo",
		Orange: "Laranja",
		Pink: "Rosa",
		Brown: "Marrom",
		Gray: "Cinza",
		Black: "Preto",
		White: "Branco",
		Cyan: "Ciano",
		Magenta: "Magenta",
		Lime: "Limão",
		Indigo: "Índigo",
		Violet: "Violeta",
		Turquoise: "Turquesa",
		Beige: "Bege",
		Maroon: "Bordo",
		Olive: "Oliva",
		Teal: "Verde-azulado",
		Navy: "Marinho",
		Silver: "Prata",
		Gold: "Ouro",
		Copper: "Cobre",
		Charcoal: "Carvão",
		Crimson: "Carmesim",
		Lavender: "Lavanda",
		Coral: "Coral",
		Aquamarine: "Aquamarine",
		Peach: "Pêssego",
	};
	return colorMap[color] || color;
};

export const AutocompleteVarient = ({ varient, setOpen, name }) => {
	const fixedOptions = [];
	const [value, setValue] = React.useState([]);
	const [productName, setProductName] = React.useState(""); // Adicionando um estado para o nome do produto
	const { createValue } = useVariation();

	const handleSubmit = (event) => {
		event.preventDefault();
	
		if (value.length === 0) return; // Não adiciona variação se estiver vazia
	
		const translatedColors = value.map((color) => translateColor(color));
	
		console.log(name)

		translatedColors.forEach((translatedColor) => {
			createValue.mutate({
				id_variant_attribute: Number(name), // Fixo para todas as cores
				value: translatedColor, // Cada cor traduzida individualmente
				viewer: varient // Fixo para todas as cores
			});
		});
	
		setOpen(false);
	};
	

	return (
		<Box sx={{ width: "100%" }}>
			<form onSubmit={handleSubmit}>
				<input type="hidden" value={name} name="name_variation" />

				{varient === "COLOR" ? (
					<Autocomplete
						multiple
						id="fixed-tags-demo"
						value={value}
						onChange={(event, newValue) => {
							setValue([
								...fixedOptions,
								...newValue.filter((option) => !fixedOptions.includes(option)),
							]);
						}}
						options={colors}
						getOptionLabel={(option) => translateColor(option)} 
						renderTags={(tagValue, getTagProps) =>
							tagValue.map((option, index) => {
								const { key, ...tagProps } = getTagProps({ index });
								return (
									<Container key={key}>
										<div className="container">
											<span
												style={{ backgroundColor: option.toLowerCase() }}
											></span>
										</div>
										<Chip
											label={translateColor(option)}
											{...tagProps}
											disabled={fixedOptions.includes(option)}
											sx={{
												margin: "5px",
												backgroundColor: "transparent",
												color: "#333",
											}}
										/>
									</Container>
								);
							})
						}
						renderInput={(params) => (
							<div>
								<label style={{ color: "#333", fontSize: "14px" }}>Cores</label>
								<TextField
									{...params}
									label="Cores Fixas"
									placeholder="Cores"
									fullWidth
									size="small"
									sx={{ border: "none" }}
								/>
							</div>
						)}
						style={{ marginTop: 20 }}
					/>
				) : (
					<Formulario>
						<div className="form_group">
							<label>Variantes da opção</label>
							<input
								name="name"
								placeholder="Nome do produto"
								type="text"
								value={productName}
								onChange={(event) => setProductName(event.target.value)}
							/>
						</div>
					</Formulario>
				)}
				<Button
					type="submit"
					sx={{ marginTop: "1rem", textTransform: "none" }}
					variant="contained"
				>
					Cadastrar Variação
				</Button>
			</form>
		</Box>
	);
};


const colors = [
	"Red",
	"Green",
	"Blue",
	"Yellow",
	"Purple",
	"Orange",
	"Pink",
	"Brown",
	"Gray",
	"Black",
	"White",
	"Cyan",
	"Magenta",
	"Lime",
	"Indigo",
	"Violet",
	"Turquoise",
	"Beige",
	"Maroon",
	"Olive",
	"Teal",
	"Navy",
	"Silver",
	"Gold",
	"Copper",
	"Charcoal",
	"Crimson",
	"Lavender",
	"Coral",
	"Aquamarine",
	"Peach",
];
