import React, { Component } from 'react'
import Navigation from './navigation.views'
import MemonisedProductList from './product-page.views'
import Banners from './banners.views'
import Footer from './footer.views'
import Carousel from './carousel.views'
import LoginSignupView from './login-signup.views'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

class AppContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='app-container'>
          <Router>
            <Navigation />
            <Switch>
              <Route exact path='/'>
                <Carousel />
                <Banners props='himanshu' />
              </Route>
              <Route path='/products'>
                <MemonisedProductList />
              </Route>
              <Route path='/login'>
                <LoginSignupView />
              </Route>

            </Switch>
          </Router>
          <Footer />
        </div>
      </React.Fragment>
)
}
}

export default AppContainer
