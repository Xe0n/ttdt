import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from "swiper"
import 'swiper/css'

const Partner = (props) => {

	const partners = props.items.items
	const divStyle = () => ({
		height: '100px',
		width: '100%'
	})
	return (
		<>
			<div class="row mt-5" id="partner">
				<Swiper
					spaceBetween={150}
					slidesPerView={1}
					navigation
					pagination={{ clickable: true }}
					loop={true}
					className="mySwiper"
					autoplay={{
						delay: 2500,
						disableOnInteraction: true
					}}
					breakpoints={{

						640: {
							slidesPerView: 2,
							spaceBetween: 20
						},
						768: {
							slidesPerView: 6,
							spaceBetween: 40
						},
						1024: {
							slidesPerView: 7,
							spaceBetween: 50
						}
					}}
					modules={[Autoplay, Navigation]}
					onSwiper={(swiper) => console.log(swiper)}

				>

					{partners.map(partnerlist => (
						<SwiperSlide key={partnerlist.id}>
							<div>
								<div class="text-center">
									<img src={partnerlist.img} style={divStyle()} alt="" />
								</div>
							</div>
						</SwiperSlide>

					))}
				</Swiper>
			</div>
		</>
	)
}

export default Partner