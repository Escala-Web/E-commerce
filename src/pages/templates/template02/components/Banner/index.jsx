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
import banner1 from '../../../../../assets/banner1.jpg';
import banner2 from '../../../../../assets/banner2.jpg';
import banner3 from '../../../../../assets/banner3.jpg';


export const BannerTemplate02 = () => {
	// const { banner } = useContext(TemplateContext);

	const banner = [
		{
			image: banner1,
		},
		{
			image: banner2,
		},
		{
			image: banner3,
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
