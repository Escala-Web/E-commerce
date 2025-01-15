import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useSearchParams } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { BannerPageOne } from './BannerPageOne';
import { BannerPageTwo } from './BannerPageTwo';
import { TemplateContext } from '../../../../../context/Template';

export const Banners = () => {

  const [searchBanner, setSearchBanner] = useSearchParams();

  const bannerSelecionado = searchBanner.get('banner');

  const {banner} = useContext(TemplateContext);
  
  


  return (
    <div>
    
      {bannerSelecionado == '2' ? (
        <BannerPageOne />
      ) : (
        <BannerPageTwo />
      ) }
    
    </div>
  );
};
