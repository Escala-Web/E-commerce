import { useContext, useState } from "react";
import { AdminTemplate01 } from "../../../templates/template01/pages/Admin";
import { AdminTemplate02 } from "../../../templates/template02/pages/Admin";
import { TemplateContext } from "../../../../context/Template";


export const AdminPage = () => {

    const {template} = useContext(TemplateContext);
    
        switch (template) {
            case 1:
                return <AdminTemplate01 />;
                break;
            case 2:
                return <AdminTemplate02 />
                break;
            default:
                break;
        }
    
}