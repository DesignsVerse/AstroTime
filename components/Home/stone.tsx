import React from 'react';
import Image from 'next/image';

interface Product {
  name: string;
  price: number;
  image: string;
  category?: string;
  rating?: number;
}

const products: Product[] = [
  {
    name: 'Pale Emerald Gem',
    price: 249.99,
    image: '/ruby.png',
    category: 'Rare Gemstones',
    rating: 4.8,
  },
  {
    name: 'Agate Palm Stone',
    price: 89.99,
    image: '/ruby.png',
    category: 'Healing Crystals',
    rating: 4.5,
  },
  {
    name: 'Blue Mineral Rock',
    price: 179.99,
    image: '/ruby.png',
    category: 'Collector Specimens',
    rating: 4.9,
  },
  {
    name: 'Mineral Crystal Fluorapatite',
    price: 349.99,
    image: '/ruby.png',
    category: 'Museum Quality',
    rating: 5.0,
  },
];

const ComponentStore: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAFBFC] py-16 font-serif">
      {/* Premium Header Section */}
      <div className="text-center mb-16 px-4">
        <h1 className="text-5xl font-light text-[#333] mb-4 tracking-wider">LUXURY GEMSTONES</h1>
        <p className="text-lg text-[#666] max-w-2xl mx-auto">
          Curated collection of the world's finest crystals and rare mineral specimens
        </p>
        <div className="w-24 h-px bg-white mx-auto mt-6"></div>
      </div>

      {/* Premium Products Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative bg-[#f9f7f5] overflow-hidden transition-all duration-500 hover:shadow-xl"
            >
              {/* Product Badge */}
              {product.rating === 5.0 && (
                <div className="absolute top-4 right-4 bg-[#d4a373] text-white text-xs px-3 py-1 z-10">
                  EXCLUSIVE
                </div>
              )}

              {/* Product Image Container */}
              <div className="relative h-80 w-full overflow-hidden bg-[#f5f5f5]">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="contain"
                  className="transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>

              {/* Product Details */}
              <div className="p-6 text-center">
                {/* Category */}
                <p className="text-xs text-[#999] uppercase tracking-widest mb-1">
                  {product.category}
                </p>
                
                {/* Name */}
                <h3 className="text-xl font-light text-[#333] mb-2 tracking-wider">
                  {product.name}
                </h3>
                
                {/* Rating */}
                {product.rating && (
                  <div className="flex justify-center items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(product.rating!) ? 'text-[#d4a373]' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-xs text-[#999] ml-1">({product.rating})</span>
                  </div>
                )}
                
                {/* Price */}
                <p className="text-2xl font-light text-[#333] mb-4">
                  ${product.price.toFixed(2)}
                </p>
                
                {/* Add to Cart Button */}
                <button className="w-full py-3 text-sm uppercase tracking-widest border border-[#333] text-[#333] hover:bg-[#333] hover:text-white transition-colors duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <button className="px-8 py-3 border border-[#333] text-[#333] hover:bg-[#333] hover:text-white transition-colors duration-300 text-sm uppercase tracking-widest">
            View Complete Collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComponentStore;