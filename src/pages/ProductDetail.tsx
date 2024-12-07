import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import { ColorSelector } from '../components/ProductDetails/ColorSelector';
import { SizeSelector } from '../components/ProductDetails/SizeSelector';
import { ReviewSection } from '../components/ProductDetails/ReviewSection';
import { SimilarProducts } from '../components/ProductDetails/SimilarProducts';
import { products } from './Products';

export function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const addItem = useCartStore((state) => state.addItem);
  
  const product = products.find((p) => p.id === Number(id));
  
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || '');
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || '');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Product not found</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-lg"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          <p className="text-2xl font-semibold text-gray-900 mt-2">
            ${product.price}
          </p>
          <p className="mt-4 text-gray-600">{product.description}</p>

          <ColorSelector
            colors={product.colors}
            selectedColor={selectedColor}
            onColorSelect={setSelectedColor}
          />

          <SizeSelector
            sizes={product.sizes}
            selectedSize={selectedSize}
            onSizeSelect={setSelectedSize}
          />

          <div className="mt-6">
            <h3 className="text-sm font-medium text-gray-700">Specifications</h3>
            <dl className="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200">
              {product.specifications.map((spec) => (
                <div key={spec.label} className="py-3 flex justify-between">
                  <dt className="text-sm font-medium text-gray-500">{spec.label}</dt>
                  <dd className="text-sm text-gray-900">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <button
            onClick={() => addItem(product)}
            className="mt-8 w-full bg-black text-white py-3 px-4 rounded-md hover:bg-gray-800 flex items-center justify-center space-x-2"
          >
            <ShoppingBag className="w-5 h-5" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>

      <ReviewSection reviews={product.reviews} rating={product.rating} />
      
      <SimilarProducts products={products} currentProductId={product.id} />
    </div>
  );
}