import { useNavigate } from "react-router-dom";
import { Formulario } from "../components/Formulario";
import { ContainerPage } from "../components/Section";
import { ButtonTemplate } from "../Template/components/Button";
import { HeaderTemplateEditor } from "../Template/components/Header";
import { Helmet, HelmetProvider } from "react-helmet-async";

export const Products = () => {

	const navigate = useNavigate();

	const goCreateProduct = () => navigate('/administrativo/produtos/create');
	const goAllProduct = () => navigate('/administrativo/produtos');

	return (
		<>
	
			<HeaderTemplateEditor page='Produtos'>
				<ButtonTemplate click={goAllProduct}>Meus Produtos</ButtonTemplate>
				<ButtonTemplate click={goCreateProduct}>Cadastrar</ButtonTemplate>
			</HeaderTemplateEditor>
			<ContainerPage>
				Não há produtos
			</ContainerPage>
		</>
	);
};
