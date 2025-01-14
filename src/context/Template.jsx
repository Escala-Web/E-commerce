import { createContext, useState } from "react";

export const TemplateContext = createContext();

export const TemplateProvider = ({children}) => {

    const [template, setTemplate] = useState('');
    const [headerLinks, setHeaderLinks] = useState([]);

    

    const value = {
        template,
        setTemplate,
        headerLinks, 
        setHeaderLinks,
    }

    return (
        <TemplateContext.Provider value={value}>
            {children}
        </TemplateContext.Provider>
    )

}
