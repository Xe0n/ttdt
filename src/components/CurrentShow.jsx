import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import { useTranslation } from "react-i18next";
import "swiper/css";

const CurrentShow = (props) => {
  const { t, i18n } = useTranslation();
  const showlists = props.items;
  const curLng = localStorage.getItem("lng");
  const show = showlists.map((item) => {
    item.newcol = item.showtime;
    return console.log(item.newcol);
  });
  return (
    <div class="row mt-5 curshow">
      {showlists.length > 0 ? (
        <Swiper
          spaceBetween={150}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className="mySwiper"
          autoplay={{
            delay: 4500,
            disableOnInteraction: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            1240: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay, Navigation]}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {showlists.map((showlist) => (
            <SwiperSlide key={showlist.id}>
              <div>
                <div className="show-banner">
                  <Link to={`show/${showlist.id}`}>
                    {" "}
                    <img
                      src={`https://xn--80aqu.xn----7sbbrnkv3apccm2i.xn--p1ai${showlist.poster}`}
                      className="img-fluid"
                      alt=""
                    />{" "}
                  </Link>
                  <div className="mt-3">
                    <h4>
                      {curLng === "ru"
                        ? showlist.title
                        : showlist.titleTAT !== ""
                        ? showlist.titleTAT
                        : showlist.title}
                    </h4>
                    {props.data === "off" ? (
                      ""
                    ) : (
                      <>
                        <div>
                          <h6>Дата и время</h6>
                        </div>{" "}
                        <div>{showlist.showtime}</div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <>
          <h2 className="text-center notice">
            {t("teatr_notion_spektakli_net")}
          </h2>
        </>
      )}
    </div>
  );
};

export default CurrentShow;
