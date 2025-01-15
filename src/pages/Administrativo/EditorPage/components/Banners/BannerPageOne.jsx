import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useContext } from 'react';
import { TemplateContext } from '../../../../../context/Template';

export const BannerPageOne = () => {

  const {banner} = useContext(TemplateContext);



  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => (swiper)}
      onSlideChange={() => ('slide change')}
    >
    
    {banner.map((b) => {
      return (
        <SwiperSlide>
        <img style={{width: '100%', height: '800px'}} src={b.image} alt="second banner 1" />
      </SwiperSlide>
      )
    })}
      
    
    </Swiper>
  );
};