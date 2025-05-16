import React, { useState } from 'react'
import ShopHeroSection from '../components/home/ShopHeroSection'
import ProductsSection from '../components/products/ProductsSection'
import SubscriptionSection from '../components/subscribtion/SubscriptionSection'
import ProductSideSection from '../components/products/ProductSideSection'
 
const ShopPage = () => {
  
  const [selectedCategory, setSelectedCategory] = useState('All')
  
  return (
    <div>
      <ShopHeroSection heading={"Shop"}  />
      <div className='mt-20'><ProductsSection component={<ProductSideSection setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory}/>}selectedCategory={selectedCategory}  /></div>
      <SubscriptionSection/>
    </div>
  )
}

export default ShopPage
