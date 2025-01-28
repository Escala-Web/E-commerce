import { useEffect, useState } from "react";
import { createContext } from "react";

export const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
    const [isFavorid, setIsFavorid] = useState(false)
    const [favorite, setFavorite] = useState(() => {
        const storedTemplate = localStorage.getItem("favorid");
        try {
            setIsFavorid(false);
            return storedTemplate ? JSON.parse(storedTemplate) : [];
        } catch (error) {
    
            console.error("Erro ao recuperar dados do localStorage", error);
            return [];
        }
    });


    function toggleFavorite(item) {
        try {
            setFavorite((prevFavorites) => {
                const isAlreadyFavorite = prevFavorites.some(f => f.id === item.id);

                if (isAlreadyFavorite) {
                    setIsFavorid(false);
                    return prevFavorites.filter(f => f.id !== item.id);
                } else {
                    setIsFavorid(true);
                    return [...prevFavorites, item];
                }
            });
        } catch (error) {
            console.error("Erro ao favoritar:", error);
        }
    }


    useEffect(() => {
        try {
            localStorage.setItem("favorid", JSON.stringify(favorite));
        } catch (error) {
            console.error("Erro ao salvar no localStorage", error);
        }
    }, [favorite]);

    return (
        <FavoriteContext.Provider value={{ toggleFavorite, favorite, isFavorid }}>
            {children}
        </FavoriteContext.Provider>
    );
};
