import React from 'react'
import ShopHeroSection from '../components/home/ShopHeroSection'
import ProductsSection from '../components/products/ProductsSection'
import SubscriptionSection from '../components/subscribtion/SubscriptionSection'
import ProductSideSection from '../components/products/ProductSideSection'
 
const ShopPage = () => {
  // const heading = "Shop";
  
  return (
    <div>
      <ShopHeroSection heading={"Shop"}  />
      <ProductsSection component={<ProductSideSection/>}/>
      <SubscriptionSection/>
    </div>
  )
}

export default ShopPage
