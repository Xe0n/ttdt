import React from 'react'
import { Button, CurrentShow, NewsList, Partner } from '../components'
import { Navigation, Pagination } from 'swiper'
import axios from 'axios'

import teatr from '../assets/img/teatr.png'
function Home() {
    const [news, setNews] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)

    React.useEffect(() => {
        async function getData() {
            try {
                const [newsResponse] = await Promise.all([axios.get('http://xn----7sbbrnkv3apccm2i.xn--p1ai/api/action/news')])
                setIsLoading(false)
                setNews(newsResponse.data)

            } catch (error) {
                alert('Ошибка при запросе данных ;(')
                console.error(error)
            }
        }
        getData()
    }, [])
    const ShowList = {
        show: [
            {
                id: 134,
                img: 'http://театр-туймазы.рф/images/gallery/php0XYscO.jpg',
                name: 'В круговороте берез...',
                author: 'Роберт Миннуллин, Алтынай Бурина',
                date: '29 Сентября 2015'
            },
            {
                id: 134,
                img: 'http://театр-туймазы.рф/images/gallery/phpade0bv.jpg',
                name: 'Войду я в лес…',
                author: 'Альфис Гаязов',
                date: '05 Февраля 2013'
            },
            {
                id: 134,
                img: 'http://театр-туймазы.рф/images/gallery/phpDsfrKd.jpg',
                name: 'Запах полыни',
                author: 'Ильгиз Зайниев',
                date: '20 Февраля 2015'
            },
            {
                id: 134,
                img: 'http://театр-туймазы.рф/images/gallery/phpXQbTJ3.jpg',
                name: 'Курица',
                author: 'Николай Коляда',
                date: '2013-01-07'
            }
        ]
    }
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
            <div class="container-fluid home-slide">
                <div class="row">
                    <h1 className="text-center mt-3">Туймазинский государственный <br /> татарский драматический театр</h1>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <img src={teatr} alt="фото театра" className="img-fluid" />
                    </div>
                    <div class="col-md-6 d-flex align-self-end ps-5 mt-3 mt-md-0">
                        <div>
                            <h3>Касса 7-34-49</h3>
                            <h3>Приемная 8 (34782) 7-34-08</h3>
                            <p>452750, Республика Башкортостан, г.Туймазы, Площадь Октября, 3</p>
                            <div className="mt-5 mb-2">
                                <Button link="#" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="container-fluid mt-50">
                <div class="row">
                    <h3>В этом месяце</h3>
                    <CurrentShow items={ShowList} />
                </div>
            </div>
            <div class="container-fluid mt-50">
                <div class="row">
                    <h3>Новости</h3>
                    <NewsList items={news} />
                </div>
            </div>
            <div class="container-fluid mt-50 mb-5">
                <div class="row">
                    <h3>Наши друзья</h3>
                    <Partner items={Partners} />
                </div>
            </div>
     
        </>

    )
}

export default Home