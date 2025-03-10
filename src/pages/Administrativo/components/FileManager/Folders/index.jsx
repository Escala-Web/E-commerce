import { FaFolder } from "react-icons/fa";
import { Container } from "./styles";
import { useContext, useState, useEffect } from "react";
import { Button, Divider, Typography } from "@mui/material";
import { CgMoreAlt } from "react-icons/cg";
import { Settings } from "../Settings";
import { producion } from "../../../../../utils/producion";
import { https } from "../../../../../config/https";
import { FileManagerContext } from "../../../../../context/FileManager";
import { RiCloseCircleFill } from "react-icons/ri";

export const ListFilders = ({ data, isPage, setData }) => {
	const [openSettingsIndex, setOpenSettingsIndex] = useState(null);
	const [selectedFolder, setSelectedFolder] = useState(null);
	const url = producion(false);

	// Acessando o contexto para gerenciar o histórico de navegação
	const { folderHistory, nextFolder, prevFolder } =
		useContext(FileManagerContext);
	const { handlePicture, pictures, handleRemovePicture } =
		useContext(FileManagerContext);

	const toggleFilter = (folder) => {
		// Adiciona a pasta ao histórico antes de carregar o conteúdo
		nextFolder(folder);
		setSelectedFolder(folder);
		listFolders(folder.id, folder.name);
	};

	// Função para carregar o conteúdo da pasta
	const listFolders = async (parentId, name) => {
		const token = JSON.parse(localStorage.getItem("userLogin"));

		try {
			const { data: folderData } = await https.post(
				"/media/get-content-folder",
				{
					parent_id: parentId,
					is_trash: isPage,
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
		if (!selectedFolder) {
			setData({
				data: data?.content,
				name: data?.name,
				id: data?.id,
			});
		}
	}, [data, selectedFolder, setData]);

	// Função para alternar a visibilidade do painel de configurações
	const handleSettingsClick = (index) => {
		setOpenSettingsIndex(openSettingsIndex === index ? null : index);
	};

	return (
		<Container>
			{folderHistory.length > 1 && (
				<div className="container_button" onClick={handleBack}>
					Voltar
				</div>
			)}

			<div className="container">
				{data?.content?.map((folder, index) => (
					<div className="card" key={folder.id || index}>
						<div className="container_card">
							<Button
								sx={{
									zIndex: "999",
									backgroundColor: "transparent",
									border: "1px solid #ccc",
								}}
								className="container_card_icon"
								id={folder.id}
								onClick={() =>
									folder.type === "folder"
										? toggleFilter(folder)
										: handlePicture(folder)
								}
							>
								{folder.file_type === "image/png" ||
								folder.file_type === "image/jpeg" ? (
									<img
										src={`${url}${folder.file_path}`}
										alt="Imagem"
										id={folder.id}
									/>
								) : (
									<FaFolder size={90} color="#50aff5" id={folder.id} />
								)}
							</Button>

							<Typography variant="body1" component="div">
								{folder.name}
							</Typography>
						</div>

						<Typography
							className="settings"
							variant="body2"
							sx={{ color: "text.secondary" }}
							onClick={() => handleSettingsClick(index)}
						>
							<CgMoreAlt size={26} />
						</Typography>

						{openSettingsIndex === index && (
							<Settings
								isPage={isPage === "arquivo" ? "arquivo" : "lixeira"}
								folder={folder}
								setOpenSettingsIndex={setOpenSettingsIndex}
							/>
						)}
					</div>
				))}
			</div>

			{pictures.length > 0 && (
				<>
					<Divider />

					<p variant="h5">Imagens selacionadas</p>
					<div className="container">
						{pictures.map((img) => {
							const image = img.file_path.split(".")[0];
							const extention = img.name.split(".")[1];

							return (
								<div key={img.id} className="container_card_image">
									<img src={`${url}${image}.${extention}`} alt={img.name} />
									<RiCloseCircleFill onClick={() => handleRemovePicture(img)} />
								</div>
							);
						})}
					</div>

					<button type="button">Adicionar</button>
				</>
			)}
		</Container>
	);
};
