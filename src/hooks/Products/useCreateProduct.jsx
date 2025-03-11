
import { useMutation } from "@tanstack/react-query";
import { https } from "../../config/https";

async function createProduct(data) {


    const token = JSON.parse(localStorage.getItem('userLogin'));

    try {
        // Envia os dados diretamente sem a chave "data"
        const { data: product } = await https.post('/products/create', data, {
            headers: {
                Authorization: `Bearer ${token[0].token}`
            }
        });

        return product;
    } catch (error) {
        return error;
    }
}


export const useCreateProduct = () => {


    return useMutation({
        mutationFn: (data) => createProduct(data),
        onSuccess: (data) => {
            console.log(data)
        },
        onError: (error) => {
            console.log(error)
        }
    })
}