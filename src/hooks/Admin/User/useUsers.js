import { useQuery } from "@tanstack/react-query"
import { getUsers } from "../../../services/Admin/User"

export const useUsers = () => {

    return useQuery({
        queryFn: getUsers,
        queryKey: ['users']
    })

}