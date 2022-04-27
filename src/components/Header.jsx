import React from 'react'
import { Link } from 'react-router-dom'
import { NavDropdown, Collapse, Button } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import axios from 'axios'
import { LanguageSwitch } from '../components'

import logo from '../assets/img/logo500.png'
import eye from '../assets/img/eye.png'
import youtube from '../assets/img/youtube.png'
import ed from '../assets/img/ed.png'
import { useTranslation } from "react-i18next"

function Header({menu, isLoading}) {
    const [visible, setVisible] = React.useState(false)
    //колапсы состояния мобильного меню открыт-закрыт по номеру
    const [openMenu, setOpenMenu] = React.useState([false, false, false, false])
    //Режим для слабовидящих
    const [blind, setBlind] = React.useState(true)
    const {t} = useTranslation()
    const curLng = localStorage.getItem('lng')
    
    const menuPress = (i) => {
        const newMenu = [...openMenu]
        newMenu[i] = !openMenu[i]
        setOpenMenu(newMenu)
    }
    //Состояние кнопки меню
    const [menuStatus, setMenuStatus] = React.useState(true)
    let menuIcon = 'Меню'
    menuStatus ? menuIcon = 'Меню' : menuIcon = 'X'

    //Ловим клик по кнопке меню для смены значка 
    const handleClick = (e) => {
        const target = e.target
        if ((target.matches('#dropdown-button-drop-start'))) {
            if (menuStatus === true) {
                setMenuStatus(menuStatus => !menuStatus)
            } else {
                setMenuStatus(menuStatus => !menuStatus)
            }
        }
    }
    //Ловим клик вне меню для смены значка при закрытии
    const rootEl = React.useRef(null)
    React.useEffect(() => {
      const onClick = e => {
          if (!rootEl.current.contains(e.target)) {
            //console.log('Клик вне блока = ', menuStatus)
            if (document.getElementById('dropdown-button-drop-start').textContent !== 'Меню') {
                setMenuStatus(menuStatus => !menuStatus)
            }            
          }  
      } 
      document.addEventListener('click', onClick)

    }, []) 
    const BlindClick = (e) => {
        e.preventDefault()
        blind ? document.body.classList.add('blind') :  document.body.classList.remove('blind') 
        setBlind(!blind)
    }
    const renderMenu = (type) => {
        if (menu.show) {
            let listMenu
            switch (type) {
                case 'man': 
                    listMenu = menu.show.filter(cats => cats.cat === 'man')      
                    return (isLoading ? 'loading' : listMenu.map((item, index) => (
                            <NavDropdown.Item href={`/show/${item.id}`}>{curLng === "ru" ? item.title : item.titleTAT !== "" ? item.titleTAT : item.title} {item.edro === '1' ? <img height="20px" src={ed}/> : ''}</NavDropdown.Item>
                        )) 
                    )
                case 'kids':
                    listMenu = menu.show.filter(cats => cats.cat === 'kids')      
                    return (isLoading ? 'loading' : listMenu.map((item, index) => (
                            <NavDropdown.Item href={`/show/${item.id}`} className="text-break">{curLng === "ru" ? item.title : item.titleTAT !== "" ? item.titleTAT : item.title}</NavDropdown.Item>
                        )) 
                    )
                case 'history':
                        listMenu = menu.show.filter(cats => cats.cat === 'history')      
                        return (isLoading ? 'loading' : listMenu.map((item, index) => (
                                <NavDropdown.Item href={`/show/${item.id}`} className="text-break">{curLng === "ru" ? item.title : item.titleTAT !== "" ? item.titleTAT : item.title}</NavDropdown.Item>
                            )) 
                    )
                case 'adm':
                    return (isLoading ? 'loading' : menu.adm.map((item, index) => (
                        <li><NavDropdown.Item href={`/person/${item.id}`} className="text-break">{curLng === "ru" ? item.title : item.titleTAT !== "" ? item.titleTAT : item.title}</NavDropdown.Item></li>
                        )) 
                    )
                case 'person':
                      const listPerson = Object.keys(menu.person).map((key) => {
                        
                            return (
                                menu.person[key].map((item) => (
                                
                                   <li><NavDropdown.Item href={`/person/${item.id}`} className="text-break">{curLng === "ru" ? item.title : item.titleTAT !== "" ? item.titleTAT : item.title}</NavDropdown.Item> </li>
                            )))
                       })
                       return listPerson
                case 'admMobile':
                    return (isLoading ? 'loading' : menu.adm.map((item, index) => (
                        <li><NavDropdown.Item href={`/person/${item.id}`} className="text-break">{curLng === "ru" ? item.title : item.titleTAT !== "" ? item.titleTAT : item.title}</NavDropdown.Item></li>
                        )) 
                    )
                case 'manMobile':
                    listMenu = menu.show.filter(cats => cats.cat === 'man')      
                    return (isLoading ? 'loading' : listMenu.map((item, index) => (
                            <li><NavDropdown.Item href={`/show/${item.id}`}>{curLng === "ru" ? item.title : item.titleTAT !== "" ? item.titleTAT : item.title}</NavDropdown.Item></li>
                        )) 
                    )
                case 'kidsMobile':
                    listMenu = menu.show.filter(cats => cats.cat === 'kids')      
                    return (isLoading ? 'loading' : listMenu.map((item, index) => (
                            <li><NavDropdown.Item href={`/show/${item.id}`} className="text-break">{curLng === "ru" ? item.title : item.titleTAT !== "" ? item.titleTAT : item.title}</NavDropdown.Item></li>
                        )) 
                    )
                case 'historyMobile':
                        listMenu = menu.show.filter(cats => cats.cat === 'history')      
                        return (isLoading ? 'loading' : listMenu.map((item, index) => (
                                <li><NavDropdown.Item href={`/show/${item.id}`} className="text-break">{curLng === "ru" ? item.title : item.titleTAT !== "" ? item.titleTAT : item.title}</NavDropdown.Item></li>
                            )) 
                        )
                default: 
                    return 'no type menu parametr'
            }
           
        } else {
            console.log('no data(')
        }
    }
 
   
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2 col-6">
                    <Link to="/">
                    <div className="logo">
                        <img src={logo} alt="logo" width="200px" />
                    </div>
                    </Link>
                </div>
                <div className="col-md-6 col-lg-7 col-xl-8  d-none d-md-block ">
                    <div className="row menu">
                        <div className="col-4 ">
                            <ul>
                                <li>
                                    <NavDropdown title={t('menu_look')} id="basic-nav-dropdown">
                                        <div className='row'>
                                            <div className="col-md-4">
                                                <h3 className='ps-2'>{t('menu_adult')}</h3>
                                                {renderMenu('man')}
                                            </div>
                                            <div className="col-md-4">
                                                <h3>{t('menu_kids')}</h3>
                                                {renderMenu('kidsMobile')}
                                            </div>
                                            <div className="col-md-4">
                                                <h3>{t('menu_history')}</h3>
                                                {renderMenu('history')}
                                            </div>
                                        </div>
                                    </NavDropdown>


                                </li>
                                <li>
                                    <Link to="/news/"  className='link-font'>{t('menu_read')}</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-4">
                            <ul>

                                <li>
                                    <NavDropdown title={t('menu_meet')} id="basic-nav-dropdown">
                                        <div className='row'>
                                            <h3 className='ps-3'>{t('menu_ruk')}</h3>
                                            <ol className='artistList'>
                                            {renderMenu('adm')}
                                            </ol>
                                        </div>
                                        <div className='row'>
                                            <h3 className='ps-3'>{t('menu_artist')}</h3>
                                            <ol className='artistList'>
                                             {renderMenu('person')}
                                            </ol>
                                        </div>
                                    </NavDropdown>
                                </li>
                                <li>
                                    <Link to="/news/112"  className='link-font'>{t('menu_about')}</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-4">
                            <ul>
                                <li className='pt-2'><Link to="/news/165" className='link-font'>{t('menu_contact')}</Link></li>
                                <li>
                                    <NavDropdown title={t('menu_diff')} id="basic-nav-dropdown"> 
                                        <NavDropdown.Item href='https://xn--j1afdb.xn--80aa2abfodnqc1e7a6c.xn--80asehdb/form.php?i=296' className="text-break">Анкета-опросник</NavDropdown.Item>
                                        <NavDropdown.Item href='/news/117' className="text-break">Афиша</NavDropdown.Item>
                                        <NavDropdown.Item href='/news/114' className="text-break">Билеты и услуги</NavDropdown.Item>
                                        <NavDropdown.Item href='/news/819' className="text-break">Добрые дела</NavDropdown.Item>
                                        <NavDropdown.Item href='/news/167' className="text-break">Фестивали</NavDropdown.Item>
                                        <NavDropdown.Item href='/news/122' className="text-break">Закупки</NavDropdown.Item>
                                        <NavDropdown.Item href='/news/514' className="text-break">Отчет о выполнение гос. задания</NavDropdown.Item>
                                        <NavDropdown.Item href='/news/515' className="text-break">Независимая оценка качества оказания услуг</NavDropdown.Item>
                                        <NavDropdown.Item href='/news/808' className="text-break">Оказание бесплатной юридической помощи</NavDropdown.Item>
                                        <NavDropdown.Item href='/news/809' className="text-break">Политика в сфере противодействия коррупции</NavDropdown.Item>
                                        <NavDropdown.Item href='/news/306' className="text-break">Разное (ссылки)</NavDropdown.Item>
                                        <NavDropdown.Item href='/news/307' className="text-break">Документы</NavDropdown.Item>
                                    
                                    </NavDropdown>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-lg-3 col-xl-2 col-6 d-flex justify-content-end">
                    <div className="sab-menu">
                        <div className="row p-0 m-0">
                            <div className="col-6 p-0">
                                <Link to="#" onClick={(e) => BlindClick(e)}> <img src={eye} /> </Link>

                            </div>
                            <div className="col-6 p-0" >
                           
                                <NavDropdown onClick={(e) => handleClick(e)} ref={rootEl} title={menuIcon}  id="dropdown-button-drop-start" drop="start" className='mobile-menu-link' >  
                                   
                                    <ul class="mobile-menu">
                                        <li onClick={() => menuPress(0)} aria-controls="example-collapse-text" aria-expanded={setOpenMenu[0]}>
                                         {t('menu_look')}
                                             <Collapse in={openMenu[0]}>
                                                <ul className='sub-menu'>
                                                    <li><b>{t('menu_adult')}</b></li>
                                                   {renderMenu('manMobile')}
                                                   <li><b>{t('menu_kids')}</b></li>
                                                   {renderMenu('kidsMobile')}
                                                   <li><b>{t('menu_history')}</b></li>
                                                   {renderMenu('historyMobile')}
                                                </ul>
                                             </Collapse>
                                        </li>
                                        <li>
                                            <Link to="/news">{t('menu_read')}</Link>
                                        </li>
                                        <li onClick={() => menuPress(1)} aria-controls="example-collapse-text" aria-expanded={setOpenMenu[1]}>
                                            {t('menu_meet')}
                                             <Collapse in={openMenu[1]}>
                                                <ul className='sub-menu'>
                                                    <li><b>{t('menu_ruk')}</b></li>
                                                    {renderMenu('admMobile')}
                                                    <li><b>{t('menu_artist')}</b></li>
                                                    {renderMenu('person')}
                                                </ul>
                                             </Collapse>
                                        </li>
                                        <li><Link to="/news/112">{t('menu_about')}</Link></li>
                                        <li>
                                            <Link to="/news/165">{t('menu_contact')}</Link>
                                        </li>
                                        <li onClick={() => menuPress(2)}  aria-controls="example-collapse-text" aria-expanded={setOpenMenu[2]}>
                                            {t('menu_diff')}
                                            <Collapse in={openMenu[2]}>
                                                <ul className='sub-menu'>
                                                <li><NavDropdown.Item href='https://xn--j1afdb.xn--80aa2abfodnqc1e7a6c.xn--80asehdb/form.php?i=296' className="text-break">Анкета-опросник</NavDropdown.Item></li>
                                                <li><NavDropdown.Item href='/news/117' className="text-break">Афиша</NavDropdown.Item></li>
                                                <li><NavDropdown.Item href='/news/114' className="text-break">Билеты и услуги</NavDropdown.Item></li>
                                                <li><NavDropdown.Item href='/news/819' className="text-break">Добрые дела</NavDropdown.Item></li>
                                                <li><NavDropdown.Item href='/news/167' className="text-break">Фестивали</NavDropdown.Item></li>
                                                <li><NavDropdown.Item href='/news/122' className="text-break">Закупки</NavDropdown.Item></li>
                                                <li><NavDropdown.Item href='/news/514' className="text-break">Отчет о выполнение гос. задания</NavDropdown.Item></li>
                                                <li><NavDropdown.Item href='/news/515' className="text-break">Независимая оценка качества оказания услуг</NavDropdown.Item></li>
                                                <li><NavDropdown.Item href='/news/808' className="text-break">Оказание бесплатной юридической помощи</NavDropdown.Item></li>
                                                <li><NavDropdown.Item href='/news/809' className="text-break">Политика в сфере противодействия коррупции</NavDropdown.Item></li>
                                                <li><NavDropdown.Item href='/news/306' className="text-break">Разное (ссылки)</NavDropdown.Item></li>
                                                <li><NavDropdown.Item href='/news/307' className="text-break">Документы</NavDropdown.Item></li>
                                        
                                                </ul>
                                            </Collapse>

                                        </li>
                                     
                                    </ul>
                                </NavDropdown>
                            </div>
                        </div>
                        <div className="row p-0 m-0">
                            <div className="col-6 p-0">
                                <a href="https://www.youtube.com/channel/UC8FQlWOt3MjWsKX5Utp8niw" target="_blank"> <img src={youtube} /> </a>
                            </div>
                            <div className="col-6 p-0" id="languageswitch">
                                <LanguageSwitch/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Header