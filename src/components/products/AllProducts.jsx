import React, { useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

const fetchPhones = async (page) => {
  const limit = 8;
  const skip = (page - 1) * limit;
  const response = await fetch(`https://dummyjson.com/products/search?q=phone&limit=${limit}&skip=${skip}`);
  if (!response.ok) {
    throw new Error("Failed to fetch phones");
  }
  return response.json();
};

const AllProducts = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useQuery(["phones", page], () => fetchPhones(page), {
    keepPreviousData: true,
  });

  const products = data?.products || [];
  const total = data?.total || 0;
  const limit = data?.limit || 8;
  const totalPages = Math.ceil(total / limit);

  if (isLoading) return <p className="text-center">Loading...</p>;
  if (isError) return <p className="text-center text-red-500">Error fetching data</p>;
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Phone Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition hover:shadow-2xl"
          >
            <Link to={`/productphone/${product.id}`} onClick={() => window.scrollTo(0, 0)}>
              <img
                src={product.thumbnail}
                alt={product.title}
                className="h-48 w-full object-contain"
              />
            </Link>
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
       <div className="mt-6 flex justify-center gap-4">
        <button
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
        >
          Previous
        </button>
        <span className="self-center text-sm text-gray-700">
          Page {page} of {totalPages}
        </span>
        <button
          disabled={page === totalPages}
          onClick={() => setPage((prev) => prev + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllProducts;
