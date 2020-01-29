import React from 'react'
import 'Styles/product-card.scss'
import { uuid } from 'uuidv4'
import productimages from 'Constants/productimages'
const ProductCard = (props) => {
  const { products } = props
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
              <span className='product-price'>
                MRP Rs.{price}
              </span>
              <button onclick={id} className='btn-cta'>
                Buy Now
              </button>
            </div>
          )
        }
      ) : 'No product Found'}
    </React.Fragment>
  )
}

const MemonisedProductCard = React.memo(ProductCard)
export default MemonisedProductCard
