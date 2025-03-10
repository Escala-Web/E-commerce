import {
	Box,
	Button,
	Checkbox,
	FormControlLabel,
	FormGroup,
	Radio,
	TextField,
} from "@mui/material";
import { useCategoryAll } from "../../../../hooks/Categories/useCategory";
import { FaPlus } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { useCreateCategory } from "../../../../hooks/Categories/useCreateCategory";
import { ProductContext } from "../../../../context/Product";

export const Categorie = () => {
	const { categories } = useCategoryAll();
	const { handleChange } = useContext(ProductContext);

	const [addCategorie, setAddCategorie] = useState(false);

	const [categorie, setCategorie] = useState({
		name: "",
		description: "",
		parent_category: null,
	});

	const { mutate: createCategory, isSuccess } = useCreateCategory();

	function handleEnter() {
		createCategory({
			name: categorie.name,
			description: categorie.description,
			parent_category: categorie.parent_category,
		});
	}

	return (
		<>
			<FormGroup>
				{categories?.map((cat) => (
					<div
						key={cat.id_category}
						style={{ display: "flex", flexDirection: "column" }}
					>
						<FormControlLabel
							control={<Checkbox />}
							label={cat.name}
							name="id_category"
							value={cat.id_category}
							onChange={handleChange}
						/>

						{/* {cat.children?.length > 0 && (
							<>
								{cat?.children?.map((chil) => (
									<FormControlLabel
                                        key={chil.id}
										sx={{ marginLeft: 2 }}
										control={<Checkbox />}
										label={chil.name}
									/>
								))}
							</>
						)} */}
					</div>
				))}
			</FormGroup>

			{addCategorie && (
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						marginTop: 2,
						gap: 2,
					}}
				>
					<TextField
						id="standard-multiline-flexible"
						label="Nova categoria"
						multiline
						maxRows={4}
						variant="outlined"
						size="small"
						value={categorie.name}
						onChange={(e) => setCategorie({ name: e.target.value })}
					/>
					<Button onClick={handleEnter}>Adicionar</Button>
				</Box>
			)}

			<Button
				onClick={() => setAddCategorie(!addCategorie)}
				sx={{
					display: "flex",
					gap: ".4rem",
					marginTop: 2,
				}}
				variant="text"
			>
				<FaPlus size={12} />
				Incluir categoria
			</Button>
		</>
	);
};
