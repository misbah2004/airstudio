import React, { useEffect, useState } from "react";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchPhones = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products/search?q=phone");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("Fetched Phones:", data.products); // Console mein check
        setProducts(data.products); // State mein save
      } catch (error) {
        console.error("Error fetching phones:", error);
      }
    };

    fetchPhones();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Phone Products</h2>
      <ul className="space-y-2">
        {products.map((product) => (
        <div className="p-8">
        <h2 className="text-2xl font-bold mb-6">Phone Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition hover:shadow-2xl"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="h-48 w-full object-contain"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{product.title}</h3>
                <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                  {product.description}
                </p>
                <p className="text-black font-bold">${product.price}</p>
                <p className="text-xs text-gray-400">Brand: {product.brand}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
        ))}
      </ul>
    </div>
  );
};

export default AllProducts;

