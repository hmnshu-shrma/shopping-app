import React, { Component } from 'react'
import Navigation from './navigation.views'
import ProductList from './productlist.views'
import Banners from './banners.views'
import Carousel from './carousel.views'
class AppContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <Carousel />
        <Banners props='himanshu' />
        <ProductList />
      </React.Fragment>
    )
  }
}

export default AppContainer
