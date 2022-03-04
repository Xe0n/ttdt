import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from "swiper"
import 'swiper/css'

const CurrentShow = (props) => {

	const showlists = props.items.show

	console.log(showlists)

	return (
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
						slidesPerView: 1,
						spaceBetween: 20
					},
					768: {
						slidesPerView: 1,
						spaceBetween: 40
					},
					1024: {
						slidesPerView: 2,
						spaceBetween: 50
					}
				}}
				modules={[Autoplay]}
				onSwiper={(swiper) => console.log(swiper)}

			>

				{showlists.map(showlist => (
					<SwiperSlide key={showlist.id}>
						<div>
							<div className="show-banner">
								<img src={showlist.img} className='img-fluid' alt="" />
							</div>
							<div className="mt-3">
								<h4>{showlist.name}</h4>
								<div>Автор</div>
								<div>{showlist.author}</div>
								<div>{showlist.date}</div>
							</div>
						</div>
					</SwiperSlide>

				))}
			</Swiper>
		</div>
	)
}

export default CurrentShow