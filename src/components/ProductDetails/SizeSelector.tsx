import React from 'react';

interface SizeSelectorProps {
  sizes: string[];
  selectedSize: string;
  onSizeSelect: (size: string) => void;
}

export function SizeSelector({ sizes, selectedSize, onSizeSelect }: SizeSelectorProps) {
  return (
    <div className="mt-4">
      <h3 className="text-sm font-medium text-gray-700">Size</h3>
      <div className="grid grid-cols-4 gap-2 mt-2">
        {sizes.map((size) => (
          <button
            key={size}
            className={`px-4 py-2 text-sm border rounded-md ${
              selectedSize === size
                ? 'border-black bg-black text-white'
                : 'border-gray-200 hover:border-black'
            }`}
            onClick={() => onSizeSelect(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}