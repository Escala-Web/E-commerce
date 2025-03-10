import { FaFolderPlus } from "react-icons/fa";
import { Container, SideBar } from "./styles";
import { useState } from "react";

import { Box, Typography } from "@mui/material";
import { useFindAllFolder } from "../../../../../hooks/FileManager/Folder/useFindAllFolder";
import { CreateFolder } from "../CreateFolder";
import { ListFilders } from "../Folders";
import { UploadsOfFiles } from "../CreateFile";
import { AiFillFileAdd } from "react-icons/ai";

export const Content = ({ isPage }) => {
	
	const [isAddFolder, setIsAddFolder] = useState(false);
	const [isUploadsFiles, setIsUploadsFiles] = useState(false);

	const [idFoldersAndFiles, setIdFoldersAndFiles] = useState([]);

	const { data: folders, isLoading } = useFindAllFolder({
		id: idFoldersAndFiles.id ? idFoldersAndFiles.id : 1,
		is_trash: isPage == "arquivo" ? false : true,
	  });


	return (
		<>
			<SideBar>
				<Typography component="span" variant="h6" fontWeight="400">
					{idFoldersAndFiles.name ? idFoldersAndFiles.name : 'Home'}
				</Typography>
				<div>
					<input style={{ width: "24rem" }} type="text" />
				</div>

				<Box sx={{
					display: 'flex',
					alignItems: 'center',
					gap: '1rem',
					cursor: 'pointer'
				}}>
					<AiFillFileAdd
						size={32}
						color="rgb(80, 175, 245)"
						onClick={() => setIsUploadsFiles((prev) => !prev)}
					/>
					<FaFolderPlus
						size={32}
						color="rgb(80, 175, 245)"
						onClick={() => setIsAddFolder((prev) => !prev)}
					/>
				</Box>
			</SideBar>

			<Container>
			{isAddFolder && <CreateFolder setIsAddFolder={setIsAddFolder} folder={idFoldersAndFiles}/>}
			{isUploadsFiles && <UploadsOfFiles setIsUploadsFiles={setIsUploadsFiles} folder={idFoldersAndFiles}/> }
			<ListFilders data={folders} setData={setIdFoldersAndFiles} isPage={isPage}/>
			</Container>
		</>
	);

};

