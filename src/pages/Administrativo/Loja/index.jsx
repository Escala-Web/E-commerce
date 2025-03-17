import { useContext, useState } from "react";
import { CardSection } from "../../../components/CardSection";
import { CardThemes } from "../../../components/CardThemes/index.jsx";
import { ContainerBody } from "./styles.js";
import { TemplateContext } from "../../../context/Template.jsx";

import theme01 from "../assets/thema01.jpg";
import theme02 from "../assets/thema02.jpg";
import { Breadcrumb } from "../components/Breadcrumb/index.jsx";
import { Box, Tab, Tabs } from "@mui/material";
import { ContainerTheme } from "../../../components/CardThemes/styles.js";
import { Banner } from "../components/Banner/index.jsx";

export const LojaPage = () => {
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const themes = [
		{
			id: 1,
			name: "Template 01",
			image: theme01,
			link: "/loha-01",
		},
		{
			id: 2,
			name: "Template 02",
			image: theme02,
			link: "/loha-02",
		},
	];

	

	return (
		<>
			{/* <Breadcrumb page="Loja Virtual" /> */}
			<ContainerBody>
				<div style={{ width: "100%" }}>
					<ContainerTheme>
						<CardThemes data={themes} title="Templates Disponiveis" />
					</ContainerTheme>
				</div>
			</ContainerBody>
		</>
	);
};
