import { QueryClient, useMutation } from "@tanstack/react-query";
import { https } from "../../config/https";

async function createBreads(data) {

    const token = JSON.parse(localStorage.getItem('userLogin'));
    
    const { data: breads } = await https.post('/brands/create', {
        name: data.name
    }, {
        headers: {
            Authorization: `Bearer ${token[0].token}`
        }
    });

    return breads;

};

export const useCreateBread = () => {

    const queryClient = new QueryClient();

    return useMutation({
        mutationFn: createBreads,
        onSuccess: (data) => {
            console.log(data)
            queryClient.invalidateQueries('breads');
        },
        onError: (error) => {
            console.log(error)
        }
    })
}