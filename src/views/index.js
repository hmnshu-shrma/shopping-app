import React, { Component } from 'react'
import Navigation from './navigation.views'
import ProductList from './productlist.views'
class AppContainer extends Component {
  state= {
    name:'Sabka bazaar'
  }

  render() {
    return (
      <React.Fragment>
        <Navigation />
        <ProductList />
      </React.Fragment>
    )
  }
}

export default AppContainer
