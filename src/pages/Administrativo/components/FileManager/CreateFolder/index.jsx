import { useState } from "react";
import { useCreateFolder } from "../../../../../hooks/FileManager/Folder/useCreateFolder";
import { FaFolder } from "react-icons/fa";
import { Container } from "./styles";

export const CreateFolder = ({setIsAddFolder}) => {
	const [folderName, setFolderName] = useState("");
	const [folderId, seiFolderId] = useState(1);
	const { mutate: createFolder, data } = useCreateFolder();

	function handleSubmit() {

		createFolder({
			parent_id: folderId,
			name_folder: folderName,
		});

        setFolderName('');
        setIsAddFolder(false)

	}

	return (
		<>
			<Container>
				<div className="card">
					<FaFolder size={100} color="#50aff5" />
					<input
						type="text"
						value={folderName}
						onChange={(event) => setFolderName(event.target.value)}
						onBlur={() => handleSubmit(folderName)}
					/>
				</div>
			</Container>
		</>
	);
};
