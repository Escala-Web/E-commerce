import { useMutation, useQueryClient } from "@tanstack/react-query";
import { https } from "../../../config/https"

async function deleteFolder(folder) {

    const token = JSON.parse(localStorage.getItem('userLogin'))

    try {
        
        const { data } = await https.delete('/media/folder', {
            data: {id_folder: folder.id},
            headers: {
                Authorization: `Bearer ${token[0].token}`
            }
        })

        return data;

    } catch (error) {
        return error;
    }

}


export const useDeleteFolder = () => {

    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteFolder,
        onSuccess: () => {
            queryClient.invalidateQueries('findAllFolder')
        },
        onError: (error) => {
            console.log(error)
        }
    })

}