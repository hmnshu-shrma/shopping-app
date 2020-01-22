import React from 'react'
import CartImg from 'Assets/images/cart.svg'
const Cart = (props) => {
  return (
    <React.Fragment>
      <div className='cart'>
        <img src={CartImg} alt='cart image' className='cart-img' />
        <p className='cart-text'>0 Items</p>
      </div>
    </React.Fragment>
  )
}
export default Cart
