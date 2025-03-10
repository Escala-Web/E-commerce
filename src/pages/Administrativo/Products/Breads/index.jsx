import {
	Box,
	Button,
	Checkbox,
	FormControlLabel,
	FormGroup,
	TextField,
} from "@mui/material";
import { FaPlus } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { useCreateBread } from "../../../../hooks/Breads/useCreateBreads";
import { https } from "../../../../config/https";
import { ProductContext } from "../../../../context/Product";

export const Breads = () => {
	const [breads, setBreads] = useState([]);
	const [name, setName] = useState("");

    const { handleChange } = useContext(ProductContext);

	const { mutate: createCategory, isSuccess } = useCreateBread();

	const [addBrand, setAddBrand] = useState(false);

	async function findAll() {
		try {
			const { data } = await https.get("/brands");
			setBreads(data);
		} catch (error) {
			console.log(error);
		}
	}

	function handleSubmit() {
		createCategory({
			name: name,
		});
		setAddBrand(false);
		setName("");
	}

	useEffect(() => {
		findAll();
	}, [isSuccess]);

	return (
		<>
			<FormGroup>
				<div style={{ display: "flex", flexDirection: "column" }}>
					{breads?.content?.map((bran) => (
						<FormControlLabel
							key={bran.id}
							control={<Checkbox />}
							label={bran.name}
							value={bran.id_branch}
							name="id_branch"
                            onChange={handleChange}
						/>
					))}
				</div>
			</FormGroup>

			{addBrand && (
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
						label="Nova Marca"
						multiline
						maxRows={4}
						variant="outlined"
						size="small"
						value={name}
						onChange={(event) => setName(event.target.value)}
					/>
					<Button onClick={handleSubmit}>Adicionar</Button>
				</Box>
			)}

			<Button
				onClick={() => setAddBrand(!addBrand)}
				sx={{
					display: "flex",
					gap: ".4rem",
					marginTop: 2,
				}}
				variant="text"
			>
				<FaPlus size={12} />
				Incluir Marca
			</Button>
		</>
	);
};
