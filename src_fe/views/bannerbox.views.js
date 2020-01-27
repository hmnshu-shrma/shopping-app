import React from 'react'

const BannerBox = (props) => {
  return (
    const bannersComponent = BannersConst.map((number ,id) => {
      const {
        img_name: imageName,
        imt_alt: imageAlt
      } = number
      return ( BannerImages[id].name === imageName ) ? <img src={BannerImages[id].image} key={uuid()} alt={imageAlt} className='banner-image' /> : `no image found ${id}`
    })
  )
}

export default BannerBox
