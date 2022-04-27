import React from 'react'
import { Button, CurrentShow, NewsList, Partner } from '../components'
import { Navigation, Pagination } from 'swiper'
import axios from 'axios'
import { useTranslation } from "react-i18next"
import { Link } from 'react-router-dom'
import VK, {Group } from "react-vk"

import teatr from '../assets/img/teatr.png'
import telegramBanner from '../assets/img/telegram.png'
import repertuar from '../assets/img/repertuar-may.jpg'
function Home() {
    const [news, setNews] = React.useState([])
    const [afisha, setAfisha] = React.useState([])
    const [edro, setEdro] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)  
    const { t, i18n } = useTranslation()

    React.useEffect(() => {
        async function getData() {
            try {
                const [newsResponse, afishaResponse, edroResponse] = await Promise.all([
                    axios.get('http://xn--80aqu.xn----7sbbrnkv3apccm2i.xn--p1ai/api/action/newsHome'),
                    axios.get('http://xn--80aqu.xn----7sbbrnkv3apccm2i.xn--p1ai/api/action/afisha'),
                    axios.get('http://xn--80aqu.xn----7sbbrnkv3apccm2i.xn--p1ai/api/action/edro')
                ])
                setIsLoading(false)
                setNews(newsResponse.data)
                setAfisha(afishaResponse.data)
                setEdro(edroResponse.data)

            } catch (error) {
                alert('Ошибка при запросе данных ;(')
                console.error(error)
            }
        }
        getData()
    }, [])
   
    const Partners = {
        items: [
            {
                id: 1,
                img: 'http://театр-туймазы.рф/images/banners/work_russia.png'
            },
            {
                id: 2,
                img: 'http://театр-туймазы.рф/images/banners/brand-01.svg'
            },
            {
                id: 3,
                img: 'http://театр-туймазы.рф/images/banner-133x133.png'
            },
            {
                id: 4,
                img: 'http://театр-туймазы.рф/images/banners/banner2020.png'
            },
            {
                id: 5,
                img: 'http://театр-туймазы.рф/images/er_ogo.png'
            },
            {
                id: 6,
                img: 'http://театр-туймазы.рф/images/banners/banner2020.png'
            },
            {
                id: 7,
                img: 'http://театр-туймазы.рф/images/banners/kmrb.png'
            }
        ]
    }
    return (
        <>
            <div className="container-fluid home-slide">
                <div className="row">
                    <h1 className="text-center mt-3 teatr-name" dangerouslySetInnerHTML={{__html:t('teatr_name')}}></h1>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <img src={teatr} alt="фото театра" className="img-fluid" />
                    </div>
                    <div className="col-md-6 d-flex align-self-end ps-md-5 mt-3 mt-md-0">
                        <div className='text-center text-md-start'>
                            <h3>{t('teatr_kassa')} 7-34-49</h3>
                            <h3>{t('teatr_priem')} 8 (34782) 7-36-08</h3>
                            <p>{t('teatr_adress')}</p>
                            <div className="mt-2 mb-5">
                                <Button link="https://iframeab-pre5403.intickets.ru/events/"/>
                            </div>
                            <img src={repertuar} className="img-fluid" alt="" />
                        </div>

                    </div>
                </div>
            </div>
            <div className="container-fluid mt-50">
                <div className="row">
                    <h3>{t('teatr_show_Month')}</h3>
                    <CurrentShow items={afisha} />
                </div>
            </div>
            <div className="container-fluid mt-50">
                <div className="row">
                    <h3>{t('teatr_home_news')}</h3>
                    <NewsList items={news} />
                </div>
            </div>
            <div className="container-fluid mt-50">
                <div className="row">
                    <h3>{t('teatr_edro_spec')}</h3>
                    <CurrentShow items={edro} data="off" />
                </div>
            </div>
            <div className="container-fluid mt-50">
                <div className="row">
                    <div className="col-md-12 col-lg-8 col-sm-12">
                    <h3 className='pb-3'>{t('teatr_home_vk')}</h3>
                        <VK apiId={8135164}>                
                            <Group groupId={17532966} options={ {width: 'auto', height: '500px', mode: 2} }/>
                        </VK>
                    </div>
                    <div className=" col-lg-4 col-md-12 col-sm-12 ">
                    <h3 className='pb-3'>{t('teatr_home_tlg')}</h3>
                        <a href="https://t.me/tmzteatr"><img src={telegramBanner} alt="" className='img-fluid'/></a>
                    </div>
                </div>
            </div>
            <div className="container-fluid mb-5 mt-5">
                <div className="row">
                    <h3>{t('teatr_frends')}</h3>
                    <Partner items={Partners} />
                </div>
            </div>
        
            
        </>

    )
}

export default Home