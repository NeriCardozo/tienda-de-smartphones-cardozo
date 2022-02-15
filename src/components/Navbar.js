import React from 'react';
import './navbar.css'
import CartWidget from './CartWidget.js'

function NavBar() {
  return (
    <div className="header">
 <img className='header_logo'
        alt=' '
src='https://previews.123rf.com/images/findriyani/findriyani1902/findriyani190200477/116365758-vettore-del-logo-dello-smartphone.jpg?fj=1'
/>         

    <div className="header_text"> <a href="#">Samsung</a></div>
    <div className="header_text"><a href="#">Apple</a></div>
    <div className="header_text"><a href="#">Xiaomi</a></div>
    <div className="header_text"><a href="#">Otras marcas</a></div>

    <CartWidget />

</div>
  )
  ;
}

export default NavBar;