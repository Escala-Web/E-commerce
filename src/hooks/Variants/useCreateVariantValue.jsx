import { useMutation, useQueryClient } from "@tanstack/react-query";
import { https } from "../../config/https";


async function createVariantValue({id, value, viewer}) {

    const token = JSON.parse(localStorage.getItem('userLogin'));

    try {
        const { data } = await https.post(
            "/variations/create-value",
            {
                id_variant_attribute: id,
                value: value,
                viewer: viewer,
            },
            {
                headers: {
                    Authorization: `Bearer ${token[0].token}`
                }
            }
        );
        return data;
    } catch (error) {
        return error;
    }
}
export const useCreateVariantValue = () => {

    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createVariantValue,
        onSuccess: (data) => {
            queryClient.invalidateQueries("variantsValue");
            console.log(data)
        },
        onError: (error) => {
            console.log(error);
        },
    });
};
