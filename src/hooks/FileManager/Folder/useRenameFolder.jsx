import { useMutation, useQueryClient } from "@tanstack/react-query"
import { https } from "../../../config/https"

async function renameFolder(folder) {

    const token = JSON.parse(localStorage.getItem('userLogin')); 

    try {
        const { data } = await https.put('/media/rename-folder', {
            id_folder: folder.id,
			folder_name: folder.name,
        },
        {
            headers: {
                Authorization: `Bearer ${token[0].token}`
            }
        });
        return data;
    } catch (error) {
        return error;
    }

}
export const useRenameFolder = () => {

    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (folder) => renameFolder(folder),
        mutationKey: ['findAllFolder'],
        onSuccess: (data) => {
            queryClient.invalidateQueries("findAllFolder");
            return data;
        },
        onError: (error) => {
            return error;
        }
    })
}