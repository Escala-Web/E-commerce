import { useContext } from "react";
import { TemplateContext } from "../../../../context/Template";
import { CategorieTemplate02 } from "../../../templates/template02/pages/Categories";

export const CategoriesPage = () => {
	const { template } = useContext(TemplateContext);

	switch (template) {
		case 1:



			break;

		case 2:
            return (
                <>
                    
                    <CategorieTemplate02 />
                </>
            )
			break;

		default:
			break;
	}
};
