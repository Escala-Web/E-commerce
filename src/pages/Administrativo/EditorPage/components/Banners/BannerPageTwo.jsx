import { Swiper, SwiperSlide } from 'swiper/react';
import './styles.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useContext, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { TemplateContext } from '../../../../../context/Template';

export const BannerPageTwo = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  const {banner} = useContext(TemplateContext);

  return (
    <div className="custom-banner-container">
      <Swiper
        spaceBetween={50} // Espaço entre os slides
        slidesPerView={1} // Exibe 1 slide por vez
        loop={true} // Loop infinito
        autoplay={{
          delay: 3000, // Intervalo de autoplay
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => (swiper)}
      onSlideChange={() => ('slide change')}
      >
      {banner.map((b) => {
        return (

        <SwiperSlide>
          <div className="banner-slide">
            <img
              src={b.image}
              alt="Banner 1"
              className="banner-image"
              style={{width: '100%', height: '800px'}}
            />
            <div className="banner-content">
              <h2 className="banner-title">Promoção Incrível</h2>
              <p className="banner-description">
                Aproveite a nossa oferta especial! Descontos de até 50%.
              </p>
              <button className="banner-button">Saiba Mais</button>
            </div>
          </div>
        </SwiperSlide>
        )
      })}
      

        {/* Botões de navegação personalizados */}
        
      </Swiper>
    </div>
  );
};
