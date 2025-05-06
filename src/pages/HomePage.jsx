import React from 'react'
import HomeHeroSection from '../components/home/HomeHeroSection'
import ProductsSection from '../components/products/ProductsSection'
import SalesSection from '../components/sales/SalesSection'
import SubscriptionSection from '../components/subscribtion/SubscriptionSection'
import ProductSideSection from '../components/products/ProductSideSection'
import { MoveRight } from 'lucide-react'
import { Link } from 'react-router-dom'
const HomePage = () => {
  
const head3 = <Link to='/allproducts'><span className="flex gap-x-2 text-gray-500">View All <MoveRight /></span></Link>;

  return (
    <div>
      <HomeHeroSection/>
      <ProductsSection head={"Featured Products"} head2={"Discover our latest collection"} head3={head3} />
      <SalesSection/>
      <SubscriptionSection/>
    </div>
  )
}

export default HomePage
