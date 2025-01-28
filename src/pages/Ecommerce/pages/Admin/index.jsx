import { useState } from "react";
import { AdminTemplate01 } from "../../../templates/template01/pages/Admin";


export const AdminPage = () => {

    const [template, setTemplate] = useState(1);
    
        switch (template) {
            case 1:
                return <AdminTemplate01 />;
                break;
            case 2:
                return <HomePage02 />
                break;
            default:
                break;
        }
    
}