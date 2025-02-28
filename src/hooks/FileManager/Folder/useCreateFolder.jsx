import { useMutation, useQueryClient } from "@tanstack/react-query";

import { https } from "../../../config/https.js";

async function createFolder(folder) {

    const token = JSON.parse(localStorage.getItem('userLogin'));

	try {
		const { data } = await https.post(
			"/media/create-folder",
			{
				parent_id: folder.parent_id,
				folder_name: folder.name_folder,
			},
			{
				headers: {
					Authorization: `Bearer ${token[0].token}`
				}
			}
		);
		return data;
	} catch (error) {
		return error;
	}
}
export const useCreateFolder = () => {

	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: createFolder,
		onSuccess: (data) => {
			queryClient.invalidateQueries("findAllFolder");
		},
		onError: (error) => {
			// console.log(error);
		},
	});
};
