import React from 'react'
import Cart from './cart.views'
import Logo from 'Assets/images/logo.png'
import '../styles/navigation.scss'
class Navigation extends React.Component {
  render() {
    return (
      <React.Fragment>
        <nav>
          <div className='navigation'>
            <img className='logo' src={Logo} alt='logo image' />
            <Cart />
          </div>
        </nav>
      </React.Fragment>
    )
  }
}

export default Navigation
