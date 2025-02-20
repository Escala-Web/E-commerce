import { createContext, useEffect, useState } from "react";
import { Navigate, useNavigate, useNavigation } from "react-router-dom";
import { toast } from "react-toastify";


export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [login, setLogin] = useState(() => {
        const storedLogin = localStorage.getItem("userLogin");
        return storedLogin ? JSON.parse(storedLogin) : null; 
    });
    const [auth, setAuth] = useState(true);

    function logout() {
        setAuth(false);
        if(login) {
            localStorage.removeItem('userLogin');
            window.location.href = '/';
        }
    }

    useEffect(() => {
        setAuth(true)
        if (login) {
            console.log(login)
            localStorage.setItem("userLogin", JSON.stringify(login));

        } else {

            localStorage.removeItem("userLogin");

        }
    }, [login, auth]); 


    return (
        <AuthContext.Provider value={{login, setLogin, logout, auth}}>
            {children}
        </AuthContext.Provider>
    )
};
