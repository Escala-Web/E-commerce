import { useEffect, useState } from "react";
import { https } from "../config/https";

export const useCategory = () => {

    const [category, setCategory] = useState([]);

    async function findAllCategorys() {

        try {
            const { data } = await https.get('/categories/get-parents');
            setCategory(data);
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        findAllCategorys();
    }, [])

    return { category };
}