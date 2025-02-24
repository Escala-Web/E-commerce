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

	function CustomTabPanel(props) {
		const { children, value, index, ...other } = props;

		return (
			<div
				role="tabpanel"
				hidden={value !== index}
				id={`simple-tabpanel-${index}`}
				aria-labelledby={`simple-tab-${index}`}
				{...other}
			>
				{value === index && <Box sx={{ p: 3 }}>{children}</Box>}
			</div>
		);
	}

	return (
		<>
			<Breadcrumb page="Loja Virtual" />
			<ContainerBody>
				<div className="container-menu-loja">
					<Box sx={{ width: "100%", marginTop: "-30px" }}>
						<Tabs value={value} onChange={handleChange} centered>
							<Tab label="Escolher template" />
							<Tab label="Banners" />
							<Tab label="Promoções" />
						</Tabs>
					</Box>
				</div>

				<div style={{ width: "92%" }}>
                <ContainerTheme>

					<CustomTabPanel value={value} index={0}>
						<CardThemes data={themes} title="Templates Disponiveis" />
					</CustomTabPanel>
					<CustomTabPanel value={value} index={1}>
						Item Two
					</CustomTabPanel>
					<CustomTabPanel value={value} index={2}>
						Item Three
					</CustomTabPanel>
                </ContainerTheme>
				</div>
				{/* <CardSection w='90%'>

                    <CardThemes data={themes} title='Themas Disponiveis'/>

                </CardSection> */}
			</ContainerBody>
		</>
	);
};
