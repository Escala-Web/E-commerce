import { useContext, useState } from "react";
import { Content } from "../../components/Content";
import { Form } from "../../components/Form";
import { Aside, Container, MainContent } from "./styles";
import "react-quill/dist/quill.snow.css";
import "./styles.css";
import { FileManager } from "../../components/FileManager";
import {
	Box,
	Button,
	Dialog,
	DialogActions,
	DialogTitle,
	IconButton,
	Stack,
	Switch,
	TextField,
	Typography,
} from "@mui/material";
import { Editor } from "primereact/editor";
import { Categorie } from "../Categorie";
import { Breads } from "../Breads";
import { ProductContext } from "../../../../context/Product";
import { FileManagerContext } from "../../../../context/FileManager";
import { producion } from "../../../../utils/producion";
import { RiCloseCircleFill } from "react-icons/ri";
import { Varients } from "../Variants/List";
import { useFindAllVariations } from "../../../../hooks/Variants/useFindAllVariant";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useDeleteVariant } from "../../../../hooks/Variants/useDeleteVariant";
import { EditValue } from "../Variants/EditValue";

export const CreatePageProduct = () => {
	
	const { formData, setFormData, handleChange, Submit } = useContext(ProductContext);

	const { data: variants } = useFindAllVariations();
	const { mutate: deleteVariant } = useDeleteVariant();

	const [isOpenVariationValue, setIsOpenVariationValue] = useState(false);

	const [isOpenDeleteVariant, setIsOpenDeleteVariant] = useState(false);
	const [idVariant, setIdVariant] = useState([]);

	function handleDelete() {
		deleteVariant({
			id: idVariant.id,
		});
		setIsOpenDeleteVariant(false);
	}

	function handleOpenDelete({ name, id_variant_attribute }) {
		setIdVariant({
			id: id_variant_attribute,
			name: name,
		});
		setIsOpenDeleteVariant(true);
	}

	const { pictures, handleRemovePicture } = useContext(FileManagerContext);
	const url = producion(false);

	return (
		<>
			<form onSubmit={Submit}>
				<Container>
					<MainContent>
						<Content title="Imagens e Vídeos">
							<Form>
								<FileManager name="Adicionar imagem" />
							</Form>
							{formData.variations.length == 0 && (

							<div className="container">
								{pictures.map((img) => {
									const image = img.file_path.split(".")[0];
									const extention = img.name.split(".")[1];

									return (
										<div key={img.id} className="container_card_image">
											<img src={`${url}${image}.${extention}`} alt={img.name} />
											<RiCloseCircleFill
												onClick={() => handleRemovePicture(img)}
											/>
										</div>
									);
								})}
							</div>
							)}
						</Content>

						<Content title="Informação do Produto">
							<Stack direction="column">
								<Stack direction="row" spacing={6}>
									<TextField
										id="standard-multiline-flexible"
										label="Nome do Produto"
										multiline
										maxRows={4}
										fullWidth
										variant="standard"
										name="name"
										value={formData.name}
										onChange={handleChange}
									/>
									{formData.variations.length == 0 && (
										<>
											<TextField
											id="standard-multiline-flexible"
											label="SKU"
											multiline
											maxRows={4}
											sx={{ width: "35%" }}
											variant="standard"
											name="sku"
											value={formData.sku}
											onChange={handleChange}
										/>
										</>
									)}
							
								</Stack>
								<Stack sx={{ marginTop: 4 }}>
									<Editor
										name="description"
										value={formData.description} // Liga o valor ao estado
										onChange={handleChange} // Atualiza o estado ao alterar o texto
										style={{ height: "320px", color: "#333", border: "none" }}
									/>
								</Stack>
							</Stack>
						</Content>
						
						{formData.variations.length == 0 && (
						<Content title="Preços">
							<Stack>
								<TextField
									id="standard-multiline-flexible"
									label="Valor do Produto"
									multiline
									maxRows={4}
									fullWidth
									variant="standard"
									name="price"
									value={formData.price}
									onChange={handleChange}
								/>
							</Stack>
						</Content>
						)}

						<Content title="Opções do Produto">
							<Stack
								direction="row"
								display="flex"
								justifyContent="space-between"
								alignItems="center"
							>
								<Typography variant="body1" component="span">
									Seu produto tem diferentes opções como tamanho, cor ou
									material?
								</Typography>

								<Varients />
							</Stack>

							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									// justifyContent: 'space-bet'
									marginTop: 2,
									gap: 2,
								}}
							>
								<div className="container_variants_values">
									{variants?.content?.map((vari) => (
										<div
											key={vari.id_variant_attribute}
											className="container_variant"
										>
											<Typography component="p" variant="body1">
												{vari.name}
											</Typography>
											<div>
												<IconButton color="primary" variant="dot">
													<EditIcon />
												</IconButton>
												<IconButton
													color="red"
													variant="dot"
													onClick={() => handleOpenDelete(vari)}
												>
													<DeleteIcon />
												</IconButton>
											</div>
										</div>
									))}
								</div>
							</Box>

							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									marginTop: 2,
									gap: 2,
								}}
							>
								<Switch
									checked={isOpenVariationValue}
									onChange={() =>
										setIsOpenVariationValue(!isOpenVariationValue)
									}
									inputProps={{ "aria-label": "controlled" }}
								/>
								<Typography variant="body1">
									Gerenciar preços e estoque para cada variante de produto
								</Typography>
							</Box>
						</Content>

						{isOpenVariationValue && (
							<Content title="Gerenciar variantes">
								<EditValue />
							</Content>
						)}
					</MainContent>
					<Aside>
						<Content title="Categorias">
							<Categorie
								formData={formData}
								setFormData={setFormData}
								handleChange={handleChange}
							/>
						</Content>
						<Content title="Marca">
							<Breads />
						</Content>
					</Aside>
				</Container>
				<Button
					type="submit"
					sx={{
						marginTop: 3,
					}}
					variant="contained"
				>
					Salvar
				</Button>
			</form>

			<Dialog
				open={isOpenDeleteVariant}
				onClose={() => setIsOpenDeleteVariant(false)}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">
					{"Você deseja deletar a variação?"}
				</DialogTitle>

				<DialogActions
					sx={{
						display: "flex",
						justifyContent: "start",
						alignContent: "center",
						padding: ".6rem 1rem",
					}}
				>
					<Button onClick={() => setIsOpenDeleteVariant(false)}>
						Cancelar
					</Button>
					<Button onClick={handleDelete} autoFocus>
						Confirmar
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};
