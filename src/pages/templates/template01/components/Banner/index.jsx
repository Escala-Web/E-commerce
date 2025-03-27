import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useContext } from "react";
import { TemplateContext } from "../../../../../context/Template";
import { Container, ContainerMobile, Section } from "./styles";
import bannerL from "../../../../../assets/bannerL.png";

export const BannerPageOne = () => {
	// const { banner } = useContext(TemplateContext);
	"banner01"

	const banner = [
		{
			image:
				"https://mir-s3-cdn-cf.behance.net/project_modules/1400/371cef178509439.64e8f951aab97.jpg",
		},
		{
			image:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_n2m61wSsm_oTQdkcPrf1FMVyxYQ2eOEE0g&s",
		},
	];

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
						onSwiper={(swiper) => swiper}
						onSlideChange={() => "slide change"}
					>
						{banner.map((b, index) => {
							return (
								<SwiperSlide key={index}>
									<img
										style={{
											width: "100%",
											height: "620px",
											objectFit: "cover",
										}}
										src={b.image}
										alt="second banner 1"
									/>
								</SwiperSlide>
							);
						})}
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
					onSwiper={(swiper) => swiper}
					onSlideChange={() => "slide change"}
				>
					{banner.map((b) => {
						return (
							<SwiperSlide>
								<img
									style={{
										width: "100%",
										height: "300px",
										objectFit: "cover",
									}}
									src={b.image}
									alt="second banner 1"
								/>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</ContainerMobile>
		</>
	);
};
