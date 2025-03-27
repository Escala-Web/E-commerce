import { useContext, useEffect, useState } from "react";
import { useBreads } from "../../../../hooks/Breads/useBreads";
import { useCategories } from "../../../../hooks/Category/useCategories";
import { Formulario } from "../Create/styles";
import { Divider } from "@mui/material";
import { ProductContext } from "../../../../context/Product";

export const Breads = () => {

	const [name, setName] = useState('');

	const { findAll, create } = useBreads();
	const { data: brands } = findAll;

	const [brandValue, setBrandValue] = useState('');

	const [isOpenBrand, setIsOpenBrand] = useState(false);

	function handleSubmit() {
		create.mutate({
			name: name
		})
	}


	const { setFormData } = useContext(ProductContext);

	useEffect(() => {
			setFormData((prevForm) => ({
				...prevForm,
				id_brand: brandValue
			}))
		}, [brandValue])

	return (
		<>
			<div className="container_filter">
				<div className="container_form">
					{brands?.content?.map((cat) => (
						<div key={cat.id_brand}>
							<div className="form_grup">
								<input
									type="radio"
									className="input_radio"
									id={cat.id_brand}
									name="category"
									onChange={() => setBrandValue(cat.id_brand)}
								/>
								<label htmlFor={cat.id_brand}>{cat.name}</label>
							</div>
						</div>
					))}
				</div>
				{isOpenBrand ? (
					<Formulario>
						<Divider />
						<form>
							<div className="form_flex" style={{ marginTop: "1rem" }}>
								<div className="form_group">
									<label>Nome da categoria</label>
									<input
										type="text"
										name="name"
										placeholder="Nome da categoria"
										onChange={(event) => setName(event.target.value)}
										value={name}
									/>
								</div>
							</div>
							<div className="form_flex">
								<div className="form_group">
									<button type="button" onClick={handleSubmit}>Criar Marca</button>
									<button type="button" onClick={() => setIsOpenBrand(false)}>
										Cancelar
									</button>
								</div>
							</div>
						</form>
					</Formulario>
				) : (
					<>
						<button type="button" onClick={() => setIsOpenBrand(true)}>
							Criar Marca
						</button>
					</>
				)}
			</div>
		</>
	);
};
