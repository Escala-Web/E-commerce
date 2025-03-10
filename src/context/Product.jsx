import { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {

	const [formData, setFormData] = useState({
		id_category: "",
		name: "",
		description: "",
		id_branch: "",
		sku: "",
		price: "",
		stock: "",
		is_default: "",
		discont: "",
		value_variant: "",
	});

	function handleChange(event) {
		const { name, value } = event.target;

		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	}

    function Submit(event) {
		event.preventDefault();
		console.log(formData);
	}

	return (
		<ProductContext.Provider
			value={{
				formData,
				setFormData,
                handleChange,
                Submit
			}}
		>
			{children}
		</ProductContext.Provider>
	);
};
