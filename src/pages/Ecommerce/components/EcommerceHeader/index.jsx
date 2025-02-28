import { useContext } from "react"
import { TemplateContext } from "../../../../context/Template";
import { HeaderPageTemplate02 } from "../../../templates/template02/components/Header";

export const EcommerceHeader = () => {

    const { template } = useContext(TemplateContext);

    switch (template) {
        case 1:
            
            break;
        case 2:
            return <HeaderPageTemplate02 />
            break
    
        default:
            break;
    }

}