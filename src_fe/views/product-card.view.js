import React from 'react'
import 'Styles/product-card.scss'
import { uuid } from 'uuidv4'
import productimages from 'Constants/productimages'
const ProductCard = (props) => {
  const { products } = props
  const addToCart = ( event ,args) => {
    event.preventDefault()
    console.log(args)
  }
  return (
    <React.Fragment>
      {
        products ? products.map((product, mapid) => {
          const { name ,prodname, description ,price, id } = product
          // const { name ,prodname, description ,price, id } = product
          const imgTag = ( prodname === productimages[mapid].name ) ? <img src={productimages[mapid].src} alt={name} className='product-img' /> : 'no image found'
          return (
            <div className='product-cards' key={uuid(mapid)}>
              <p className='product-name'>
                {name}
              </p>
              {imgTag}
              <p className='product-desc'>
                {description}
              </p>
              <div className='product-cta-container'>
                <p className='product-price'>
                  MRP Rs.{price}
                </p>
                <button onClick={e => addToCart(e,id)} className='btn-cta'>
                  Buy Now
                </button>
              </div>
            </div>
          )
        }
      ) : 'No product Found'}
    </React.Fragment>
  )
}

const MemonisedProductCard = React.memo(ProductCard)
export default MemonisedProductCard
