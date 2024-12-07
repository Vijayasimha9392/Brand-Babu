import React, { useState } from 'react';
import { PaymentDetails, ShippingAddress } from '../types';
import { validateCard, formatCardNumber, formatExpiryDate } from '../utils/payment';
import { CreditCard, Truck } from 'lucide-react';

interface PaymentFormProps {
  onSubmit: (payment: PaymentDetails, shipping: ShippingAddress) => void;
  total: number;
}

export function PaymentForm({ onSubmit, total }: PaymentFormProps) {
  const [step, setStep] = useState<'shipping' | 'payment'>('shipping');
  const [payment, setPayment] = useState<PaymentDetails>({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    name: ''
  });
  const [shipping, setShipping] = useState<ShippingAddress>({
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: ''
  });

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 'shipping') {
      setStep('payment');
      return;
    }
    onSubmit(payment, shipping);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <div className="flex justify-between mb-8">
        <div className="flex items-center">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
            step === 'shipping' ? 'bg-black text-white' : 'bg-gray-200'
          }`}>
            <Truck className="w-4 h-4" />
          </div>
          <span className="ml-2">Shipping</span>
        </div>
        <div className="flex items-center">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
            step === 'payment' ? 'bg-black text-white' : 'bg-gray-200'
          }`}>
            <CreditCard className="w-4 h-4" />
          </div>
          <span className="ml-2">Payment</span>
        </div>
      </div>

      <form onSubmit={handlePaymentSubmit} className="space-y-6">
        {step === 'shipping' ? (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700">Street Address</label>
              <input
                type="text"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                value={shipping.street}
                onChange={(e) => setShipping({ ...shipping, street: e.target.value })}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">City</label>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                  value={shipping.city}
                  onChange={(e) => setShipping({ ...shipping, city: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">State</label>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                  value={shipping.state}
                  onChange={(e) => setShipping({ ...shipping, state: e.target.value })}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">ZIP Code</label>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                  value={shipping.zipCode}
                  onChange={(e) => setShipping({ ...shipping, zipCode: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Country</label>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                  value={shipping.country}
                  onChange={(e) => setShipping({ ...shipping, country: e.target.value })}
                />
              </div>
            </div>
          </>
        ) : (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700">Card Number</label>
              <input
                type="text"
                required
                maxLength={19}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                value={payment.cardNumber}
                onChange={(e) => setPayment({ ...payment, cardNumber: formatCardNumber(e.target.value) })}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
                <input
                  type="text"
                  required
                  placeholder="MM/YY"
                  maxLength={5}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                  value={payment.expiryDate}
                  onChange={(e) => setPayment({ ...payment, expiryDate: formatExpiryDate(e.target.value) })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">CVV</label>
                <input
                  type="text"
                  required
                  maxLength={3}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                  value={payment.cvv}
                  onChange={(e) => setPayment({ ...payment, cvv: e.target.value.replace(/\D/g, '') })}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Cardholder Name</label>
              <input
                type="text"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                value={payment.name}
                onChange={(e) => setPayment({ ...payment, name: e.target.value })}
              />
            </div>
          </>
        )}

        <div className="mt-8">
          <div className="flex justify-between mb-4">
            <span className="font-semibold">Total:</span>
            <span className="font-semibold">${total.toFixed(2)}</span>
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors"
          >
            {step === 'shipping' ? 'Continue to Payment' : 'Pay Now'}
          </button>
        </div>
      </form>
    </div>
  );
}