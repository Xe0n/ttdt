import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next"

const Footer = () => {
	const {t} = useTranslation()
	React.useEffect(() => {
		const script = document.createElement('script')
	  
		script.src = "//s3.intickets.ru/intickets.min.js"
		script.async = true
	  
		document.body.appendChild(script)
	  
		return () => {
		  document.body.removeChild(script)
		}
	  }, [])
	return (
		<div className="container-fluid footer pb-5 px-3">
			<div className="row p-5">
				<div className="col-md-2 d-none d-md-block">
					<ul>
						<li><Link to='https://xn--j1afdb.xn--80aa2abfodnqc1e7a6c.xn--80asehdb/form.php?i=296' className="text-break">Анкета-опросник</Link></li>
						<li><Link to='/news/117' className="text-break">Афиша</Link></li>
						<li><Link to='/news/114' className="text-break">Билеты и услуги</Link></li>
						<li><Link to='/news/819' className="text-break">Добрые дела</Link></li>
						<li><Link to='/news/167' className="text-break">Фестивали</Link></li>
                               
                               
					</ul>
				</div>
				<div className="col-md-2 d-none d-md-block">
					<ul>
					<li><Link to='/news/122' className="text-break">Закупки</Link></li>
					<li><Link to='/news/514' className="text-break">Отчет о выполнение гос. задания</Link></li>
					<li><Link to='/news/515' className="text-break">Независимая оценка качества оказания услуг</Link></li>
					<li><Link to='/news/808' className="text-break">Оказание бесплатной юридической помощи</Link></li>
					<li><Link to='/news/809' className="text-break">Политика в сфере противодействия коррупции</Link></li>
					</ul>
				</div>
				<div className="col-md-2 d-none d-md-block">
					<ul>
						<li><Link to='/news/306' className="text-break">Разное (ссылки)</Link></li>
						<li><Link to='/news/307' className="text-break">Документы</Link></li>
					</ul>
				</div>
				<div className="col-md-3">
					<ul>
						<li>{t('teatr_footer_phone_head')}</li>
						<li>7-36-08, 7-22-67 </li>
					</ul>
				</div>
				<div className="col-md-3">
					<ul>
						<li>{t('teatr_footer_adress')}</li>
						<li>{t('teatr_adress')}</li>
						<li>{t('teatr_footer_social')}</li>
						<li> <a href="https://vk.com/dramteatr_tmz">VK</a> <a href="https://t.me/tmzteatr">Telegram</a></li>
					</ul>
				</div>
			</div>
			<div className="row text-center">
				<p>{t('teatr_footer_name')}</p>
				<p><a href="https://web.tm-mg.ru">Разработка сайта <span className='tm'>TM</span> Media</a></p>
			</div>
		</div>
	)
	
	EIPSK.Widgets.ModalDialog('59qv1367x7iazljd')
}

export default Footer