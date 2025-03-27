
import { useContext } from "react";
import { TemplateContext } from "../../../../context/Template";
import { ProdutosTemplate02 } from "../../../templates/template02/pages/Products";
import { HomePage01 } from "../../../templates/template01/pages/Home";
import { ProductsTemplate01 } from "../../../templates/template01/pages/Products";

export const ProductsTemplate = () => {

    const {template} = useContext(TemplateContext);

    switch (template) {
        case 1:
            return <ProductsTemplate01 />;
            break;
        case 2:
            return <ProdutosTemplate02 />
            break;
        default:
            break;
    }


};
