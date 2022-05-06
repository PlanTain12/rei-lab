import React from 'react';
import { Link } from 'react-router-dom';
import '../Scss/footer.scss';
import Logo from '../Assets/logo.svg'


function Footer() {
  return (
    <footer className="footer">
      <div className="footer__span"></div>
      <div className="footer__container">
        <div className="footer__logo">
          <Link to='/'>
            <img src={Logo} alt="" />
          </Link>
        </div>
        
      </div>
    </footer>
  )
}

export default Footer