import React from 'react'
import ProductDetailSection from '../components/Details/ProductDetailSection'
import ProductDescriptionSection from '../components/Details/ProductDescriptionSection'
import ProductsSection from '../components/products/ProductsSection'

const ProductDetailsPage = () => {
  const tophead = "People Also Bought";
  const midhead = "Recently Viewed";
  return (
    <div>
      <ProductDetailSection/>
      <ProductDescriptionSection/>
      <ProductsSection tophead={tophead} midhead={midhead}/>
    </div>
  )
}

export default ProductDetailsPage
