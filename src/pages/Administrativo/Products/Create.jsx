import { useNavigate } from "react-router-dom";
import { Formulario } from "../components/Formulario";
import { ContainerPage } from "../components/Section";
import { HeaderTemplateEditor } from "../Template/components/Header";
import { ButtonTemplate } from "../Template/components/Button";

export const CreatePageProduct = () => {
	const navigate = useNavigate();

	const goCreateProduct = () => navigate("/administrativo/produtos/create");
	const goAllProduct = () => navigate("/administrativo/produtos");

	return (
		<>
			<HeaderTemplateEditor>
				<ButtonTemplate click={goAllProduct}>Meus Produtos</ButtonTemplate>
				<ButtonTemplate click={goCreateProduct}>Cadastrar</ButtonTemplate>
			</HeaderTemplateEditor>
			<ContainerPage>
				<Formulario />
			</ContainerPage>
		</>
	);
};
