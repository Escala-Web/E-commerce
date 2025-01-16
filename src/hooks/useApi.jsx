import { useEffect, useState } from "react"
import { http } from "../config/http";

export const useApi = (uri) => {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function fetchAll() {
        setLoading(true);
        try {
            const { data } = await http.get(uri);
            setItems(data);
            setLoading(false)
        } catch (error) {
            setError(error)
        }
    }

    async function create(item) {

        setLoading(true);
        try {
            const response = await http.post(uri, item);
            setItems((prevItems) => [...prevItems, response.data])
        } catch (error) {
            
        }

    }

    useEffect(() => {
        fetchAll();
    }, [uri])

    return {
        items,
        loading,
        error,
        create
    }

}