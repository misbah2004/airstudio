import React from 'react'
import ProductDetailSection from '../components/Details/ProductDetailSection'
import ProductDescriptionSection from '../components/Details/ProductDescriptionSection'
import ProductsSection from '../components/products/ProductsSection'

const ProductDetailsPage = () => {
  // const tophead = ;
  // const midhead = ;

  return (
    <div>
      <ProductDetailSection/>
      <ProductDescriptionSection/>
      <ProductsSection  tophead={"Recently Viewed"} midhead={"People Also Bought"}/>
    </div>
  )
}

export default ProductDetailsPage
