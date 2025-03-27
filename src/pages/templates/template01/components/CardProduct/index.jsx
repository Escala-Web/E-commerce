import { urlSite } from "../../../../../config/https";
import { formatPrice } from "../../../../../utils/formatPrice";
import {
	CardContainer,
	CardContent,
	CardContentButton,
	CardContentPrice,
	CardContentTitle,
	Container,
	ContainerCard,
	ContainerImage,
} from "./styles";

export const CardProduct = ({ w, data, flex, scroll }) => {

	

	return (
		<>
			<Container>
				<CardContainer flex={flex} ref={scroll}>
					{(data || []).flatMap((product) => (
						product?.variations?.map((variation) => (
							<ContainerCard flex={flex} w={w} key={product.id_product}>
							<ContainerImage>
								<img src={`${urlSite}${variation.image_path}`} />
							</ContainerImage>
							<CardContent>
								<CardContentTitle>
									<p>{product.name}</p>
								</CardContentTitle>
								<CardContentPrice>
									<p>{formatPrice(variation.price)}</p>
								</CardContentPrice>
								<CardContentButton >
									<p>Comprar</p>
								</CardContentButton>
							</CardContent>
						</ContainerCard>
						))
					))}
				</CardContainer>
			</Container>
		</>
	);
};
