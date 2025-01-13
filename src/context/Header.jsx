import { createContext, useState } from "react";

export const HeaderConsume = createContext();


export const HeaderProvider = ({children}) => {
    const [session, setSession] = useState(false);
    
    function click() {
        setData((prev) => prev)
    }
    return (
        <HeaderConsume.Provider value={{setSession, session, click}}>
        {children}
    </HeaderConsume.Provider>
    )
}