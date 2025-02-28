import { useMutation, useQueryClient } from "@tanstack/react-query";
import { https } from "../../../config/https";

async function moveTrash(folder) {

    const token = JSON.parse(localStorage.getItem('userLogin'))

    try {
        const { data } = await https.put('/media/move-folder-trash', {
            id_folder: folder.id
        }, {
            headers: {
                Authorization: `Bearer ${token[0].token}`
            }
        });

        return data;
    } catch (error) {
        return error;
    }
}

export const useMoveTrashFolder = () => {

    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id) => moveTrash(id),
        mutationKey: ['folder'],
        onSuccess: (data) => {
            queryClient.invalidateQueries("findAllFolder");
            return data;
        },
        onError: (error) => {
            console.log(error)
            return error;
        }
    })

}