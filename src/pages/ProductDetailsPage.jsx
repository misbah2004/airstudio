import React from 'react'
import ProductDetailSection from '../components/Details/ProductDetailSection'
import ProductDescriptionSection from '../components/Details/ProductDescriptionSection'
import ProductsSection from '../components/products/ProductsSection'

const ProductDetailsPage = () => {
  return (
    <div>
      <ProductDetailSection/>
      <ProductDescriptionSection/>
      <ProductsSection/>
    </div>
  )
}

export default ProductDetailsPage
