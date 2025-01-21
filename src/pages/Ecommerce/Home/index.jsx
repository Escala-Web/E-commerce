import { useState } from "react";

import { HomePage02 } from "../../templates/template02/pages/home";
import { HomePage01 } from "../../templates/template01/pages/Home";

export const HomeEcommece = () => {
	const [template, setTemplate] = useState(1);

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
