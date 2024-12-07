import React from 'react';
import { Star } from 'lucide-react';
import { Review } from '../../types';

interface ReviewSectionProps {
  reviews: Review[];
  rating: number;
}

export function ReviewSection({ reviews, rating }: ReviewSectionProps) {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Customer Reviews</h2>
      <div className="flex items-center mb-4">
        <div className="flex items-center">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`w-5 h-5 ${
                star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
              }`}
            />
          ))}
        </div>
        <span className="ml-2 text-gray-600">
          {rating} out of 5 ({reviews.length} reviews)
        </span>
      </div>
      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="border-b pb-4">
            <div className="flex items-center mb-2">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-4 h-4 ${
                      star <= review.rating
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600">{review.date}</span>
            </div>
            <p className="font-medium">{review.user}</p>
            <p className="text-gray-600 mt-1">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}