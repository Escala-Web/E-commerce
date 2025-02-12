import { useContext } from "react"
import { TemplateContext } from "../../../../context/Template";
import { RegisterTemplate02 } from "../../../templates/template02/pages/Register";

export const RegisterEcommerce = () => {

    const { template } = useContext(TemplateContext);

    switch (template) {
        case 1:
                return 'Não ha';
            break;
        case 2: 
            return <RegisterTemplate02 />
        default:
            break;
    }
}