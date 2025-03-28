import { FaFolderPlus } from "react-icons/fa";
import { Container, SideBar } from "./styles";
import { useEffect, useState } from "react";
import { Box, Divider, TextField, Typography } from "@mui/material";
import { useFindAllFolder } from "../../../../../hooks/FileManager/Folder/useFindAllFolder";
import { CreateFolder } from "../CreateFolder";
import { ListFilders } from "../Folders";
import { UploadsOfFiles } from "../CreateFile";
import { useSearchParams } from "react-router-dom";

export const Content = ({ isPage, id }) => {
	const [isAddFolder, setIsAddFolder] = useState(false);
	const [isUploadsFiles, setIsUploadsFiles] = useState(true);

	const [search] = useSearchParams();
	const page = search.get("arquivo");

	const [idFoldersAndFiles, setIdFoldersAndFiles] = useState([]);

	const { data: folders } = useFindAllFolder({
		id: idFoldersAndFiles.id ? idFoldersAndFiles.id : 1,
		is_trash: page === "0" ? false : true,
	});

	const [foldersAndFiles, setFoldersAndFiles] = useState([]);

	useEffect(() => {
		setFoldersAndFiles([]);

		if (folders?.content) {
			const updatedFolders = folders.content.map((fol) => ({
				...fol,
				is_trash: page === "1" ? 1 : 0,
			}));

			setFoldersAndFiles(updatedFolders);
		}
	}, [folders, page]);

	return (
		<>
			<SideBar>
				<TextField
					id="outlined-search"
					label="O que você procura?"
					type="search"
					size="small"
					sx={{ width: "50%" }}
				/>

				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						gap: "1rem",
						cursor: "pointer",
					}}
				>
					{page === "0" && (
						<FaFolderPlus
							size={32}
							color="#000000DE"
							onClick={() => setIsAddFolder((prev) => !prev)}
							style={{ opacity: ".8" }}
						/>
					)}
				</Box>
			</SideBar>

			<Container>
				<div className="container_add_folders">
					{isAddFolder && (
						<CreateFolder
							setIsAddFolder={setIsAddFolder}
							folder={idFoldersAndFiles}
						/>
					)}
					<ListFilders
						data={foldersAndFiles}
						setData={setIdFoldersAndFiles}
						isPage={isPage}
					/>
					{isUploadsFiles && (
						<UploadsOfFiles
							setIsUploadsFiles={setIsUploadsFiles}
							folder={idFoldersAndFiles}
						/>
					)}
				</div>
				
			</Container>
		</>
	);
};
