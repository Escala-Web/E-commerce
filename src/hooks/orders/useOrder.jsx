import { useQuery } from "@tanstack/react-query"
import { getOrders } from "../../services/Main/Orders"

export const useOrder = () => {

    return useQuery({
        queryFn: getOrders,
        queryKey: ['order']
    })
}