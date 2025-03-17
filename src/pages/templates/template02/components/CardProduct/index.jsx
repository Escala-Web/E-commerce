import * as React from "react";
import { ContainerCard } from "./styles";;
import { Breadcrumbs } from "@mui/material";
import { Link } from "react-router-dom";

import { Card, CardContent, CardMedia, Typography, Button, Box } from "@mui/material";

export const CardProduct = () => {


	

	return (
		<ContainerCard>
			<Breadcrumbs aria-label="breadcrumb" className="breacrums">
				<Link underline="hover" color="inherit" href="/">
					NSA RARIDADES
				</Link>
				<Typography sx={{ color: "text.primary" }}>Produtos</Typography>
			</Breadcrumbs>
			<Card sx={{ maxWidth: 300, m: 2, boxShadow: 3, borderRadius: 2 }}>
				<CardMedia
					component="img"
					height="180"
					image='https://placehold.co/800x400'
					alt='b'
					sx={{ objectFit: "contain", p: 1 }}
				/>
				<CardContent>
					<Typography variant="h6" component="div" noWrap>
						ewbfi
					</Typography>
					<Typography variant="body2" color="text.secondary" sx={{ my: 1 }}>
						ddddddd
					</Typography>
					<Typography variant="h5" color="primary" sx={{ fontWeight: "bold" }}>
						R$ 1220,0,0
					</Typography>
					<Box mt={2} display="flex" justifyContent="center">
						<Button variant="contained" color="primary" fullWidth>
							Comprar
						</Button>
					</Box>
				</CardContent>
			</Card>
		</ContainerCard>
	);
};
