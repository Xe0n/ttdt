import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
	return (
		<div className="container-fluid footer pb-5 px-3">
			<div className="row p-5">
				<div className="col-md-2">
					<ul>
						<li> <Link to="/">Ссылка 1</Link> </li>
						<li> <Link to="/">Ссылка 2</Link> </li>
						<li> <Link to="/">Ссылка 3</Link> </li>
						<li> <Link to="/">Ссылка 4</Link> </li>
						<li> <Link to="/">Ссылка 5</Link> </li>
					</ul>
				</div>
				<div className="col-md-2">
					<ul>
						<li> <Link to="/">Ссылка 1</Link> </li>
						<li> <Link to="/">Ссылка 2</Link> </li>
						<li> <Link to="/">Ссылка 3</Link> </li>
						<li> <Link to="/">Ссылка 4</Link> </li>
						<li> <Link to="/">Ссылка 5</Link> </li>
					</ul>
				</div>
				<div className="col-md-2">
					<ul>
						<li> <Link to="/">Ссылка 1</Link> </li>
						<li> <Link to="/">Ссылка 2</Link> </li>
						<li> <Link to="/">Ссылка 3</Link> </li>
						<li> <Link to="/">Ссылка 4</Link> </li>
						<li> <Link to="/">Ссылка 5</Link> </li>
					</ul>
				</div>
				<div className="col-md-3">
					<ul>
						<li>Телефон для справок</li>
						<li>7-26-08, 7-22-67 </li>
					</ul>
				</div>
				<div className="col-md-3">
					<ul>
						<li>Адрес</li>
						<li>Республика Башкортостан, г.Туймазы, площадь Октября, дом 3</li>
						<li>Социальные сети</li>
						<li> <Link to="/">VK</Link> <Link to="/">Inst</Link> <Link to="/">FB</Link></li>
					</ul>
				</div>
			</div>
			<div className="row text-center">
				<p>ТУЙМАЗИНСКИЙ ГОСУДАРСТВЕННЫЙ ТАТАРСКИЙ ДРАМАТИЧЕСКИЙ ТЕАТР</p>
			</div>
		</div>
	)
}

export default Footer