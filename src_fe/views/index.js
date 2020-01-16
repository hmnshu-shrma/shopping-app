import React, { Component } from 'react'
import Navigation from './navigation.views'
import ProductList from './productlist.views'
import Banners from './banners.views'
class AppContainer extends Component {
  state = {
    name:'Sabka bazaar'
  }

  render() {
    return (
      <React.Fragment>
        <Navigation />
        <Banners />
        <ProductList />
      </React.Fragment>
    )
  }
}

export default AppContainer
