import { createContext, useEffect, useState } from "react";
import { Navigate, useNavigate, useNavigation } from "react-router-dom";
import { toast } from "react-toastify";


export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [login, setLogin] = useState(() => {
        const storedLogin = localStorage.getItem("userLogin");
        return storedLogin ? JSON.parse(storedLogin) : null; 
    });

    useEffect(() => {
        if (login) {
        
            localStorage.setItem("userLogin", JSON.stringify(login));
        } else {

            localStorage.removeItem("userLogin");
        }
    }, [login]); 

    return (
        <AuthContext.Provider value={{login, setLogin}}>
            {children}
        </AuthContext.Provider>
    )
};
