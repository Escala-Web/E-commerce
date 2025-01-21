import { useEffect, useState } from "react"
import { http } from "../config/http";

export const useApi = (uri, param) => {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [update, setUpdate] = useState(false);

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
            setUpdate(true)
        } catch (error) {
            setError(error)
        }
    }

    async function destroy(item) {
        setLoading(true);

        try {
            await http.delete(`${uri}/${item.id}`);
            setItems((preview) => preview.filter((f) => f.id !== item.id))
        } catch (error) {
            setError(error)
        }
    }

    useEffect(() => {
        fetchAll();
    }, [uri, param])

    return {
        items,
        loading,
        error,
        create,
        destroy
    }

}