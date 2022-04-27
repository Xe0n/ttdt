import { t } from 'i18next'
import React from 'react'
import { Link } from 'react-router-dom'

const Button = (props) => {
	return (
		<a href={props.link} className="btn btn-default">
			<span>{t('teatr_buy_ticket')}</span>
		</a>
	)
}

export default Button