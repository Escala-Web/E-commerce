import { useContext, useEffect, useState } from "react";
import { http } from "../config/http";
import { https } from "../config/https";
import { AuthContext } from "../context/Auth";
import { toast } from "react-toastify";

export const useFileManager = () => {
	const [listFoldersAndFiles, setListFoldersAndFiles] = useState([]);
	const [isEmpty, setIsEmpty] = useState(false);

	const [isTrash, setIsTrash] = useState(false);

	const { login } = useContext(AuthContext);

	async function createdFolderAndFiles(folder) {
		setIsEmpty(false);
		try {
			await https.post(
				"/media/create-folder",
				{
					parent_id: 1,
					folder_name: folder,
				},
				{
					headers: {
						Authorization: `Bearer ${login[0].token}`,
					},
				}
			);
			setIsEmpty(true);
		} catch (error) {
			console.log(error);
		}
	}

	async function findAll(trash) {
		try {
			const { data } = await https.post(
				"/media/get-content-folder",
				{
					parent_id: 1,
					is_trash: trash,
				},
				{
					headers: {
						Authorization: `Bearer ${login[0].token}`,
					},
				}
			);

			setListFoldersAndFiles(data.content);
		} catch (error) {
			console.log(error);
		}
	}

	async function trash(folder) {
		setIsEmpty(false);
		try {
			await https.put(
				`/media/move-folder-trash`,
				{
					id_folder: folder.id,
				},
				{
					headers: {
						Authorization: `Bearer ${login[0].token}`,
					},
				}
			);
			setIsEmpty(true);
		} catch (error) {
			console.log(error.message);
		}
	}

	async function rename(folder, data) {
		setIsEmpty(false);
		try {
			await https.put(
				`/media/rename-folder`,
				{
					id_folder: data.id,
					folder_name: folder,
				},
				{
					headers: {
						Authorization: `Bearer ${login[0].token}`,
					},
				}
			);

			setIsEmpty(true);
		} catch (error) {
			toast.error("A pasta não pode ter o mesmo nome");
		}
	}

	async function trashPermenant(idFolder) {
		setIsEmpty(false);
		try {
			await http.delete(`/folder/${idFolder}`);
			setIsEmpty(true);
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		findAll(isTrash);
		console.log(isTrash);
	}, [isEmpty]);

	return {
		listFoldersAndFiles,
		trash,
		rename,
		createdFolderAndFiles,
		trashPermenant,
		setIsTrash,
		findAll,
		isTrash,
	};
};
