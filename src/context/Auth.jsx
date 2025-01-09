import { createContext, useState } from "react";

export const AuthConsume = createContext();


export const AuthProvider = ({children}) => {
    const [data, setData] = useState(true);
    
    function click() {
        setData((prev) => !prev)
    }
    return (
        <AuthConsume.Provider value={{data, click}}>
        {children}
    </AuthConsume.Provider>
    )
}