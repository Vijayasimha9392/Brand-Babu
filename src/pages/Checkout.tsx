import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PaymentForm } from '../components/PaymentForm';
import { useCartStore } from '../store/cartStore';
import { PaymentDetails, ShippingAddress } from '../types';
import { validateCard } from '../utils/payment';

export function Checkout() {
  const navigate = useNavigate();
  const { items, clearCart } = useCartStore();
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handlePayment = (payment: PaymentDetails, shipping: ShippingAddress) => {
    if (!validateCard(payment.cardNumber)) {
      alert('Invalid card number');
      return;
    }

    // Simulate payment processing
    setTimeout(() => {
      clearCart();
      navigate('/thank-you');
    }, 1500);
  };

  if (items.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8">Checkout</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex-1">
                  <h4 className="font-medium">{item.name}</h4>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                </div>
                <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <PaymentForm onSubmit={handlePayment} total={total} />
        </div>
      </div>
    </div>
  );
}