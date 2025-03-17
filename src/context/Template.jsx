import { createContext, useEffect, useState } from "react";

export const TemplateContext = createContext();

export const TemplateProvider = ({children}) => {
    const [template, setTemplate] = useState(() => {
        const storedTemplate = localStorage.getItem("_template");
        return storedTemplate ? JSON.parse(storedTemplate) : 2;
    });

    

    const [headerLinks, setHeaderLinks] = useState([]);
    const [banner, setBanner] = useState([]);

    useEffect(() => {
        if (template) {
            localStorage.setItem("_template", JSON.stringify(template));
        } else {
            localStorage.removeItem("_template");
        }
    }, [template]);

    const value = {
        template,
        setTemplate,
        headerLinks, 
        setHeaderLinks,
        banner, 
        setBanner
    };

    return (
        <TemplateContext.Provider value={value}>
            {children}
        </TemplateContext.Provider>
    );
};
