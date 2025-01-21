import { CardContainer, CardContent, CardContentButton, CardContentPrice, CardContentTitle, Container, ContainerCard, ContainerImage } from "./styles";

export const CardProduct = () => {
	const productsArray = [
		
		{
			image:
				"https://a-static.mlcdn.com.br/800x560/celular-samsung-galaxy-m15-5g-6-000mah-camera-tripla-ate-50mp-128gb/samsung/6170/758027715621830de6200b29c573f342.jpeg",
			name: "Celular Samsung Galaxy M15 5G, 6.000mAh, Câmera Tripla até 50MP, 128GB",
			price: "R$ 1.044,05",
		},

        {
			image:
				"https://a-static.mlcdn.com.br/800x560/celular-samsung-galaxy-m15-5g-6-000mah-camera-tripla-ate-50mp-128gb/samsung/6170/758027715621830de6200b29c573f342.jpeg",
			name: "Celular Samsung Galaxy M15 5G, 6.000mAh, Câmera Tripla até 50MP, 128GB",
			price: "R$ 1.044,05",
		},
        {
			image:
				"https://a-static.mlcdn.com.br/800x560/celular-samsung-galaxy-m15-5g-6-000mah-camera-tripla-ate-50mp-128gb/samsung/6170/758027715621830de6200b29c573f342.jpeg",
			name: "Celular Samsung Galaxy M15 5G, 6.000mAh, Câmera Tripla até 50MP, 128GB",
			price: "R$ 1.044,05",
		},

        {
			image:
				"https://a-static.mlcdn.com.br/800x560/celular-samsung-galaxy-m15-5g-6-000mah-camera-tripla-ate-50mp-128gb/samsung/6170/758027715621830de6200b29c573f342.jpeg",
			name: "Celular Samsung Galaxy M15 5G, 6.000mAh, Câmera Tripla até 50MP, 128GB",
			price: "R$ 1.044,05",
		},
    
	];

	return (
		<>
			<Container>
				
					<CardContainer>
                    {productsArray.map((product) => (
                        <ContainerCard>
						<ContainerImage>
                            <img src={product.image} />
                        </ContainerImage>
						<CardContent>
							<CardContentTitle>
								<p>{product.name}</p>
							</CardContentTitle>
							<CardContentPrice>
								<p>{product.price}</p>
							</CardContentPrice>
							<CardContentButton>
								<p>Ver mais</p>
							</CardContentButton>
						</CardContent>
					</ContainerCard>
                    ))}
            
				
                    </CardContainer>
				
			</Container>
		</>
	);
};
