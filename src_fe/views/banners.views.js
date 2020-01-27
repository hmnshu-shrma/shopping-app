import React from 'react'
import BannersConst from 'Constants/'
import { uuid } from 'uuidv4'
import 'Styles/banner.scss'
import { Link } from 'react-router-dom'
// import path from 'path'
const Banners = (props) => {
  const bannersComponent = BannersConst.map((banner ,id) => {
    const {
      imt_alt: imageAlt,
      image,
      heading,
      description,
      button,
      link
    } = banner
    return (
      <div className='banner-component' key={uuid()} >
        <div className='image-container'>
          <img src={image} key={uuid()} alt={imageAlt} className='banner-image' />
        </div>
        <div className='content'>
          <p className='heading'>
            {heading}
          </p>
          <p className='desc'>
            {description}
          </p>
          <Link to={link}>
            <button className='link-button'>
              {button}
            </button>
          </Link>
        </div>
      </div>
    )
  })
  return (
    <React.Fragment>
      
      {bannersComponent}
    </React.Fragment>
  )
}

export default Banners
