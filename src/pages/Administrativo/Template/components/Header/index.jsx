import { useContext } from "react";
import { ButtonTemplate } from "../Button";
import { Container, ContainerButton, ContainerMenu } from "./styles";
import { ThemeColorContext } from "../../../../../context/ThemeContext";
import { Link } from "react-router-dom";

export const HeaderTemplateEditor = ({ children }) => {
	return (
		<>
			<Container>
				<ContainerMenu>
					<ContainerButton>{children}</ContainerButton>
					
				</ContainerMenu>
			</Container>
		</>
	);
};
