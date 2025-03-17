import { useContext } from "react";
import {
	CardBody,
	CardLink,
	ConatinerCard,
	ContainerTheme,
	ContainerTitle,
} from "./styles";
import { TemplateContext } from "../../context/Template";
import { Button, Card, CardActionArea, CardMedia, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const CardThemes = ({ data, title }) => {
	const { setTemplate, template } = useContext(TemplateContext);
	const navigate = useNavigate();

	function templateSelectd(thema) {
		setTemplate(thema.id);
		localStorage.setItem("_template", JSON.stringify(thema.id));
		console.log(thema)
		navigate(`/administrativo/template`);
	}

	return (
		<>
	
				<ContainerTitle>
					<h2>{title}</h2>
				</ContainerTitle>

				<div className="container-card">
					{data?.map((d) => (
						<Card className="card-body" key={d.id}>
							<CardActionArea>
								<CardMedia component="img" height="200" image={d.image} />
								<div className="card-button">
									<Typography variant="h6" component='div'>{d.name}</Typography>
									<Button variant="contained" onClick={() => templateSelectd(d)}>Adicionar</Button>
								</div>
							</CardActionArea>
						</Card>
					))}
				</div>
			

			{/* <ConatinerCard>
				{data.map((the) => {
					return (
						<Card key={the.id}>
							<img src={the.image} title={the.name} />
							<CardBody>
								<p>{the.name}</p>
								<CardLink
									onClick={() => templateSelectd(the)}
									to={`/administrativo/${the.id}/editor`}
								>
									Adicionar
								</CardLink>
							</CardBody>
						</Card>
					);
				})}
			</ConatinerCard> */}
		</>
	);
};
