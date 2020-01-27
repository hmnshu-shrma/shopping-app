import Baby from 'Assets/images/category/baby.png'
import Bakery from 'Assets/images/category/bakery.png'
import Beauty from 'Assets/images/category/beauty.png'
import Beverages from 'Assets/images/category/beverages.png'
import Fruits from 'Assets/images/category/fruits.png'
const BannerImages =  [
  {name:'fruits', image:Fruits},
  {name:'bakery', image:Bakery},
  {name:'beverages', image: Beverages},
  {name:'beauty', image:Beauty},
  {name :'baby', image :Baby},
]

const banners = [
  {
    img_name:'fruits',
    imt_alt:'Fruits.png',
    heading:' Friuts & vegetables',
    description:'A variety of fresh fruits an vegetables',
    button:'Explore Friuts-and-Veg',
    link:'products'
  },
  {
    img_name:'bakery',
    imt_alt:'bakery.png',
    heading:'Bakery Cakes and Dairy',
    description:'The best cupcakes,cookies,pies,cheesecakes, fresh bread, biscotti, muffins, bagels, fresh coffee, milk and more.',
    button:'Explore Bakery-cakes-dairy',
    link:'products'
  },
  {
    img_name:'beverages',
    imt_alt:'beverages.png',
    heading:'Beverages',
    description:'Our Beverages Department will ensure that your fridge will always be fully stocked. Shop for soda,juice,beer and more.',
    button:'Explore Beverages',
    link:'products'
  },
  {
    img_name:'beauty',
    imt_alt:'beauty.png',
    heading:'Beauty and Hygiene',
    description:'Buy beauty and personal care products online in India at best prices.',
    button:'Explore Beauty and hygiene',
    link:'products'
  },
  {
    img_name:'baby',
    imt_alt:'baby.png',
    heading:'Baby Care',
    description:'Shop for baby care products, diapers, skin care products etc.',
    button:'Explore Baby',
    link:'products'
  },
]
export default banners

export { BannerImages }
