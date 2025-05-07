import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AllProducts from '../products/AllProducts';
import { useDispatch, useSelector } from 'react-redux';
import { AddToCart } from "../../features/cartSlice";

const ProductPhoneSection = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams(); 
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allCart.items);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/search?q=phone`);
        const data = await response.json();
        const foundProduct = data.products.find(p => p.id === parseInt(id));
        setProduct(foundProduct);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <div>
    <div className='flex w-2xl p-4 mt-20'>
      {product ? (
        <div className='p-4 shadow-lg rounded-lg'>
          <h1 className='text-4xl font-bold mb-4'>{product.title}</h1>
          <img src={product.thumbnail} alt={product.title} className='w-64 hover:scale-110 duration-300 h-64 object-cover mx-auto mb-4' />
          <p className='text-lg mb-2'>{product.description}</p>
          <p className='text-xl text-green-600'>Price: ${product.price}</p>
          <button onClick={() => {
                        dispatch(AddToCart(products));
                      }} className='bg-gray-400 float-right p-2 rounded-lg'>Add to cart</button>
        </div>
      ) : (
        <p className='text-xl'>Loading product details...</p>
      )}
    </div>
      <AllProducts/>
    </div>
  );
};

export default ProductPhoneSection;
