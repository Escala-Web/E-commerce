import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { ContainerImage } from './styles';

export const BannerProduct = ({data}) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={2}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
    {data.map((img) => (

      <SwiperSlide>
      <ContainerImage>

        <img src={URL.createObjectURL(img)}/>
      </ContainerImage>
      </SwiperSlide>
    ))}
    
    </Swiper>
  );
};