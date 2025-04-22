import React from 'react'
import HomeHeroSection from '../components/home/HomeHeroSection'
import ProductsSection from '../components/products/ProductsSection'
import SalesSection from '../components/sales/SalesSection'
import SubscriptionSection from '../components/subscribtion/SubscriptionSection'
const HomePage = () => {
  return (
    <div>
      <HomeHeroSection/>
      <ProductsSection/>
      <SalesSection/>
      <SubscriptionSection/>
    </div>
  )
}

export default HomePage
