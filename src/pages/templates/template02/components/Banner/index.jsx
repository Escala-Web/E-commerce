import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useContext } from "react";
import { TemplateContext } from "../../../../../context/Template";
import { ContainerImage } from "./styles";


export const BannerTemplate02 = () => {
	// const { banner } = useContext(TemplateContext);

	const banner = [
		{
			image:
				"https://mir-s3-cdn-cf.behance.net/project_modules/1400/371cef178509439.64e8f951aab97.jpg",
		},
		
	];

	return (
		<>
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
						<ContainerImage>
							<img	
								src={b.image}
								alt="second banner 1"
							/>

						</ContainerImage>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</>
	);
};
