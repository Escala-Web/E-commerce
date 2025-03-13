import { Container, ContainerCard } from "./styles";
import { useContext, useState, useEffect } from "react";
import { Button, Typography } from "@mui/material";
import { producion } from "../../../../../utils/producion";
import { https } from "../../../../../config/https";
import { FileManagerContext } from "../../../../../context/FileManager";
import { RiCloseCircleFill } from "react-icons/ri";
import { CardFilesAndFolders } from "../CardImages";
import { useSearchParams } from "react-router-dom";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";


export const ListFilders = ({ data, isPage, setData }) => {
	const [openSettingsIndex, setOpenSettingsIndex] = useState(null);
	const [selectedFolder, setSelectedFolder] = useState(null);
	const [isFirstLoad, setIsFirstLoad] = useState(true); // Estado para evitar duplicação
	const url = producion(false);

	// console.log(data)

	const {
		folderHistory,
		prevFolder,
		pictures,
		handleRemovePicture,
	} = useContext(FileManagerContext);



	const [search] = useSearchParams();
	const page = search.get("arquivo");

	// Função para carregar o conteúdo da pasta
	const listFolders = async (parentId, name) => {
		const token = JSON.parse(localStorage.getItem("userLogin"));

		try {
			const { data: folderData } = await https.post(
				"/media/get-content-folder",
				{
					parent_id: parentId,
					is_trash: page === "0" ? true : false,
				},
				{
					headers: {
						Authorization: `Bearer ${token[0].token}`,
					},
				}
			);

			setData({
				data: folderData.content,
				name: name,
				id: parentId,
			});
		} catch (error) {
			console.error("Erro ao buscar as pastas:", error);
		}
	};

	const handleBack = () => {
		prevFolder();
		const previousFolder = folderHistory[folderHistory.length - 2];
		if (previousFolder) {
			setSelectedFolder(previousFolder);
			listFolders(previousFolder.id, previousFolder.name);
		}
	};

	useEffect(() => {
		if (isFirstLoad && data) {
			setData({
				data: data,
				name: data?.name,
				id: data?.id,
			});
			setIsFirstLoad(false); // Evita novas chamadas no futuro
		}
	}, [data, selectedFolder, setData, isFirstLoad]);

	

	return (
		<Container >

			{folderHistory.length > 1 && (
				<div className="container_button">
					<div className="back" onClick={handleBack}>
					<Typography variant='body1'><MdKeyboardDoubleArrowLeft size={20}/></Typography>
						
					</div>
					{pictures.length > 0 && (
						<div className="images">
						<Typography variant='body1'>Imagens Selecionadas</Typography>
					</div>
					)}

				</div>
			)}
			<ContainerCard display={pictures.length > 0 ? 'flex' : 'block'}>
				<div className="container cardsss">
					<CardFilesAndFolders data={data} setData={setData} />
				</div>

				<div className="container_add_files">
					{pictures.length > 0 && (
						<>
							<div className="card_files">
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

							<div className="container_b">
								<Button variant='contained' type="button">Adicionar</Button>
							</div>
						</>
					)}
				</div>
			</ContainerCard>
		</Container>
	);
};
