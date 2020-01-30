import React from 'react'
import Axios from 'axios'
import 'Styles/product-page.scss'
import { uuid } from 'uuidv4'
import MemonisedProductCard from './product-card.view'
class ProductList extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      products:[],
      hasError: true,
      categories:[]
    }
    
  }
  
  componentWillMount(){
    // get categories
    const categories = this.getCategories()
    // get products
    if(categories) return this.getProducts()
    
  }
  getCategories = async() => {
    const url = process.env.API_URL
    const responseData = await Axios.get(`${url}categories`)
    .then(function(response) {
      return response.data
    })
    .catch(function(error) {
      return error
    })
    this.setState({categories:responseData})
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
  
  
  render(){
    const { products, categories } = this.state
    
    return (
      <React.Fragment>
        <div className='product container'>
          <div className='product-category'>
            <ul>
              { categories.map((category, cid)=>{
                return (
                  <li key={uuid(cid)}>
                    {category.name}
                  </li>
                )})
              }
            </ul>
          </div>
          <div className='product-list'>
            <MemonisedProductCard products={products} />
          </div>
        </div>
      </React.Fragment>
  )
}
}
const MemonisedProductList = React.memo(ProductList)
export default MemonisedProductList
