import React from 'react'
import { Link } from 'react-router-dom'

const Button = (props) => {
	return (
		<Link to={props.link} className="btn btn-default">
			<span>Купить билет</span>
		</Link>
	)
}

export default Button