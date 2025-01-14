import axios from "axios";
import { useEffect, useState } from "react"

export const useFecth = (uri) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [erro, setErro] = useState(null);

    async function fecthData() {
        
        setLoading(true);
        try {
            const { data: response } = await axios.get(uri);
            setData(response);
        } catch (error) {
            setErro(error)
        }
    }

    useEffect(() => {
        fecthData()
    }, [uri])

    return {data, erro, loading};

}