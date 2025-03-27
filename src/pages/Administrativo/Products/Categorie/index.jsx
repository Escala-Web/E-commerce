import { Divider } from "@mui/material";
import { Formulario } from "../Create/styles";
import { useCategories } from "../../../../hooks/Category/useCategories";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../../../context/Product";

export const Categorie = () => {
	const [name, setName] = useState('');

	const { findAll, create } = useCategories();
	const [isOpenCategory, setIsOpenCategory] = useState(false);
	const { data: category, isError, error } = findAll;
	const [categoryValue, setCategoryValue] = useState('');

	function handleSubmit() {
		create.mutate({
			name: name,
			parent_category: null
		})

		setName('');
		setIsOpenCategory(false)
	}

	
	const { setFormData } = useContext(ProductContext);

	useEffect(() => {
		setFormData((prevForm) => ({
			...prevForm,
			id_category: categoryValue
		}))
	}, [categoryValue])

	console.log(categoryValue)

	return (
		<>
			<div className="container_filter">
				<div className="container_form">
					{category?.parents?.flatMap((cat) => (
						<div key={cat.id_category}>
							<div className="form_grup">
								<input
									type="radio"
									className="input_radio"
									id={cat.id_category}
									name="category"
							
									onChange={(event) => setCategoryValue(cat.id_category)}
								/>
								<label htmlFor={cat.id_category}>{cat.name}</label>
							</div>
							{cat?.children?.map((chil) => (
								<div key={chil.id_category} className="form_grup children">
									<input
										type="radio"
										className="input_radio"
										id={chil.id_category}
										name="category"
						
										onChange={() => setCategoryValue(chil.id_category)}
									/>
									<label htmlFor={chil.id_category}>{chil.name}</label>
								</div>
							))}
						</div>
					))}
				</div>
				{isOpenCategory ? (
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
									<button type="button" onClick={handleSubmit}>Criar categoria</button>
									<button
										type="button"
										onClick={() => setIsOpenCategory(false)}
									>
										Cancelar
									</button>
								</div>
							</div>
						</form>
					</Formulario>
				) : (
					<>
						<button type="button" onClick={() => setIsOpenCategory(true)}>
							Criar categoria
						</button>
					</>
				)}
			</div>
		</>
	);
};
