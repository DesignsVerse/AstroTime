import React from 'react';
import Image from 'next/image';

// Define the type for each product
interface Product {
  name: string;
  price: number;
  image: string; // Assuming the image is a URL or path to the asset
}

// Sample product data (you can replace this with a dynamic fetch from an API)
const products: Product[] = [
  {
    name: 'Pale Emerald Gem',
    price: 5.00,
    image: '/ruby.png',
  },
  {
    name: 'Agate Palm Stone',
    price: 9.00,
    image: '/ruby.png',
  },
  {
    name: 'Blue Mineral Rock',
    price: 6.00,
    image: '/ruby.png',
  },
  {
    name: 'Mineral Crystal Fluorapatite',
    price: 10.00,
    image: '/ruby.png',
  },
];

// The main component
const ComponentStore: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Gems & Crystal Stones</h1>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300"
            >
              {/* Product Image */}
              <div className="relative h-40 w-40 mx-auto mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-md"
                />
              </div>

              {/* Product Name */}
              <h3 className="text-lg font-semibold text-gray-700 mb-2">{product.name}</h3>

              {/* Product Price */}
              <p className="text-xl font-bold text-indigo-600">${product.price.toFixed(2)}</p>

              {/* Add to Cart Button */}
              <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-200">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComponentStore;