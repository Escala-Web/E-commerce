import { useQueryClient, useMutation } from "@tanstack/react-query"
import { createUserClientAll } from "../../services/Client/User";
import { toast } from "react-toastify";

export const useClients = () => {

    const queryClient = useQueryClient();

    const create = useMutation({
        mutationFn: createUserClientAll,
        onSuccess: (data) => {
            toast.success(data?.message);
            queryClient.invalidateQueries(['clients']);
        },
        onError: (error) => {
            toast.error(error?.response?.data?.message);
        }
    })




    return { create };

}