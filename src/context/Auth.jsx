import { createContext, useEffect, useState } from "react";
import { Navigate, useNavigate, useNavigation } from "react-router-dom";
import { toast } from "react-toastify";


export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [login, setLogin] = useState(() => {
        const storedLogin = localStorage.getItem("userLogin");
        return storedLogin ? JSON.parse(storedLogin) : null; 
    });


    function logout() {
        

        
        setLogin(null); // Clear the login state
        localStorage.removeItem("userLogin");
        window.location.href = '/';
        ;
        
    }

    useEffect(() => {
        if (login) {
            localStorage.setItem("userLogin", JSON.stringify(login)); // Store login state
        } else {
            localStorage.removeItem("userLogin"); // Remove login state if logged out
        }
    }, [login]);


    return (
        <AuthContext.Provider value={{login, setLogin, logout}}>
            {children}
        </AuthContext.Provider>
    )
};
