import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createProduct, getAllBy, getAllProducts } from "../../services/Admin/Products";


export const useProducts = (params, id, page) => {

    const clientQuery = useQueryClient()

    const findAll = useQuery({
        queryFn: getAllProducts,
        queryKey: ['products']
    }) 

    const create = useMutation({
        mutationFn: createProduct,
        onSuccess: (data) => {
            clientQuery.invalidateQueries(['products'])
        },
        onError: (error) => {
            // console.log(error.response)
        }
    })

    const getAllByProducts = useQuery({
        queryKey: ['products', params, id, page],
        queryFn: () => getAllBy(params, id, page),
        enabled: !!params && !!id && !!page 
    })

    return { findAll, create, getAllByProducts }; 
}