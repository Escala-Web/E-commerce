import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createValueVariation, createVariation, deleteVariation, getAllValueVariant, getVariation } from "../../services/Admin/Variation";

export const useVariation = () => {

    const clientQuery = useQueryClient();

    const findAllVariation = useQuery({
        queryFn: getVariation,
        queryKey: ['variations']
    });

    const createVariations = useMutation({
        mutationFn: createVariation,
        onSuccess: (data) => {
            console.log(data)
            clientQuery.invalidateQueries(['variations']);
        },
        onError: () => {
            console.log(error)
        }
    })

    const deleteVariant = useMutation({
        mutationFn: deleteVariation,
        onSuccess: (data) => {
            console.log(data);
            clientQuery.invalidateQueries(['variations']);
        },
        onError: (error) => {
            console.log(error)
        }
    })



    const createValue = useMutation({
        mutationFn: createValueVariation,
        onSuccess: (data) => {
            console.log(data);
            clientQuery.invalidateQueries(['value_variant']);
        },
        onError: (error) => {
            console.log(error)
        }
    })

    const findValueVariant = (id) => useQuery({
        queryKey: ['value_variant', id],
        queryFn: () => getAllValueVariant(id),
        enabled: !!id
    })

    

    return { findAllVariation, createVariations, deleteVariant, createValue, findValueVariant  }

}