import { useContext } from "react";
import { FavoriteContext } from "../../../../context/Favorite";
import { CartTemplate02 } from "../../../templates/template02/pages/Cart";
import { TemplateContext } from "../../../../context/Template";

export const CartPage = () => {
	const { template } = useContext(TemplateContext);
	console.log(template)
	switch (template) {
		case 1:
            return <p>Não ainda</p>
			break;

		case 2:
            return <CartTemplate02 />
			break;

		default:
			break;
	}
};
