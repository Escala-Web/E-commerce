import {
	Button,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	FormControl,
	FormGroup,
	Grid,
	InputLabel,
	MenuItem,
	Select,
	TextField,
	Typography,
} from "@mui/material";
import { Container } from "./styles";
import banner from "../../../../../assets/banner1.jpg";
import banner2 from "../../../../../assets/banner2.jpg";
import { Delete, Edit } from "@mui/icons-material";
import { useState } from "react";

export const ContentBanner = ({ bannerMenu }) => {
	const [formData, setFormData] = useState({
		link: ""
	});


	function handleChange(e) {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	}

	return (
		<>
			<Container>
				{bannerMenu == 1 ? (
					<>
                    <Card>
						<CardActionArea>
							<CardMedia component="img" image={banner} />
							<CardContent className="container-edit">
								<Button variant="contained" className="container-edit-delete">
									<Delete />
								</Button>
								<Button variant="contained">
									<Edit />
								</Button>
							</CardContent>
						</CardActionArea>
					</Card>

                    <Card>
						<CardActionArea>
							<CardMedia component="img" image={banner2} />
							<CardContent className="container-edit">
								<Button variant="contained" className="container-edit-delete">
									<Delete />
								</Button>
								<Button variant="contained">
									<Edit />
								</Button>
							</CardContent>
						</CardActionArea>
					</Card>
                    </>
				) : (
					<>
						<Typography variant="h5" component="div">
							Cadastrar um Banner
						</Typography>

						<form className="container-form" enctype="multipart/form-data">
							<TextField
								// label="Nome"
								variant="outlined"
								fullWidth
								name="image"
								type="file"
                                onChange={handleChange}
                                value={formData.image}
							/>

							<TextField
								label="Link para redirecionamento"
								variant="outlined"
								fullWidth
								name="link"
								type="text"
                                onChange={handleChange}
                                value={formData.link}
							/>

							<Button
								type="submit"
								variant="contained"
								color="primary"
								fullWidth
							>
								Cadastrar
							</Button>
						</form>
					</>
				)}
			</Container>
		</>
	);
};
