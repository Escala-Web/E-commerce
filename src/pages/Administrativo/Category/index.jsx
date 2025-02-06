import { Link, useNavigate } from "react-router-dom";
import { ButtonTemplate } from "../Template/components/Button";
import { HeaderTemplateEditor } from "../Template/components/Header";
import { ContainerPageSectionBody } from "../components/Section";
import {
	ContainerAction,
	ContainerActionDelete,
	ContainerActionEdit,
	ContainerModal,
	ContainerModalSection,
	StyledTable,
	StyledTd,
	StyledTh,
	StyledTr,
} from "./styles";
import { https } from "../../../config/https";
import { useContext, useEffect, useState } from "react";
import { MdEditSquare } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import { UpdateCategory } from "./Modals/Update";
import { AuthContext } from "../../../context/Auth";
import { SubCategory } from "./Modals/SubCategory";

export const CategoryPageAdm = () => {
	const navigate = useNavigate();
	const goCreateProduct = () => navigate("/administrativo/categoria/create");
	const goAllProduct = () => navigate("/administrativo/categoria");

	const [datas, setDatas] = useState([]);
	const [isEditActive, setIsEditActive] = useState(false);
	const [isActiveModal, setIsActiveModal] = useState(false);
	const [isDelete, setIsDelete] = useState(false);
	const [dataEdit, setDataEdit] = useState([]);
	const [dataModal, setDataModal] = useState([]);

	function toggleEdit(edit) {
		setIsEditActive((prevEdit) => !prevEdit);
		setDataEdit(edit);
	}

	function toggleModal(modal) {
		setIsActiveModal((prevModal) => !prevModal);
		setDataModal(modal);
	}

	async function findAllCategories() {
		try {
			const { data } = await https.get("/categories/get-parents");
			setDatas(data);
			console.log(data);
		} catch (error) {
			console.log(error);
		}
	}

	const { login } = useContext(AuthContext);

	async function deleteCategory(id) {
		try {
			const { data } = await https.delete("/categories/delete", {
				data: { id_category: Number(id) },
				headers: {
					Authorization: `Bearer ${login[0].token}`,
				},
			});
			setIsDelete(true);
			console.log(data);
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		if (isDelete) {
			findAllCategories();
		}
	}, [isDelete, findAllCategories]);

	useEffect(() => {
		findAllCategories();
	}, []);

	return (
		<>
			<HeaderTemplateEditor page="Categorias">
				<ButtonTemplate click={goAllProduct}>Minhas Categorias</ButtonTemplate>
				<ButtonTemplate click={goCreateProduct}>Cadastrar</ButtonTemplate>
			</HeaderTemplateEditor>
			<br />
			<br />
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
						{(datas?.content || []).map((d) => (
							<StyledTr key={d.id_category}>
								<StyledTd>{d.id_category}</StyledTd>
								<StyledTd>{d.name}</StyledTd>
								<StyledTd>{d.description}</StyledTd>
								<StyledTd>
									<ContainerActionEdit
										onClick={() => toggleModal(d.id_category)}
									>
										Ver todas
									</ContainerActionEdit>
								</StyledTd>
								<StyledTd>
									<ContainerAction>
										<ContainerActionEdit onClick={() => toggleEdit(d)}>
											<MdEditSquare size={20} color="#fff" />
										</ContainerActionEdit>
										<ContainerActionDelete
											onClick={() => deleteCategory(d.id_category)}
										>
											<FaTrashAlt size={20} color="#fff" />
										</ContainerActionDelete>
									</ContainerAction>
								</StyledTd>
							</StyledTr>
						))}
					</tbody>
				</StyledTable>
			</ContainerPageSectionBody>

			{isEditActive ? (
				<ContainerModal onClick={toggleEdit}>
					<ContainerModalSection onClick={(e) => e.stopPropagation()}>
						<UpdateCategory data={dataEdit} />
					</ContainerModalSection>
				</ContainerModal>
			) : (
				""
			)}
			{isActiveModal ? (
				<ContainerModal onClick={toggleModal}>
					<ContainerModalSection onClick={(e) => e.stopPropagation()}>
						<SubCategory data={dataModal} />
					</ContainerModalSection>
				</ContainerModal>
			) : (
				""
			)}
		</>
	);
};
