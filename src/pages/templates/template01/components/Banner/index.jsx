import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useContext } from "react";
import { TemplateContext } from "../../../../../context/Template";
import { Container, ContainerMobile, Section } from "./styles";

export const BannerPageOne = () => {
	// Use the context if needed
	const { banner } = useContext(TemplateContext) || []; // Use fallback if no context

	const defaultBanner = [
		{
			image:
				"https://mir-s3-cdn-cf.behance.net/project_modules/1400/371cef178509439.64e8f951aab97.jpg",
		},
		{
			image:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_n2m61wSsm_oTQdkcPrf1FMVyxYQ2eOEE0g&s",
		},
	];

	const bannerImages = banner.length > 0 ? banner : defaultBanner;

	return (
		<>
			<Container>
				<Section w="100%">
					<Swiper
						modules={[Navigation, Pagination, A11y]}
						spaceBetween={50}
						slidesPerView={1}
						navigation
						pagination={{ clickable: true }}
						scrollbar={{ draggable: true }}
						sx={{
							width: "100%",
							height: "620px",
						}}
					>
						{bannerImages.map((b, index) => (
							<SwiperSlide key={index}>
								<img
									style={{
										width: "100%",
										height: "620px",
										objectFit: "cover",
									}}
									className="swiper-image"
									src={b.image}
									alt={`banner ${index + 1}`}
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</Section>
			</Container>

			<ContainerMobile>
				<Swiper
					modules={[Navigation, Pagination, A11y]}
					spaceBetween={50}
					slidesPerView={1}
					navigation
					pagination={{ clickable: true }}
					scrollbar={{ draggable: true }}
				>
					{bannerImages.map((b, index) => (
						<SwiperSlide key={index}>
							<img
								className="swiper-image-mobile"
								src={b.image}
								alt={`banner mobile ${index + 1}`}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</ContainerMobile>
		</>
	);
};
