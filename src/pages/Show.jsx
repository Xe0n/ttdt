import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { SlideShow } from '../components'

const Show = () => {
    const { id } = useParams()
    const [gallery, setGallery] = React.useState([])
    const [show, setShow] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)

    React.useEffect(() => {
        async function getData() {
            try {
                const [GalleryResponse] = await Promise.all([axios.get(`http://xn----7sbbrnkv3apccm2i.xn--p1ai/api/action/singleShowGallery?id=${id}`)])
                const [ShowResponse] = await Promise.all([axios.get(`http://xn----7sbbrnkv3apccm2i.xn--p1ai/api/action/singleShow?id=${id}`)])
                setIsLoading(false)
                setGallery(GalleryResponse.data)
                setShow(ShowResponse.data[0])

            } catch (error) {
                alert('Ошибка при запросе данных ;(')
                console.error(error)
            }
        }
        getData()
    }, [])
    const text = () => { return {__html: show.text} }
    const people = () => { return {__html: show.info} }
    
    return (
        <div className='container-fluid' id="showSingle">
            <div className="row slide-block">
                <div className="col-12 my-5 py-5">
                   <SlideShow items={gallery}/>
                </div>
            </div>
            <div className="row px-md-5 px-0">
                <div className="col-md-6 col-12">
                    <h1 className='pb-3'>
                        {show.title}
                    </h1>
                    <div className="showText" dangerouslySetInnerHTML={text()}></div>
                </div>
                <div className="col-md-6 col-12">
                    <div className='d-flex align-items-end flex-column'>
                        <p dangerouslySetInnerHTML={people()} ></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Show