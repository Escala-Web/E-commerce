import { useMutation, useQueryClient } from "@tanstack/react-query";
import { https } from "../../config/https";


async function deleteVariant({id}) {

    console.log(id)

    const token = JSON.parse(localStorage.getItem('userLogin'))

    try {
        
        const { data } = await https.delete('/variations/variation/'+id, {
            headers: {
                Authorization: `Bearer ${token[0].token}`
            }
        })

        return data;

    } catch (error) {
        return error;
    }

}


export const useDeleteVariant = () => {

    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteVariant,
        onSuccess: (data) => {
            queryClient.invalidateQueries('variants')
            console.log(data)
        },
        onError: (error) => {
            console.log(error)
        }
    })

}