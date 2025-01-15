import axios from "axios";
import { useEffect, useState } from "react"

export const useCreate = (uri) => {

    const [data, setData] = useState([]);
    const [erro, setErro] = useState(null);

    async function create() {
        
        try {
            const createAPI = await axios.post(uri, data);
            setData(createAPI.data);
            console.log('Cadastrou')
        } catch (error) {
            setErro(error)
        }

    }

    useEffect(() => {
        create();
    }, [uri, data])


    return { create };

}