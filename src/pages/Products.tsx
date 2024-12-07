import React from 'react';
import { ProductCard } from '../components/ProductCard';

export const products = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "T-Shirts",
    description: "Essential white t-shirt made from premium cotton. Features a comfortable fit and durable fabric that maintains its shape wash after wash.",
    rating: 4.5,
    colors: ["White", "Black", "Gray", "Navy"],
    sizes: ["XS", "S", "M", "L", "XL"],
    specifications: [
      { label: "Material", value: "100% Cotton" },
      { label: "Fit", value: "Regular" },
      { label: "Care", value: "Machine wash" }
    ],
    reviews: [
      {
        id: 1,
        user: "John D.",
        rating: 5,
        comment: "Perfect fit and great quality!",
        date: "2024-03-15"
      },
      {
        id: 2,
        user: "Sarah M.",
        rating: 4,
        comment: "Nice basic tee, good for everyday wear",
        date: "2024-03-10"
      }
    ]
  },
  {
    id: 2,
    name: "Slim Fit Jeans",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Jeans",
    description: "Classic blue slim fit jeans with a modern cut. Made from high-quality denim with just the right amount of stretch for comfort.",
    rating: 4.8,
    colors: ["Blue", "Black", "Gray"],
    sizes: ["28", "30", "32", "34", "36"],
    specifications: [
      { label: "Material", value: "98% Cotton, 2% Elastane" },
      { label: "Fit", value: "Slim" },
      { label: "Rise", value: "Mid-rise" }
    ],
    reviews: [
      {
        id: 1,
        user: "Mike R.",
        rating: 5,
        comment: "Best fitting jeans I've ever owned",
        date: "2024-03-12"
      },
      {
        id: 2,
        user: "Emily L.",
        rating: 4,
        comment: "Great quality, slightly long for me",
        date: "2024-03-08"
      }
    ]
  },
  {
    id: 3,
    name: "Leather Jacket",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Jackets",
    description: "Premium leather jacket with a classic design. Features high-quality hardware and a comfortable cotton lining.",
    rating: 4.9,
    colors: ["Black", "Brown", "Tan"],
    sizes: ["S", "M", "L", "XL"],
    specifications: [
      { label: "Material", value: "Genuine Leather" },
      { label: "Lining", value: "100% Cotton" },
      { label: "Closure", value: "YKK Zipper" }
    ],
    reviews: [
      {
        id: 1,
        user: "Alex K.",
        rating: 5,
        comment: "Exceptional quality and style",
        date: "2024-03-14"
      },
      {
        id: 2,
        user: "Rachel W.",
        rating: 5,
        comment: "Worth every penny!",
        date: "2024-03-11"
      }
    ]
  },

  {
    id: 4,
    name: "Allen Solly Men's Slim Fit Shirt",
    price: 40.58,
    image: "https://m.media-amazon.com/images/I/71hfutLZZ7L._SX569_.jpg",
    category: "Shirt",
    description: "Men's Solid Cotton Shirt | Casual | Plain | Full Sleeve | Summer-Regular Fit",
    rating: 4.8,
    colors: ["Blue", "White", "Black", "Gray"],
    sizes: ["28", "30", "32", "34", "36"],
    specifications: [
      { label: "Material", value: "98% Cotton" },
      { label: "Fit", value: "Slim" },
      { label: "Rise", value: "Mid-rise" }
    ],
    reviews: [
      {
        id: 1,
        user: "Mike R.",
        rating: 5,
        comment: "Best fitting Shirt I've ever owned",
        date: "2024-03-12"
      },
      {
        id: 2,
        user: "Emily L.",
        rating: 4,
        comment: "Great quality, slightly long for me",
        date: "2024-03-08"
      }
    ]
  },

  {
    id: 5,
    name: "Louis Philippe Men's Solid Slim Fit Shirt",
    price: 9.76,
    image: "https://m.media-amazon.com/images/I/61O+a2Y6XNL._SY741_.jpg",
    category: "Shirt",
    description: "Louis Philippe Men Super Slim Fit Textured All Day Comfort Cotton Formal Shirt",
    rating: 3.9,
    colors: ["Blue", "Black", "Gray", "Blue"],
    sizes: ["28", "30", "32", "34", "36"],
    specifications: [
      { label: "Material", value: "98% Cotton" },
      { label: "Fit", value: "Slim" },
      { label: "Rise", value: "Mid-rise" }
    ],
    reviews: [
      {
        id: 1,
        user: "Mike R.",
        rating: 5,
        comment: "Best fitting jeans I've ever owned",
        date: "2024-03-12"
      },
      {
        id: 2,
        user: "Emily L.",
        rating: 4,
        comment: "Great quality, slightly long for me",
        date: "2024-03-08"
      }
    ]
  },

  {
    id: 6,
    name: "Men Long Sleeve Relaxed Fit Shirts ",
    price: 19.99,
    image: "https://m.media-amazon.com/images/I/61ua-JNV87L._SY741_.jpg",
    category: "Shirt",
    description: "The Souled Store Plaid: Corsair Men and Boys Long Sleeve Collared Neck Cotton Button Down Relaxed Fit Shirts Multicolour Shirts Casual Button-Down Full Sleeve Plaid Checks Casual Workwear.",
    rating: 4.8,
    colors: ["Blue", "Black", "Gray","Blue"],
    sizes: ["28", "30", "32", "34", "36"],
    specifications: [
      { label: "Material", value: "98% Cotton, 2% Elastane" },
      { label: "Fit", value: "Slim" },
      { label: "Rise", value: "Mid-rise" }
    ],
    reviews: [
      {
        id: 1,
        user: "Mike R.",
        rating: 5,
        comment: "Best fitting jeans I've ever owned",
        date: "2024-03-12"
      },
      {
        id: 2,
        user: "Emily L.",
        rating: 4,
        comment: "Great quality, slightly long for me",
        date: "2024-03-08"
      }
    ]
  },

  {
    id: 7,
    name: "U.S. POLO ASSN. Men's Casual Pants",
    price: 9.7,
    image: "https://m.media-amazon.com/images/I/61--S18hAYL._SX569_.jpg",
    category: "Pants",
    description: "Classic blue slim fit Pant with a modern cut. Made from high-quality denim with just the right amount of stretch for comfort.",
    rating: 4.7,
    colors: ["Blue", "Black", "Gray"],
    sizes: ["28", "30", "32", "34", "36"],
    specifications: [
      { label: "Material", value: "98% Cotton" },
      { label: "Fit", value: "Slim" },
      { label: "Rise", value: "Mid-rise" }
    ],
    reviews: [
      {
        id: 1,
        user: "Mike R.",
        rating: 5,
        comment: "Best fitting jeans I've ever owned",
        date: "2024-03-12"
      },
      {
        id: 2,
        user: "Emily L.",
        rating: 4,
        comment: "Great quality, slightly long for me",
        date: "2024-03-08"
      }
    ]
  },

  {
    id: 8,
    name: "Super Slim Fit Light Fawn Trouser for Men",
    price: 7.99,
    image: "https://m.media-amazon.com/images/I/61oPWWr9UGL._SX679_.jpg",
    category: "Pants",
    description: "Classic blue slim fit jeans with a modern cut. Made from high-quality denim with just the right amount of stretch for comfort.",
    rating: 3.0,
    colors: ["Blue", "Black", "Gray","White"],
    sizes: ["28", "30", "32", "34", "36"],
    specifications: [
      { label: "Material", value: "98% Cotton" },
      { label: "Fit", value: "Slim" },
      { label: "Rise", value: "Mid-rise" }
    ],
    reviews: [
      {
        id: 1,
        user: "Mike R.",
        rating: 5,
        comment: "Best fitting jeans I've ever owned",
        date: "2024-03-12"
      },
      {
        id: 2,
        user: "Emily L.",
        rating: 4,
        comment: "Great quality, slightly long for me",
        date: "2024-03-08"
      }
    ]
  },

];

export function Products() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}