import { useNavigate } from "react-router-dom";
import { Formulario } from "../components/Formulario";
import { ContainerPage, ContainerPageSectionBody } from "../components/Section";
import { ButtonTemplate } from "../Template/components/Button";
import { HeaderTemplateEditor } from "../Template/components/Header";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ContainerAction, ContainerActionDelete, ContainerActionEdit, StyledTable, StyledTd, StyledTh, StyledTr } from "../Category/styles";
import { MdEditSquare } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";

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
			<br/>
			<br/>
			<ContainerPageSectionBody>
				<StyledTable>
									<thead>
										<tr>
											<StyledTh>ID</StyledTh>
											<StyledTh>Categoria</StyledTh>
											<StyledTh>Descrição</StyledTh>
											<StyledTh style={{ textAlign: "center" }}>
												Sub categorias
											</StyledTh>
											<StyledTh style={{ textAlign: "center" }}>Ação</StyledTh>
										</tr>
									</thead>
									<tbody>
										
											<StyledTr>
												<StyledTd>1</StyledTd>
												<StyledTd>Titulo</StyledTd>
												<StyledTd>Uma descricao</StyledTd>
												<StyledTd>
													<ContainerActionEdit
													
													>
														Ver todas
													</ContainerActionEdit>
												</StyledTd>
												<StyledTd>
													<ContainerAction>
														<ContainerActionEdit>
															<MdEditSquare size={20} color="#fff" />
														</ContainerActionEdit>
														<ContainerActionDelete
															
														>
															<FaTrashAlt size={20} color="#fff" />
														</ContainerActionDelete>
													</ContainerAction>
												</StyledTd>
											</StyledTr>
										
									</tbody>
								</StyledTable>
			</ContainerPageSectionBody>
		</>
	);
};
