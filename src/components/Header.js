import React, { Component } from 'react';
import '../App.css'
import facebooklogo from '../assets/facebooklogo.png';
import account_circle from '../assets/account_circle.png';

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
            <img src={facebooklogo} className="logo"/>
            <div>
              <span id="profileText">Meu Perfil</span>
              <img src={account_circle} className="account_circle"/>
            </div>
        </nav>
      </header>
    )
    
  }
}

export default Header;