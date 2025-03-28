import { useState } from "react";
import { useCreateFolder } from "../../../../../hooks/FileManager/Folder/useCreateFolder";
import { FaFolder } from "react-icons/fa";
import { Container } from "./styles";
import { useFolder } from "../../../../../hooks/FileManager/Folder/useFolder";

export const CreateFolder = ({ setIsAddFolder, folder }) => {
	const [folderName, setFolderName] = useState("");
	const { createFolder } = useFolder();


	console.log(folder)

	function handleSubmit() {
		if (!folderName.trim()) return;

		createFolder.mutate({
			parent_id: folder.id ? folder.id : 1,
			name_folder: folderName,
		});

		setFolderName("");
		setIsAddFolder(false);
	}

	function handleKeyDown(event) {
		if (event.key === "Enter") {
			event.preventDefault(); 
			handleSubmit();
		}
	}

	return (
		<Container>
			<div className="card">
				<FaFolder size={100} color="rgb(253, 192, 113)" />
				<input
					type="text"
					value={folderName}
					onChange={(event) => setFolderName(event.target.value)}
					onKeyDown={handleKeyDown} 
				/>
			</div>
		</Container>
	);
};
