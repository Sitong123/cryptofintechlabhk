import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import { INVESTOR_LIST, SPONSOR_PARTNER_LIST } from '@/lib/constant';

import './index.less';
import { useEffect, useState } from 'react';

function InvestorSponser() {
  const [width, setWidth] = useState(window.innerWidth);
  const [slidesPerView, setSlidesPerView] = useState(5);

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

  useEffect(() => {
    if (width < 900) {
      setSlidesPerView(3);
    } else {
      setSlidesPerView(5);
    }
  }, [width]);

  return (
    <div className="investors-sponsors">
      <div data-aos="zoom-in">
        <div>
          <h2 className="investors-sponsors-title">Investors</h2>
          <div className="investors-sponsors-swiper">
            <Swiper
              modules={[Navigation]}
              navigation={{
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next',
              }}
              slidesPerView={slidesPerView}
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
            {INVESTOR_LIST.length > slidesPerView && (
              <>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
              </>
            )}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="investors-sponsors-title">Sponsors & Partners</h2>
          <div className="investors-sponsors-swiper">
            <Swiper
              modules={[Navigation]}
              navigation={{
                prevEl: '.sp-swiper-button-prev',
                nextEl: '.sp-swiper-button-next',
              }}
              slidesPerView={slidesPerView}
              spaceBetween={30}
              loop={true}
              threshold={0.1}
            >
              {SPONSOR_PARTNER_LIST.map((Img, index) => (
                <SwiperSlide className="content-item" key={index}>
                  <div className="content-item-img">
                    <img src={Img} alt="" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {SPONSOR_PARTNER_LIST.length > slidesPerView && (
              <>
                <div className="sp-swiper-button-prev"></div>
                <div className="sp-swiper-button-next"></div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvestorSponser;
