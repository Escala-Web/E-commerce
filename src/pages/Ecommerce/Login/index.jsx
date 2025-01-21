import { useState } from "react";
import { LoginPageTemplate01 } from "../../templates/template01/pages/Login";


export const LoginEcommece = () => {
    const [template, setTemplate] = useState(1);

    switch (template) {
        case 1:
            return <LoginPageTemplate01 />
            break;
        
        default:
            break;
    }


};
