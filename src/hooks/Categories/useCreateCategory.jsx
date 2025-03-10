import { QueryClient, useMutation } from "@tanstack/react-query";
import { https } from "../../config/https";

async function createCategory(data) {

    try {

        const token = JSON.parse(localStorage.getItem('userLogin'))

        const { data: categorie } = await https.post('/categories/create', {
            name: data.name,
            description: data.description,
            parent_category: data.parent_category
        }, {
            headers: {
                Authorization: `Bearer ${token[0].token}`
            }
        })

        return categorie;
    } catch (error) {
        return error;
    }

}

export const useCreateCategory = () => {

    const queryClient = new QueryClient();

    return useMutation({
        mutationFn: createCategory,
        onSuccess: (data) => {
            queryClient.invalidateQueries('categoryAll')
            console.log(data)
        },
        onError: (error) => {
            console.log(error)
        }
    })
}