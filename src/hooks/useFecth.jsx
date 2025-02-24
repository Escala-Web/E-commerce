import axios from "axios";
import { useEffect, useState } from "react"
import { https } from "../config/https";

export const useFecth = (uri) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [erro, setErro] = useState(null);

    async function fecthData() {
        
        setLoading(false);
        try {
            const { data: response } = await https.get(uri);
            setData(response);
            setTimeout(() => {
                setLoading(true);
            }, 1000)
        } catch (error) {
            setErro(error)
        }
    }

    useEffect(() => {
        fecthData()
    }, [uri])

    return {data, erro, loading};

}