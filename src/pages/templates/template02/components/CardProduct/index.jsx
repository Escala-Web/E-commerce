import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { ContainerCard } from "./styles";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Skeleton } from "@mui/material";
import { HiShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";

export const CardProduct = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);

	async function findAllProducts() {
		try {
			const { data } = await axios.get("https://fakestoreapi.com/products");
			setProducts(data);
			setTimeout(() => {
				setLoading(true);
			}, 1000);
		} catch (error) {}
	}

	useEffect(() => {
		findAllProducts();
	}, []);

	return (
		<ContainerCard>
			{products?.map((prod) => (
				<Card sx={{ maxWidth: 254, height: 460 }}>
					<CardActionArea className="card-action">
						{!loading ? (
							<Skeleton variant="rectangular" width={345} height={260} />
						) : (
							<CardMedia
								component="img"
								height="240"
								image={prod.image}
								alt="green iguana"
								sx={{ objectFit: "cover" }}
								style={{ width: "260px" }}
							/>
						)}
						{!loading ? (
							<>
								<div className="pd-skeleton">
									<Skeleton
										animation="wave"
										width="50%"
										height={40}
										style={{ marginTop: "10px" }}
									/>
									<Skeleton animation="wave" height={40} width="100%" />
									<Skeleton animation="wave" height={40} width="40%" />
								</div>
							</>
						) : (
							<>
								<CardContent className="card-content">
									<Typography gutterBottom variant="h6" component="div">
										Titulo
									</Typography>
									<Typography variant="body2" sx={{ color: "text.secondary" }}>
										{prod.title}
									</Typography>
									<Typography variant="h6" component="div">
										R$ {prod.price}
									</Typography>
								</CardContent>
							</>
						)}
					</CardActionArea>
					<CardActions>
						{!loading ? 
							<Skeleton variant="rectangular" width={180} height={40} />
						: 
						
						<Link className="button-comprar" to='/produto/smartphone'>
						<Button className="button-comprar" variant="contained">
						<HiShoppingCart className="icon-cart-comprar" />
							Comprar
						</Button>
						</Link>
						}
					</CardActions>
				</Card>
			))}
		</ContainerCard>
	);
};
