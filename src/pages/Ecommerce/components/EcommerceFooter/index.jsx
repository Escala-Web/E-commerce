import { useContext } from "react"
import { TemplateContext } from "../../../../context/Template";
import { HeaderPageTemplate02 } from "../../../templates/template02/components/Header";
import { HeaderPageTemplate01 } from "../../../templates/template01/components/Header";
import { FooterTemplate01 } from "../../../templates/template01/components/Footer";

export const EcommerceFooter = () => {

    const { template } = useContext(TemplateContext);

    switch (template) {
        case 1:
            return <FooterTemplate01 />
            break;
        case 2:
            return <HeaderPageTemplate02 />
            break
    
        default:
            break;
    }

}