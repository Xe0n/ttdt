import React from 'react'
import { Link } from 'react-router-dom'
import { NavDropdown } from 'react-bootstrap'


import logo from '../assets/img/logo500.png'
import eye from '../assets/img/eye.png'
import youtube from '../assets/img/youtube.png'

function Header() {

    const [visible, setVisible] = React.useState(false)
    const options = ['one', 'two', 'three']
    const defaultOption = options[0]
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2 col-6">
                    <div className="logo">
                        <img src={logo} alt="logo" width="200px" />
                    </div>
                </div>
                <div className="col-md-6 col-lg-7 col-xl-8  d-none d-md-block ">
                    <div className="row menu">
                        <div className="col-4 ">
                            <ul>
                                <li>
                                    <NavDropdown title="Смотрите" id="basic-nav-dropdown">
                                        <div className='row'>
                                            <div class="col-md-4">
                                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                            </div>
                                            <div class="col-md-4">
                                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                            </div>
                                            <div class="col-md-4">
                                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                            </div>
                                        </div>
                                    </NavDropdown>


                                </li>
                                <li>
                                    <NavDropdown title="Читайте" id="basic-nav-dropdown"> </NavDropdown>
                                </li>
                            </ul>
                        </div>

                        <div className="col-4">
                            <ul>

                                <li>
                                    <NavDropdown title="Знакомьтесь" id="basic-nav-dropdown"> </NavDropdown>
                                </li>
                                <li>
                                    <NavDropdown title="О театре" id="basic-nav-dropdown"> </NavDropdown>
                                </li>
                            </ul>
                        </div>

                        <div className="col-4">
                            <ul>
                                <li className='pt-2'><Link to="/" className='link-font'>Новости</Link></li>
                                <li>
                                    <NavDropdown title="Разное" id="basic-nav-dropdown"> </NavDropdown>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-lg-3 col-xl-2 col-6 d-flex justify-content-end">
                    <div class="sab-menu">
                        <div class="row">
                            <div class="col-6 p-0">
                                <Link to="#"> <img src={eye} /> </Link>

                            </div>
                            <div class="col-6 p-0">
                                <NavDropdown title="Меню" id="dropdown-button-drop-start" drop="start" className='mobile-menu-link'>
                                    <ul>
                                        <li>123
                                            <ul>
                                                <li>13213</li>
                                                <li>123</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </NavDropdown>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6 p-0">
                                <Link to="#"> <img src={youtube} /> </Link>
                            </div>
                            <div class="col-6 p-0">
                                <Link to='#' className='link-font white-link'>РУ</Link>  / <Link to='#' className='link-font white-link'>ТАТ</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Header