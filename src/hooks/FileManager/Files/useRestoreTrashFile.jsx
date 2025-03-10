import { useMutation, useQueryClient } from "@tanstack/react-query";
import { https } from "../../../config/https"

async function restoreTrash(folder) {

    const token = JSON.parse(localStorage.getItem('userLogin'))

    try {
        const { data } = await https.put('/media/restore-file', {
            id_media: folder.id
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
export const useRestoreTrashFile = () => {

    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: restoreTrash,
        onSuccess: (data) => {
            queryClient.invalidateQueries('findAllFolder')
        },
        onError: (error) => {
            console.log(error)
        }
    })

}