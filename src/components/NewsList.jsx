import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from "swiper"
import 'swiper/css'

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const NewsList = ({ items }) => {

	const divStyle = (src) => ({
		height: '500px',
		backgroundImage: `url( ${src} )`,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat'
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
						delay: 2500,
						disableOnInteraction: false
					}}
					breakpoints={{

						640: {
							slidesPerView: 2,
							spaceBetween: 20
						},
						768: {
							slidesPerView: 4,
							spaceBetween: 40
						},
						1024: {
							slidesPerView: 4,
							spaceBetween: 50
						}
					}}
					modules={[Autoplay]}
					onSwiper={(swiper) => console.log(swiper)}

				>

					{items.map((obj) => (
						<SwiperSlide key={obj.id}>
							<div>
								<div style={divStyle(obj.img)}>

								</div>
								<div className="mt-3">
									<h6>{obj.title}</h6>
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