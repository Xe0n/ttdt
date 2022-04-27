import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Link } from 'react-router-dom' 
import { Autoplay, Navigation } from "swiper"
import 'swiper/css'

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
const curLng = localStorage.getItem('lng')

const NewsList = ({ items }) => {

	const divStyle = (src) => ({
		height: '500px',
		backgroundImage: `url( ${src} )`,
		backgroundSize: 'contain',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center center'
	})

	return (
		<>
			<div class="row mt-5">
				<Swiper
					spaceBetween={150}
					slidesPerView={1}
					navigation
					pagination={{ clickable: true }}
					loop={true}
					className="mySwiper"
					autoplay={{
						delay: 3500,
						disableOnInteraction: true
					}}
					breakpoints={{

						640: {
							slidesPerView: 1,
							spaceBetween: 20
						},
						768: {
							slidesPerView: 1,
							spaceBetween: 50
						},
						1024: {
							slidesPerView: 2,
							spaceBetween: 50
						},
						1240: {
							slidesPerView: 3,
							spaceBetween: 40
						}
					}}
					modules={[Autoplay, Navigation]}
					onSwiper={(swiper) => console.log(swiper)}

				>

					{items.map((obj) => (
						<SwiperSlide key={obj.id}>
							<div>
								<Link to={`news/${obj.id}`}>
									<div style={divStyle(obj.img)}></div>
								</Link>
								<div className="mt-3">
									<Link to={`news/${obj.id}`}><h6>{curLng === 'ru' ? obj.title : obj.titleTAT !== "" ? obj.titleTAT : obj.title}</h6></Link>
								</div>
							</div>
						</SwiperSlide>

					))}
				</Swiper>
			</div>
		</>
	)
}

export default NewsList