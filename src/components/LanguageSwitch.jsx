import React from "react"
import { useTranslation } from "react-i18next"
import { Link } from 'react-router-dom'

function LanguageSwitch() {
  const { i18n } = useTranslation()
  const [lngstate, setLngstate] = React.useState('ru')
  const changeru = () => {
    i18n.changeLanguage('ru')
    console.log('change lng')
    localStorage.setItem("lng", 'ru')
    LanguageSwitch.forceUpdate()
  }
  const changetat = () => {
    i18n.changeLanguage('tat')
    console.log('change lng')
    localStorage.setItem("lng", 'tat')
    LanguageSwitch.forceUpdate()
  }

  return (
    <>
      <Link to='#' className='link-font white-link changelng' onClick={changeru.bind()}>РУ</Link>  / 
      <Link to='#' className='link-font white-link changelng' onClick={changetat.bind()}>ТАТ</Link>
    </>
  )
}

export default LanguageSwitch