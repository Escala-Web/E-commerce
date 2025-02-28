import { FaFile, FaFolder, FaFolderOpen, FaFolderPlus } from "react-icons/fa";
import { useFileManager } from "../../../../../hooks/useFileManager";
import { Container, SideBar } from "./styles";
import { CgMoreAlt } from "react-icons/cg";
import { useEffect, useState } from "react";

import { http } from "../../../../../config/http";
import { Typography } from "@mui/material";
import { useCreateFolder } from "../../../../../hooks/FileManager/Folder/useCreateFolder";
import { useFindAllFolder } from "../../../../../hooks/FileManager/Folder/useFindAllFolder";
import { CreateFolder } from "../CreateFolder";
import { ListFilders } from "../Folders";

export const Content = ({ isPage }) => {
	
	const [isAddFolder, setIsAddFolder] = useState(false);

	const { data: folders, isLoading } = useFindAllFolder({
		id: 1,
		is_trash: isPage == "arquivo" ? false : true,
	  });




	return (
		<>
			<SideBar>
				<Typography component="span" variant="h6" fontWeight="400">
					Home
				</Typography>
				<div>
					<input style={{ width: "24rem" }} type="text" />
				</div>

				<div style={{ cursor: "pointer" }}>
					<FaFolderPlus
						size={32}
						color="rgb(80, 175, 245)"
						onClick={() => setIsAddFolder((prev) => !prev)}
					/>
				</div>
			</SideBar>

			<Container>
			{isAddFolder && <CreateFolder setIsAddFolder={setIsAddFolder} />}

			<ListFilders isPage={isPage} data={folders} page={isPage}/>
			</Container>
		</>
	);













	// const [openSettingId, setOpenSettingId] = useState(null);
	// const [isOpenRename, setIsOpenRename] = useState(false);
	// const [folderExist, setFolderExist] = useState([]);
	// const [search, setSearch] = useState("");
	// const [nameFolder, setNameFolder] = useState("");
	// const [isOpenAddFolder, setIsOpenAddFolder] = useState(false);

	// const folders = listFoldersAndFiles?.data || [];

	// function toggleRename(folder) {
	// 	setIsOpenRename((prevRename) => !prevRename);
	// 	setFolderExist(folder);
	// }

	// async function blurName(folder, data) {
	// 	await rename(folder, data);
	// 	setFolderExist([]);
	// }

	// async function blurCreated(folder) {
	// 	await createdFolderAndFiles(folder);
	// 	setNameFolder("");
	// 	setIsOpenAddFolder(false);
	// }

	// function toggleOpenSetting(folderId) {
	// 	setOpenSettingId((prevId) => (prevId === folderId ? null : folderId));
	// }

	// function toggleFolder() {
	// 	setIsOpenAddFolder((prevAddFolder) => !prevAddFolder);
	// }

	// async function removerPermanent(id) {
	// 	await trashPermenant(id);
	// }

	// return (
	// 	<>
	// 		<SideBar>
	// 			<Typography component="span" variant="h6" fontWeight='400'>
	// 				Home
	// 			</Typography>
	// 			<div>
	// 				<input
	// 					style={{ width: "24rem" }}
	// 					type="text"
	// 					value={search}
	// 					onChange={(event) => setSearch(event.target.value)}
	// 				/>
	// 			</div>

	// 			<div style={{ cursor: "pointer" }}>
	// 				<FaFolderPlus
	// 					onClick={toggleFolder}
	// 					size={32}
	// 					color="rgb(80, 175, 245)"
	// 				/>
	// 			</div>
	// 		</SideBar>

	// 		<Container onClick={() => (openSettingId ? toggleOpenSetting() : "")}>
	// 			{isOpenAddFolder ? (
	// 				<div className="card">
	// 					<FaFolder size={100} color="#50aff5" />
	// 					<input
	// 						type="text"
	// 						value={nameFolder}
	// 						onChange={(event) => setNameFolder(event.target.value)}
	// 						onBlur={() => blurCreated(nameFolder)}
	// 					/>
	// 				</div>
	// 			) : (
	// 				""
	// 			)}

	// 			{listFoldersAndFiles.map((folder) => (
	// 				<>
	// 					<div className="card" key={folder.id}>
	// 						<div className="card-select"></div>
	// 						{folderExist.id !== folder.id ? (
	// 							<>
	// 								{folder.type === 'file' ? (
	// 								<>
	// 								{folder.file_type === "application/pdf" ?

	// 								<>
	// 									<a style={{zIndex: '9999999'}} target="_blank" href={`http://192.168.15.7/api-php${folder.file_path}`}>PDF</a>
	// 								</>
	// 								 :
	// 								<>
	// 								<img src={`http://192.168.15.7/api-php${folder.file_path}`}/>
	// 								<p>{folder.name}</p>

	// 								</>
	// 								}
	// 								</>

	// 								)
	// 								: (
	// 									<>
	// 									<FaFolder size={100} color="#50aff5" />
	// 									<p>{folder.name}</p>
	// 									</>
	// 								)}
	// 							</>
	// 						) : (
	// 							<>
	// 								<div className="card">
	// 									<FaFolderOpen size={100} color="#50aff5" />
	// 									<input
	// 										d
	// 										className="card-input"
	// 										value={folderExist.folder}
	// 										onChange={(event) =>
	// 											setFolderExist({
	// 												...folderExist,
	// 												folder: event.target.value,
	// 											})
	// 										}
	// 										onBlur={() => blurName(folderExist.folder, folder)}
	// 									/>
	// 								</div>
	// 							</>
	// 						)}

	// 						<div
	// 							className="setting"
	// 							onClick={() => toggleOpenSetting(folder.id)}
	// 						>
	// 							<CgMoreAlt size={26} color="#555" />
	// 						</div>

	// 						{openSettingId === folder.id && (
	// 							<div className="container-setting">
	// 								<ul onClick={toggleOpenSetting}>
	// 									<li onClick={() => toggleRename(folder)}>Renomear</li>
	// 									<li>Visualizar</li>
	// 									<li>Mover para...</li>

	// 										<li onClick={() => trash(folder)}>
	// 											Mover para Lixeira
	// 										</li>

	// 								</ul>
	// 							</div>
	// 						)}
	// 					</div>
	// 				</>
	// 			))}
	// 		</Container>
	// 		</>
	// 	);
};
// // <FaFolderOpen />
