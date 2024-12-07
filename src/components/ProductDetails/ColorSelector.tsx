import React from 'react';

interface ColorSelectorProps {
  colors: string[];
  selectedColor: string;
  onColorSelect: (color: string) => void;
}

export function ColorSelector({ colors, selectedColor, onColorSelect }: ColorSelectorProps) {
  return (
    <div className="mt-4">
      <h3 className="text-sm font-medium text-gray-700">Color</h3>
      <div className="flex space-x-2 mt-2">
        {colors.map((color) => (
          <button
            key={color}
            className={`w-8 h-8 rounded-full border-2 ${
              selectedColor === color ? 'border-black' : 'border-transparent'
            }`}
            style={{ backgroundColor: color.toLowerCase() }}
            onClick={() => onColorSelect(color)}
            aria-label={`Select ${color} color`}
          />
        ))}
      </div>
    </div>
  );
}