import React from 'react';
import { Product } from '../../types';
import { ProductCard } from '../ProductCard';

interface SimilarProductsProps {
  products: Product[];
  currentProductId: number;
}

export function SimilarProducts({ products, currentProductId }: SimilarProductsProps) {
  const similarProducts = products
    .filter((product) => product.id !== currentProductId)
    .slice(0, 3);

  return (
    <div className="mt-12">
      <h2 className="text-xl font-semibold mb-4">Similar Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {similarProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}