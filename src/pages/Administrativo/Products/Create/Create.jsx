import { Content } from "../../components/Content";
import {
	Aside,
	Container,
	ContainerModal,
	ContainerVariations,
	Formulario,
	FormularioRadio,
	MainContent,
} from "./styles";
import { FileManager } from "../../components/FileManager";
import { useContext, useEffect, useState } from "react";
import { Editor } from "primereact/editor";
import { FaPlusCircle } from "react-icons/fa";
import { ModalVariant } from "../Modal";
import { LuClipboardList } from "react-icons/lu";
import { MdOutlineColorLens } from "react-icons/md";
import { AutocompleteVarient } from "../AutocompleteVariant";
import {
	Badge,
	Button,
	Divider,
	IconButton,
	Switch,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
} from "@mui/material";
import { Categorie } from "../Categorie";
import { Breads } from "../Breads";
import { CardImage } from "../CardImage";
import { ProductContext } from "../../../../context/Product";
import { useVariation } from "../../../../hooks/Variants/useVariation";
import DeleteIcon from "@mui/icons-material/Delete";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { FileManagerContext } from "../../../../context/FileManager";
import { Link } from "react-router-dom";
import { producion } from "../../../../utils/producion";

export const CreatePageProduct = () => {
	const [formProduct, setFormProduct] = useState([]);
	const [variatExibir, setVarientExibir] = useState("");
	const [nameVariation, setNameVariation] = useState("");
	const [variationOption, setVarietionOption] = useState("");
	const [variationData, setVariationData] = useState([]);
	const [dataImagesSelect, setDataImagesSelect] = useState([]);
	const [indexImage, setIndexImage] = useState(true);

	const [dataVariationsValue, setDataVariatiosValue] = useState([]);

	const [open, setOpen] = useState(false);
	const [openVariation, setOpenVariation] = useState(false);

	const [isDiscount, setIsDiscount] = useState(false);

	function handleChange(event) {
		const { name, value } = event.target;
		setFormProduct((prevForm) => ({
			...prevForm,
			[name]: value,
			description: event.htmlValue,
		}));
	}

	function handleDescriptionChange(e) {
		setFormProduct((prevForm) => ({
			...prevForm,
			description: e.htmlValue,
		}));
	}

	const {
		findAllVariation,
		createVariations,
		findValueVariant,
		deleteVariant,
	} = useVariation();

	const { data: variation } = findAllVariation;

	function handleSubmitVariations(event) {
		event.preventDefault();

		createVariations.mutate({
			name: nameVariation,
		});
	}

	function handleDeleteVariation(id) {
		deleteVariant.mutate(id);
	}
	const { data: valueVariation } = findValueVariant(variatExibir);

	function handleOpen(item) {

		setVarientExibir(item.id_variant_attribute);
		setOpenVariation(true); 
	}

	const { pictures } = useContext(FileManagerContext);

	const { setFormData, Submit } = useContext(ProductContext);

	function handleSubmit(event) {
		event.preventDefault();

		setFormData((prevData) => ({
			...prevData,
			product: formProduct,
			variant: dataVariationsValue,
			images: dataImagesSelect,
			
		}));

		Submit();
	}



	useEffect(() => {
		
		if (pictures) {


		  const imagesSelected = pictures
			.filter((i) => i.id_image_product === variatExibir)
			.map((image) => ({
			  ...image,
			  url: producion(false) + image.file_path.split(".")[0] + "." + image.name.split(".")[1],
			  is_image: indexImage
			}));
	  
		  setDataImagesSelect(imagesSelected);
		}
	  }, [pictures, variatExibir, indexImage]); 

	  useEffect(() => {
        if (variation && variation.content && variation.content.length > 0) {
            setVarietionOption(variation.content[0].id_variant_attribute);
        }
    }, [variation]);
	  
	return (
		<>
			<form onSubmit={handleSubmit}>
				<Container>
					<MainContent>
						<Content title="Registrar imagens">
							<FileManager name="Gerenciador de media" />
							<CardImage />
						</Content>
						<Content title="Informações do produto">
							<Formulario>
								<div className="form_flex">
									<div className="form_group">
										<label>Nome do produto</label>
										<input
											name="name"
											placeholder="Nome do produto"
											type="text"
											onChange={handleChange}
											value={formProduct.name}
										/>
									</div>
									<div className="form_group">
										<label>Sku</label>
										<input
											name="sku"
											placeholder="Sku"
											type="text"
											onChange={handleChange}
											value={formProduct.sku}
										/>
									</div>
									<div className="form_group">
										<label>Estoque</label>
										<input
											name="stock"
											placeholder="Estoque"
											type="number"
											onChange={handleChange}
											value={formProduct.stock}
										/>
									</div>
								</div>

								<div className="form_group">
									<label>Descrição do produto</label>
									<div className="card">
										<Editor
											value={formProduct.description} // Garanta que a descrição está no estado
											onTextChange={handleDescriptionChange} // Atualiza a descrição
											name="description"
											style={{ height: "320px" }}
										/>
									</div>
								</div>
							</Formulario>
						</Content>

						<Content title="Preço do produto">
							<Formulario>
								<div className="form_group">
									<label>Preço</label>
									<input
										name="price"
										placeholder="Ex: R$ 29,99"
										onChange={handleChange}
										value={formProduct.price}
										type="text"
									/>
								</div>
								<div className="form_group">
									<label>Desconto?</label>
									<Switch onClick={() => setIsDiscount(!isDiscount)} />
								</div>
								{isDiscount && (
									<div className="form_group">
										<label>Valor de desconto</label>
										<input
											name="discount"
											placeholder="Ex: R$ 29,99"
											onChange={handleChange}
											value={formProduct.discount}
											type="text"
										/>
									</div>
								)}
							</Formulario>
						</Content>

						<Content title="Variações do produto">
							<Formulario>
								{variation?.content?.length > 0 ? (
									<div className="form_group">
										<ul className="list_variation">
											{variation?.content?.map((item) => {
												return (
													<li key={item.id_variant_attribute}>
														<div className="container_content">
															<p>{item.name}</p>
														</div>
														<div className="container_action">
															<IconButton
																onClick={() =>
																	handleDeleteVariation(
																		item.id_variant_attribute
																	)
																}
															>
																<Badge>
																	<DeleteIcon />
																</Badge>
															</IconButton>
															<IconButton onClick={() => handleOpen(item)}>
																<Badge>
																	<BorderColorIcon />
																</Badge>
															</IconButton>
														</div>
													</li>
												);
											})}
										</ul>
									</div>
								) : (
									<>
										<div className="form_group">
											<p>
												Seu produto tem diferentes opções como tamanho, cor ou
												material?
											</p>
											<p>Adicione sua variação aqui.</p>
										</div>
										<br />
									</>
								)}

								<button
									onClick={() => setOpen(true)}
									className="button"
									type="button"
								>
									<FaPlusCircle />
									<p>Adicionar variação</p>
								</button>
							</Formulario>
						</Content>
					</MainContent>
					<Aside>
						<Content title="Categoria do produto">
							<FormularioRadio>
								<Categorie />
							</FormularioRadio>
						</Content>
						<Content title="Marca do produto">
							<FormularioRadio>
								<Breads />
							</FormularioRadio>
						</Content>
					</Aside>
				</Container>

				<button>Salvar</button>

				<ModalVariant open={open} setOpen={setOpen}>
					<ContainerModal>
						<div className="header">
							<h3>Adicionar variação de produto</h3>
							<p>
								Você poderá gerenciar preço e estoque para esta opção de produto
								mais tarde.{" "}
							</p>
						</div>
						<div className="content">
							<Formulario>
								<form>
									<div className="form_flex">
										<div className="form_group">
											<label>Nome da variação</label>
											<input
												name="name"
												placeholder="Nome do produto"
												type="text"
												onChange={(event) =>
													setNameVariation(event.target.value)
												}
												value={nameVariation}
											/>
										</div>
										<div className="form_flex">
											<div className="form_group">
												<button onClick={handleSubmitVariations}>Cadastrar</button>
											</div>
											<div className="form_group">
												<button>Cancelar</button>
											</div>
										</div>
									</div>
								</form>

								<div className="form_flex" onSubmit={handleSubmit}>
									<div className="form_group">
										<label>Variações</label>
										<select
											onChange={(event) =>
												setVarietionOption(event.target.value)
											}
											name=""
											value={variationOption}
										>
											{variation?.content?.map((item) => (
												<option
													key={item.id_variant_attribute}
													value={item.id_variant_attribute}
												>
													{item.name}
												</option>
											))}
										</select>
									</div>

									<div className="form_group" style={{ marginBottom: "0" }}>
										<label>Exibição</label>
										<div className="form_flex">
											<div className="form_group">
												<button onClick={() => setVarientExibir("LIST")}>
													<LuClipboardList />
													<p>Lista</p>
												</button>
											</div>
											<div className="form_group">
												<button onClick={() => setVarientExibir("COLOR")}>
													<MdOutlineColorLens />
													<p>Cores</p>
												</button>
											</div>
										</div>
									</div>
								</div>

								<AutocompleteVarient
									setOpen={setOpen}
									varient={variatExibir}
									name={variationOption}
								/>
							</Formulario>
						</div>
					</ContainerModal>
				</ModalVariant>

				<ModalVariant open={openVariation} setOpen={setOpenVariation}>
					<ContainerModal>
						<div className="header">
							<h3>Variação {variationData.name}</h3>
							<Divider />
							<div className="container_header">
								{/* Texto de Introdução */}
								<p>Gerencie as opções e imagens das variações do produto.</p>

								{/* Tabela de Variações com Scroll */}
								<Divider />
								<div
									style={{
										maxHeight: "600px",
										overflowY: "auto",
										width: "100%",
									}}
								>
									<ContainerVariations>
										<Formulario>
											<div className="form_flex">
												<div className="form_group">
													<label>Selecione a variação</label>
													<select
														onChange={(e) => {
															const selectedValue =
																valueVariation?.content?.find(
																	(variation) =>
																		variation.id_variant_attribute_value ===
																		Number(e.target.value)
																);

															// Atualizando o estado com um array de objetos
															setDataVariatiosValue((prevState) => [
																...prevState, // Mantém os dados anteriores
																{
																	id_father: variatExibir,
																	name: selectedValue?.value, // Adiciona o nome da variação
																	id: selectedValue?.id_variant_attribute_value, // Adiciona o id da variação
																},
															]);
														}}
													>
														<option value="">Selecione uma opção</option>
														{valueVariation?.content?.map((value) => {

															return (
																<option
																	key={value.id_variant_attribute_value}
																	value={value.id_variant_attribute_value} // Usando o id da variação
																>
																	{value.value}
																</option>
															);
														})}
													</select>
												</div>
											</div>
										</Formulario>
									</ContainerVariations>

									<Table>
										<TableHead>
											<TableRow>
												<TableCell>Produto Inicial</TableCell>
												<TableCell>Opções Selecionadas</TableCell>
												<TableCell>Imagens</TableCell>
											</TableRow>
										</TableHead>

										<TableBody>
											{dataVariationsValue
												?.filter((i) => i.id_father === variatExibir)
												?.map((item) => {
													console.log(item);
													return (
														<TableRow key={item.id}>
															<TableCell>
															{dataImagesSelect.map((image) => (
																<input 
																	key={image.id}
																	type="radio"
																	name="image_main"
																	onChange={() => setIndexImage(image.id)}
																/>
																))}
																
															</TableCell>
															<TableCell>
																<span
																	className="variation-option-icon"
																	style={{
																		backgroundColor: item.name.toLowerCase(),
																	}}
																></span>

																<span>{item.name}</span>
															</TableCell>
															<TableCell
																sx={{
																	display: "flex",
																	alignItems: "center",
																	gap: ".4rem",
																	textDecoration: "none",
																}}
																component={Link}
																to={`?variation=1&image=${item.id_father}`}
															>
																<FileManager name="+" />

																{dataImagesSelect.map((image) => (
																	<div
																		key={image.id}
																		className="container_image"
																	>
																		<img src={image.url} alt={image.name} />
																	</div>
																))}
															</TableCell>
														</TableRow>
													);
												})}
										</TableBody>
									</Table>
								</div>
							</div>
						</div>
					</ContainerModal>
				</ModalVariant>
			</form>
		</>
	);
};
