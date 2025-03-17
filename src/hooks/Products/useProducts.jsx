import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../../services/Admin/Products";

export const useProducts = () => {

    return useQuery({
        queryFn: getAllProducts,
        queryKey: ['products']
    })

}