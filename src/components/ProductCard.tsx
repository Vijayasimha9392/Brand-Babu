import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Product } from '../types';
import { useCartStore } from '../store/cartStore';
import { ShoppingBag, Star } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const navigate = useNavigate();
  const addItem = useCartStore((state) => state.addItem);

  const handleClick = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="cursor-pointer" onClick={handleClick}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover hover:opacity-90 transition-opacity"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
          <p className="text-gray-600 mt-1">${product.price}</p>
          <div className="flex items-center mt-2">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
            <span className="ml-2 text-sm text-gray-500">
              ({product.reviews.length} reviews)
            </span>
          </div>
        </div>
      </div>
      <div className="px-4 pb-4">
        <button
          onClick={(e) => {
            e.stopPropagation();
            addItem(product);
          }}
          className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 flex items-center justify-center space-x-2"
        >
          <ShoppingBag className="w-5 h-5" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
}