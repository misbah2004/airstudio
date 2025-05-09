import React, { useState } from "react";

export default function ProductUploadPage() {
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [discountPrice, setDiscountPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("");
  const [inStock, setInStock] = useState(true);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages([...images, ...files]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    setImages([...images, ...files]);
  };

  const handleDeleteImage = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const productData = {
      title,
      description,
      price,
      discountPrice,
      quantity,
      category,
      tags: tags.split(","),
      inStock,
      images,
    };
    console.log("Uploading product:", productData);
    // Backend API call here
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Upload New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Image Upload */}
        <div>
          <label className="block font-medium mb-1">Product Images</label>
          <div
            className="w-full p-4 border-2 border-dashed rounded text-center cursor-pointer bg-gray-50 hover:bg-gray-100"
            onClick={() => document.getElementById("imageInput").click()}
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
          >
            <p className="text-gray-600">Click or drag & drop images here</p>
            <input
              type="file"
              accept="image/*"
              id="imageInput"
              multiple
              onChange={handleImageChange}
              className="hidden"
            />
          </div>

          <div className="flex mt-3 gap-3 flex-wrap">
            {images.map((img, i) => (
              <div key={i} className="relative w-20 h-20">
                <img
                  src={URL.createObjectURL(img)}
                  alt="preview"
                  className="w-full h-full object-cover rounded"
                />
                <button
                  type="button"
                  onClick={() => handleDeleteImage(i)}
                  className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 text-xs"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <label className="block font-medium">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded p-2 mt-1"
            required
          />
        </div>

        <div>
          <label className="block font-medium">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border rounded p-2 mt-1"
            rows="4"
          ></textarea>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">Price</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full border rounded p-2 mt-1"
            />
          </div>

          <div>
            <label className="block font-medium">Discount Price</label>
            <input
              type="number"
              value={discountPrice}
              onChange={(e) => setDiscountPrice(e.target.value)}
              className="w-full border rounded p-2 mt-1"
            />
          </div>

          <div>
            <label className="block font-medium">Quantity</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-full border rounded p-2 mt-1"
            />
          </div>

          <div>
            <label className="block font-medium">Category</label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border rounded p-2 mt-1"
            />
          </div>
        </div>

        <div>
          <label className="block font-medium">Tags (comma separated)</label>
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="w-full border rounded p-2 mt-1"
          />
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={inStock}
            onChange={() => setInStock(!inStock)}
          />
          <label className="font-medium">In Stock</label>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Upload Product
        </button>
      </form>
    </div>
  );
}
