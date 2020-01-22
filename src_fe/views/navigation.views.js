import React from 'react'
import Cart from './cart.views'
import LoginSignup from './signuplogin.views'
import Logo from 'Assets/images/logo.png'
import '../styles/navigation.scss'
class Navigation extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <nav>
            <div className='navigation'>
              <div className='logo-container'>
                <img className='logo-img' src={Logo} alt='logo image' />
              </div>
              <div className='navlinks-container'>
                <ul className='links'>
                  <li>
                    Home
                  </li>
                  <li>
                    Products
                  </li>
                </ul>
              </div>
              <div className='cart-login-container'>
                <LoginSignup />
                <Cart />
              </div>
            </div>
          </nav>
        </header>
      </React.Fragment>
    )
  }
}

export default Navigation
