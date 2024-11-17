import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import { INVESTOR_LIST, SPONSOR_LIST } from '@/lib/constant';

import './index.less';
import { useEffect, useState } from 'react';

function InvestorSponser() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    // 添加事件监听
    window.addEventListener('resize', handleResize);

    // 清理事件监听
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="investors-sponsors">
      <div>
        <h2 className="investors-sponsors-title">Investors</h2>
        <div className="investors-sponsors-swiper">
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            slidesPerView={width < 900 ? 3 : 5}
            spaceBetween={30}
            loop={true}
            threshold={0.1}
          >
            {INVESTOR_LIST.map((Img, index) => (
              <SwiperSlide className="content-item" key={index}>
                <div className="content-item-img">
                  <img src={Img} alt="" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </div>
      <div className="mt-16">
        <h2 className="investors-sponsors-title">Sponsors & Partners</h2>
        <div className="investors-sponsors-swiper">
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            slidesPerView={width < 900 ? 3 : 5}
            spaceBetween={30}
            loop={true}
            threshold={0.1}
          >
            {SPONSOR_LIST.map((Img, index) => (
              <SwiperSlide className="content-item" key={index}>
                <div className="content-item-img">
                  <img src={Img} alt="" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </div>
    </div>
  );
}

export default InvestorSponser;
