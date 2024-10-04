import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const divStyle = (src) => ({
  height: "500px",
  backgroundImage: `url( https://xn--80aqu.xn----7sbbrnkv3apccm2i.xn--p1ai${src} )`,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
});

const SlideShow = ({ items, isLoaded }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          {items && (
            <Swiper
              slidesPerView={1}
              navigation={true}
              pagination={{ clickable: true }}
              loop={true}
              className="mySwiper"
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Navigation]}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {items.map((obj) => (
                <SwiperSlide key={obj.index}>
                  <div>
                    <div style={divStyle(obj.url)}></div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </div>
  );
};

export default SlideShow;
