import { useParams } from "react-router-dom";
import { HeaderPageTemplate02 } from "../../components/Header";
import { Container } from "../home/styles";
import { ContainerProduct } from "./styles";
import { Badge, Button, IconButton, Typography } from "@mui/material";
import { BsHeart } from "react-icons/bs";
import { Category } from "../../components/Category";
import { ProductRelacionais } from "../../components/ProductRelacionais";
import { Footer } from "../../components/Footer";

export const ProductTemplate02 = () => {
	const { product } = useParams();

	console.log(product);

	return (
		<>
	
			<Container>
				<ContainerProduct>
					<div className="container-product">
						<div className="container-product-banner">
							<div className="container-product-banner-step">
								<img src="https://placehold.co/60x60" />
								<img src="https://placehold.co/60x60" />
								<img src="https://placehold.co/60x60" />
								<img src="https://placehold.co/60x60" />
								<img src="https://placehold.co/60x60" />
								<img src="https://placehold.co/60x60" />
								<img src="https://placehold.co/60x60" />
							</div>
							<div>
								<img src="https://placehold.co/740x660" />
							</div>
						</div>
						<div className="container-product-content">
							<Typography className="text-color-primary" fontWeight="500" variant="h3">
								Chuteira Futsal Adidas Predator 24 Club Unissex - Roxo
							</Typography>
							<div className="container-product-content-price">
								<Typography className="text-color-primary" fontWeight="500" variant="h5">
									R$ 299.99
								</Typography>
								<Typography className="text-color-primary" fontWeight="500" variant="h5">
									{" "}
									no pix
								</Typography>
							</div>
							<div className="container-product-content-size">
								<Typography className="text-color-primary" variant="h6" fontWeight="400">
									Tamanho:
								</Typography>
								<div className="container-product-content-size-image">
									<img src="https://placehold.co/60x60" />
									<img src="https://placehold.co/60x60" />
									<img src="https://placehold.co/60x60" />
									<img src="https://placehold.co/60x60" />
								</div>
							</div>
							<div className="container-product-content-size">
								<Typography variant="h6" fontWeight="400">
									Cor:
								</Typography>
								<div className="container-product-content-size-image">
									<img src="https://placehold.co/60x60" />
									<img src="https://placehold.co/60x60" />
									<img src="https://placehold.co/60x60" />
									<img src="https://placehold.co/60x60" />
								</div>
							</div>
							<div className="container-product-content-buy">
								<Button className="container-button" variant="contained" size="large">
									Comprar
								</Button>
								<IconButton>
									<Badge color="secondary">
										<BsHeart />
									</Badge>
								</IconButton>
							</div>
						</div>
					</div>
					<div>
                        <h2 className="text-color-primary">Description</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    <div>
                        <Category title='Produtos similares'/>
                        <ProductRelacionais />
                    </div>
				</ContainerProduct>
			</Container>
            <Footer />
		</>
	);
};
