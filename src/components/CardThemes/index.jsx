import { useContext } from "react";
import {
	Card,
	CardBody,
	CardLink,
	ConatinerCard,
	ContainerTitle,
} from "./styles";
import { TemplateContext } from "../../context/Template";

export const CardThemes = ({ data, title }) => {

	const { setTemplate, template } = useContext(TemplateContext);

	function templateSelectd(theplate) {
		setTemplate(theplate.id)
		localStorage.setItem('_template', JSON.stringify(theplate.id));
	}

	console.log(template)

	return (
		<>
			<ContainerTitle>
				<h2>{title}</h2>
			</ContainerTitle>

			<ConatinerCard>
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
			</ConatinerCard>
		</>
	);
};
