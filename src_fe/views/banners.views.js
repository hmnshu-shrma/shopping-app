import React from 'react'
import BannersConst , { BannerImages} from 'Constants/'
import { uuid } from 'uuidv4'
// import path from 'path'
const Banners = (props) => {
  const bannersComponent = BannersConst.map((number ,id) => {
    const {
      img_name: imageName,
      imt_alt: imageAlt
    } = number
    return if ( BannerImages[id].name === imageName ){
      <img src={BannerImages[id].image} key={uuid()} alt={imageAlt} className='banner-image' />
    } else {
      `no image found ${id}`
    }
  })
  return (
    <React.Fragment>
      {bannersComponent}
    </React.Fragment>
  )
}

export default Banners
