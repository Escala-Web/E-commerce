import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createProduct, getCategories } from "../../services/Main/Categories";

export const useCategories = () => {


    const clientQuery = useQueryClient();

    const findAll = useQuery({
        queryFn: getCategories,
        queryKey: (['categories'])
    });

    const create = useMutation({
        mutationFn: createProduct,
        onSuccess: () => {
            clientQuery.invalidateQueries(['categories'])
        },
        onError: (error) => {
            console.log(error)
        }
    })

    return { findAll, create };

}