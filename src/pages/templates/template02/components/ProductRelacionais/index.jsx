import {
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Typography,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";

export const ProductRelacionais = () => {
	const datasImages = [
		"https://placehold.co/400x400",
		"https://placehold.co/400x400",
		"https://placehold.co/400x400",
		"https://placehold.co/400x400",
		"https://placehold.co/400x400",
		"https://placehold.co/400x400",
		"https://placehold.co/400x400",
	];

	return (
		<>
			<Swiper
				spaceBetween={10}
				slidesPerView={5}
				loop={true} 
				autoplay={{ delay: 3000 }}
				pagination={{ clickable: true }}
				navigation={true}
			>
				{datasImages?.map((data, index) => (
					<SwiperSlide key={index}>
						<Card>
							<CardActionArea>
								<CardMedia component="img" image={data} alt="image" />
								<CardContent>
									<Typography className="text-color-primary" variant="h5">
										Titulo
									</Typography>
									<Typography>
										is simply dummy text of the printing and typesetting
										industry.
									</Typography>
									<Typography variant="h5">R$ 59,99</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};
