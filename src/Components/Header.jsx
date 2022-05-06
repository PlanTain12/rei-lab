import React from 'react'
import '../Scss/header.scss'
import Logo from '../Assets/logo.svg'
import { Link } from 'react-router-dom'
import Burger from './Burger.jsx'


function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <Link to='/'>
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="header__main m-h">
          <div className="m-h__menu">
            <Link to='/about' >О нас</Link>
            <Link to='/work' >Услуги и работы</Link>
            <Link to='/contacts' >Контакты</Link>
          </div>
          <div className="m-h__buttons b-m-h">
            <div className="b-m-h__button">
              <button>Оставить заявку</button>
            </div>
            <div className="b-m-h__icon">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
      <Burger />
    </header>
  )
}

export default Header