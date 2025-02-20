import {
	FaFolder,
	FaFolderOpen,
	FaFolderPlus,
} from "react-icons/fa";
import { useFileManager } from "../../../../../hooks/useFileManager";
import { Container, SideBar } from "./styles";
import { CgMoreAlt } from "react-icons/cg";
import { useEffect, useState } from "react";

import { http } from "../../../../../config/http";

export const Folders = ({ filter }) => {
	const {
		listFoldersAndFiles,
		trash,
		rename,
		createdFolderAndFiles,
		trashPermenant,
	} = useFileManager();
	const [openSettingId, setOpenSettingId] = useState(null);
	const [isOpenRename, setIsOpenRename] = useState(false);
	const [folderExist, setFolderExist] = useState([]);
	const [foldersData, setFoldersData] = useState([]);
	const [search, setSearch] = useState("");
	const [nameFolder, setNameFolder] = useState("");
	const [isOpenAddFolder, setIsOpenAddFolder] = useState(false);

	const folders = listFoldersAndFiles?.data || [];

	function toggleRename(folder) {
		setIsOpenRename((prevRename) => !prevRename);
		setFolderExist(folder);
	}

	async function blurName(folder, data) {
		await rename(folder, data);
		setFolderExist([]);
	}

	async function blurCreated(folder) {
		await createdFolderAndFiles(folder);
		setNameFolder("");
		setIsOpenAddFolder(false);
	}

	async function findAllFolders() {
		try {
		  const { data } = await http.get("/folder");
		  
		  const filterSearch = data.filter((folder) =>
			folder.folder.toLowerCase().includes(search.toLowerCase())
		);
		
		setFoldersData(filterSearch);
		
		} catch (error) {
		  console.log(error);
		}
	  }
	  

	function toggleOpenSetting(folderId) {
		setOpenSettingId((prevId) => (prevId === folderId ? null : folderId));
	}

	function toggleFolder() {
		setIsOpenAddFolder((prevAddFolder) => !prevAddFolder);
	}

	async function removerPermanent(id) {
		await trashPermenant(id);
	}

	useEffect(() => {
		findAllFolders();
	}, [search]);

	


	return (
		<>
			<SideBar>
				<div>Caminhos das Pasta</div>
				<div>
					<input
						style={{ width: "24rem" }}
						type="text"
						value={search}
						onChange={(event) => setSearch(event.target.value)}
					/>
				</div>

				<div style={{ cursor: "pointer" }}>
					<FaFolderPlus
						onClick={toggleFolder}
						size={32}
						color="rgb(80, 175, 245)"
					/>
				</div>
			</SideBar>

			<Container onClick={() => (openSettingId ? toggleOpenSetting() : "")}>
		
				{isOpenAddFolder ? (
					<div className="card">
						<FaFolder size={100} color="#50aff5" />
						<input
							type="text"
							value={nameFolder}
							onChange={(event) => setNameFolder(event.target.value)}
							onBlur={() => blurCreated(nameFolder)}
						/>
					</div>
				) : (
					""
				)}

				
					{folders
				
							.filter((filt) => filt.status === filter)
							.map((folder) => (
								<>
									<div className="card" key={folder.id}>
										{folderExist.id !== folder.id ? (
											<>
												<FaFolder size={100} color="#50aff5" />
												<p>{folder.folder}</p>
											</>
										) : (
											<>
												<div className="card">
													<FaFolderOpen size={100} color="#50aff5" />
													<input
														d
														className="card-input"
														value={folderExist.folder}
														onChange={(event) =>
															setFolderExist({
																...folderExist,
																folder: event.target.value,
															})
														}
														onBlur={() => blurName(folderExist.folder, folder)}
													/>
												</div>
											</>
										)}

										<div
											className="setting"
											onClick={() => toggleOpenSetting(folder.id)}
										>
											<CgMoreAlt size={26} color="#555" />
										</div>

										{openSettingId === folder.id && (
											<div className="container-setting">
												<ul onClick={toggleOpenSetting}>
													<li onClick={() => toggleRename(folder)}>Renomear</li>
													<li>Visualizar</li>
													<li>Mover para...</li>
													{folder.status === 1 ? (
														<li onClick={() => trash(folder, 0)}>
															Mover para Lixeira
														</li>
													) : (
														<>
															<li onClick={() => trash(folder, 1)}>
																Restaurar
															</li>
															<li onClick={() => removerPermanent(folder.id)}>
																Excluir
															</li>
														</>
													)}
												</ul>
											</div>
										)}
									</div>
								</>
							))}
			</Container>
		</>
	);
};
// <FaFolderOpen />
