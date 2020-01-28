import React from 'react'
import 'Styles/banner.scss'
import { uuid } from 'uuidv4'
// import path from 'path'
const ProductCard = (props) => {
  const { products } = props
  console.log(products, props)
  return (
    <React.Fragment>
      { products ? products.map((product, id) => {
        let { imageURL } = product
        return (
          <div className='product-cards' key={uuid(id)}>
            <img src={require(`${imageURL}`)} />
            
          </div>
        )
        
      }) : 'No product Found'}
    </React.Fragment>
  )
}

const MemonisedProductCard = React.memo(ProductCard)
export default MemonisedProductCard
