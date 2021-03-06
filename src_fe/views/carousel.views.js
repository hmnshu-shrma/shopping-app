import React from 'react'
import 'Styles/carousel.scss'
import Offer1 from 'Assets/images/offers/offer1.jpg'
import Offer2 from 'Assets/images/offers/offer2.jpg'
import Offer3 from 'Assets/images/offers/offer3.jpg'
import Offer4 from 'Assets/images/offers/offer4.jpg'
import Offer5 from 'Assets/images/offers/offer5.jpg'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

class BannerCarousel extends React.Component {
  constructor(props){
    super(props)
    this.state={
      items: [
        <div key={1} className='item'><img src={Offer1} alt='1' /></div>,
        <div key={2} className='item'><img src={Offer2} alt='2' /></div>,
        <div key={3} className='item'><img src={Offer3} alt='3' /></div>,
        <div key={4} className='item'><img src={Offer4} alt='4' /></div>,
        <div key={5} className='item'><img src={Offer5} alt='5' /></div>
	     ]
    }
  }
  render() {
    const {items} = this.state
      return (
        <React.Fragment>
          <div className='carousel-container'>
            <Carousel
              showArrows={false}
              showStatus={false}
              showThumbs={false}
              infiniteLoop
              autoPlay
            >
              {items}
            </Carousel>
          </div>


        </React.Fragment>
      )
  }
}

export default BannerCarousel
