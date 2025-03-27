import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { createBrand, getAllBreads } from "../../services/Main/Brands";

export const useBreads = () => {

    const queryClient = useQueryClient();

    const create = useMutation({
        mutationFn: createBrand,
        onSuccess: (data) => {
            console.log(data)
            queryClient.invalidateQueries(['brands'])
        },
        onError: (error) => {
            console.log(error)
        }
    });

    const findAll = useQuery({
        queryFn: getAllBreads,
        queryKey: (['brands'])
    });


    return { findAll, create }
}