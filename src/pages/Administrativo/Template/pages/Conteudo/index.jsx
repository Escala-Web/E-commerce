import { useContext, useState } from "react";
import { ThemeColorContext } from "../../../../../context/ThemeContext";
import { ButtonTemplate } from "../../components/Button";
import { Content } from "../../components/Content";
import { HeaderTemplateEditor } from "../../components/Header";
import { Container, ContainerLink } from "./styles";
import { Link, useParams } from "react-router-dom";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { Box, Button, Tab, Tabs, Typography } from "@mui/material";
import { FaArrowLeft } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

export const ConteudoTemplateAdministrador = () => {
	const { setTheme, theme: tema } = useContext(ThemeColorContext);


	return (
		<>
			{/* <Breadcrumb page="Editor de Tema" /> */}
			<Container>
				<div className="container-menu">
					{/* <div className="container-sidebar">
						<Button variant="contained">
							<Link to='/administrativo/loja' className="link-voltar">
							<FaArrowLeft />

							Voltar</Link>
						</Button>

						<Box >
							<Box sx={{ display: "flex", gap: 2 }}>
								<Button
									variant={tema === 'black' ? "contained" : "outlined"}
									onClick={() => setTheme("black")}
								>
									Tema Preto
								</Button>
								<Button
									variant={tema === 'green' ? "contained" : "outlined"}
									onClick={() => setTheme("green")}
								>
									Tema Verde
								</Button>
								<Button
									variant={tema === 'purple' ? "contained" : "outlined"}
									onClick={() => setTheme("purple")}
								>
									Tema Roxo
								</Button>

								<Button
									variant={tema === 'blue' ? "contained" : "outlined"}
									onClick={() => setTheme("blue")}
								>
									Tema Azul
								</Button>

								<Button
									variant={tema === 'orange' ? "contained" : "outlined"}
									onClick={() => setTheme("orange")}
								>
									Tema Laranja
								</Button>
								<Button
									variant={tema === 'red' ? "contained" : "outlined"}
									onClick={() => setTheme("red")}
								>
									Tema Vermelho
								</Button>
							</Box>

							
						</Box>
					</div> */}

					{/* <HeaderTemplateEditor>
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
					<ContainerLink to={`/administrativo/${theme}/editor/create-page`}>
						Adicionar Pagina
					</ContainerLink>
				</HeaderTemplateEditor> */}
				</div>
			{/* <div className="content-template"> */}

			<Helmet>
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
			</Helmet>

			<Content />
			{/* </div> */}
			</Container>
		</>
	);
};
