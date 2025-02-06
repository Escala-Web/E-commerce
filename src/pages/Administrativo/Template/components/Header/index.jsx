import { useContext } from "react";
import { ButtonTemplate } from "../Button";
import { Container, ContainerButton, ContainerMenu } from "./styles";
import { ThemeColorContext } from "../../../../../context/ThemeContext";
import { Link } from "react-router-dom";

export const HeaderTemplateEditor = ({ children, page }) => {
	return (
		<>
			<Container>
				<ContainerMenu>
					{page ? <h2 style={{opacity: '0.8'}}>{page}</h2> : ''}
					<ContainerButton>{children}</ContainerButton>
				</ContainerMenu>
			</Container>
		</>
	);
};
