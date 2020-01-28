import React from 'react'
import Axios from 'axios'
import MemonisedProductCard from './product-card.view'
class ProductList extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      products:[],
      hasError: true
    }
    
  }
  
  componentWillMount(){
    // get products
    this.getProducts()
    
  }
  
  getProducts = async() => {
    const url = process.env.API_URL
    const responseData = await Axios.get(`${url}products`)
    .then(function(response) {
      return response.data
    })
    .catch(function(error) {
      return error
    })
    this.setState({products:responseData})
  }
  
  
  render() {
    
    const { products } = this.state
    return (
      <React.Fragment>
        <div className='product container'>
          <div className='product-category'>
            <ul>
              <li>
                Fruits & Vegetables
              </li>
              <li>
                Bakery Cakes & Dairy
              </li>
              <li>
                Beverages
              </li>
              <li>
                Beauty & Hygiene
              </li>
              <li>
                Baby Care
              </li>
            </ul>
          </div>
          <div className='product-list'>
            <MemonisedProductCard products={products || ''} />
          </div>
        </div>
      </React.Fragment>
    )
  }
}


const MemonisedProductList = React.memo(ProductList)
export default MemonisedProductList
