
import { useContext } from "react";
import { TemplateContext } from "../../../../context/Template";
import { ProdutosTemplate02 } from "../../../templates/template02/pages/Products";

export const ProductsTemplate = () => {

    const {template} = useContext(TemplateContext);

    switch (template) {
        case 1:
            return <HomePage01 />;
            break;
        case 2:
            return <ProdutosTemplate02 />
            break;
        default:
            break;
    }


};
