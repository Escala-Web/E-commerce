import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export const Banners = () => {
  return (
    <div>
      {/* Primeiro Slider */}
    
      <Swiper
        spaceBetween={10} // Define o espaçamento entre os slides
        slidesPerView={1} // Mostra 1 slide ao mesmo tempo
        loop={true} // Faz com que o slider seja cíclico
        
      >
        <SwiperSlide>
          <img src="https://placehold.co/1900x600/png" alt="second banner 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://placehold.co/1900x600/png" alt="second banner 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://placehold.co/1900x600/png" alt="second banner 1" />
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};
