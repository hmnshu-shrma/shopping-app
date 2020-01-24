import React from 'react'
import BannersConst from 'Constants/'
import { uuid } from 'uuidv4'
import path from 'path'
const Banners = (props) => {
  console.error(BannersConst)
  const listItems = BannersConst.map((number ,id) => {
  const {
    img_name: imageName,
    imt_alt: imageAlt
    } = number
        return (<img src={path.resolve(__dirname, `/srv_fe/assets/images/category/${imageName}.png`)} key={uuid()} alt={imageAlt} />)
    }
  )
  return (
    <React.Fragment>
      {listItems}
    </React.Fragment>
  )
}

export default Banners
