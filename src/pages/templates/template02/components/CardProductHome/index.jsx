import { Button, Card, CardActionArea, CardMedia, Typography } from "@mui/material";
import { Container } from "./styles";

export const CardProductHome = () => {

    const data = [
        {
            id:1
        },
        {
            id:2
        },
        {
            id:3
        },
        {
            id:4
        },
        {
            id:5
        },
        {
            id:6
        },
        {
            id:7
        },
        {
            id:8
        },
    ]


	return (
		<>
			<Container>

				{data?.map((c) => (
                    <Card className="container-card">
					<CardActionArea>
						<CardMedia
							component="img"
							height="240"
							image="https://static.netshoes.com.br/bnn/l_netshoes/2025-02-20/1711_bikes_fev_carrossel_mob.png"
							alt="Imagem homae"
							sx={{ objectFit: "cover" }}
						/>
						<div className="card-content">
							<Typography component="div" variant="h5">
								Titulo
							</Typography>
							<Typography variant="body2">
								Lizards are a widespread group of squamate reptiles, with over
								6,000 species, ranging across all continents except Antarctica
							</Typography>
    
                            <Typography component="div" variant="h6">
								R$ 45,25 no pix
							</Typography>
						</div>
					</CardActionArea>
				</Card>    
                ))}
                

			</Container>
		</>
	);
};
