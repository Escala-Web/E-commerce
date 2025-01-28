import { useContext, useState } from "react";

import { HomePage02 } from "../../templates/template02/pages/home";
import { HomePage01 } from "../../templates/template01/pages/Home";
import { TemplateContext } from "../../../context/Template";

export const HomeEcommece = () => {

	const {template} = useContext(TemplateContext);

	switch (template) {
		case 1:
			return <HomePage01 />;
			break;
		case 2:
			return <HomePage02 />
			break;
		default:
			break;
	}


};
