import { useContext, useState } from "react";
import { Container } from "./styles";
import { FileManagerContext } from "../../../../../context/FileManager";
import { CardActionArea, CardMedia } from "@mui/material";
import { producion } from "../../../../../utils/producion";
import { FaFolder } from "react-icons/fa";
import { Settings } from "../Settings";
import { https } from "../../../../../config/https"; // Certifique-se de importar isso
import { useSearchParams } from "react-router-dom";

export const CardFilesAndFolders = ({ data, setData }) => {
	const { folderHistory, nextFolder, prevFolder, handlePicture } =
		useContext(FileManagerContext);

	const [selectedFolder, setSelectedFolder] = useState(null);
	const [openSettingsIndex, setOpenSettingsIndex] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const url = producion(false);

	const handleSettingsClick = (index) => {
		setOpenSettingsIndex(openSettingsIndex === index ? null : index);
	};

	const [search] = useSearchParams();
	const page = search.get("arquivo");

	const listFolders = async (parentId, name) => {
		if (isLoading) return; // Evita chamadas duplicadas enquanto uma requisição já está em andamento

		setIsLoading(true);
		const token = JSON.parse(localStorage.getItem("userLogin"));

		try {
			const { data: folderData } = await https.post(
				"/media/get-content-folder",
				{
					parent_id: parentId,
					is_trash: false, // Certifique-se de passar o valor correto
				},
				{
					headers: {
						Authorization: `Bearer ${token[0].token}`,
					},
				}
			);

			setData({
				data: folderData.content, // Agora, os dados antigos serão substituídos corretamente
				name: name,
				id: parentId,
			});
		} catch (error) {
			console.error("Erro ao buscar as pastas:", error);
		} finally {
			setIsLoading(false);
		}
	};

	const toggleFilter = (folder) => {
		nextFolder(folder);
		setSelectedFolder(folder);
		listFolders(folder.id, folder.name);
	};

	return (
		<Container>
			{data
				?.filter((item) => item.is_trash === Number(page))
				?.map((f, index) => {
					const extention = f?.name?.split(".")[1];
					const image = f?.file_path?.split(".")[0];

					const imageId = search.get("image") || ""; // Evita null
					const variation = search.get("variation") === "1"; // Converte diretamente para booleano

					const imageA = {
						...f,
						variation,
						id_image_product: imageId ? Number(imageId) : "", // Evita NaN
					};

					return (
						<CardActionArea
							key={index}
							className="container"
							onClick={() =>
								f.type === "folder" ? toggleFilter(f) : handlePicture(imageA)
							}
						>
							<div className="container_image">
								<button
									className="container_setting"
									onClick={(event) => {
										event.stopPropagation(); // Impede a propagação do evento
										handleSettingsClick(index);
									}}
								>
									...
								</button>

								{f?.type === "folder" ? (
									<FaFolder
										className="container_folder"
										size="100%"
										color="#fdc071"
									/>
								) : (
									<CardMedia
										component="img"
										image={`${url}${image}.${extention}`}
										className="image"
									/>
								)}
								<p className="container_text">{f.name}</p>
							</div>
							{openSettingsIndex === index && (
								<div>
									<Settings
										isPage={page == "0" ? "arquivo" : "lixeira"}
										folder={f}
										setOpenSettingsIndex={setOpenSettingsIndex}
									/>
								</div>
							)}
						</CardActionArea>
					);
				})}
		</Container>
	);
};
