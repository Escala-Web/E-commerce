import { useEffect, useState } from "react";
import { useProducts } from "../../../../../hooks/Products/useProducts"
import { ContainerSearch } from "./styles"

export const Search = () => {

    const [search, setSearch] = useState('');
    const [results, setResults] = useState([]);

    const { findAll } = useProducts();
    const { data: product } = findAll;

    useEffect(() => {

    }, [search])

    return (
        <>
            <ContainerSearch>
                <div className="container_search">
                    <input 
                        placeholder="O que você está procurando?"
                        type="text"
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                        name="search"
                    />
                    <button>Buscar</button>
                </div>
                {search.length > 0 && (
                <div className="container_search_results">

                </div>
                )}
            </ContainerSearch>
        </>
    )
}