import React, { useState, useEffect } from 'react';
import { useForm } from '@formspree/react';
import { Check } from 'lucide-react';

const OrderForm: React.FC = () => {
  const [state, handleSubmitBase] = useForm("mbloepjw");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (state.succeeded) {
      setTimeout(() => {
        window.location.href = 'https://rzp.io/rzp/spOthHZh';
      }, 1500); // 1.5 sec delay after success
    }
  }, [state.succeeded]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    await handleSubmitBase(e);
  };

  if (state.succeeded) {
    return (
      <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-xl p-8 text-center">
        <div className="w-16 h-16 bg-emerald-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="w-8 h-8 text-emerald-400" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
        <p className="text-gray-300">
          Redirecting you to payment...
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input type="hidden" name="product" value="FlowFix Nasal Strips" />
      <input type="hidden" name="payment_method" value="Cash on Delivery" />
      
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-royal-blue-500 transition-colors"
          placeholder="Enter your full name"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
          Phone Number *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          pattern="[0-9]{10}"
          className="w-full bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-royal-blue-500 transition-colors"
          placeholder="Enter 10-digit phone number"
        />
      </div>

      <div>
        <label htmlFor="address" className="block text-sm font-medium text-gray-300 mb-2">
          Shipping Address *
        </label>
        <textarea
          id="address"
          name="address"
          required
          rows={3}
          className="w-full bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-royal-blue-500 transition-colors"
          placeholder="Enter your complete shipping address"
        ></textarea>
      </div>

      <div>
        <label htmlFor="pincode" className="block text-sm font-medium text-gray-300 mb-2">
          Pincode *
        </label>
        <input
          type="text"
          id="pincode"
          name="pincode"
          required
          pattern="[0-9]{6}"
          className="w-full bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-royal-blue-500 transition-colors"
          placeholder="Enter 6-digit pincode"
        />
      </div>

      <div>
        <label htmlFor="quantity" className="block text-sm font-medium text-gray-300 mb-2">
          Quantity *
        </label>
        <select
          id="quantity"
          name="quantity"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          required
          className="w-full bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-royal-blue-500 transition-colors"
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num} {num === 1 ? 'unit' : 'units'}
            </option>
          ))}
        </select>
      </div>

      <div className="pt-4">
        <button
          type="submit"
          disabled={state.submitting}
          className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-semibold py-4 rounded-lg transition-all relative overflow-hidden group"
        >
          <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform group-hover:translate-x-[200%] transition-transform duration-1000"></div>
          <span className="relative z-10">
            {state.submitting ? 'Placing Order...' : 'Place Order'}
          </span>
        </button>
        <p className="text-sm text-gray-500 text-center mt-4">
          * Cash on Delivery available
        </p>
      </div>
    </form>
  );
};

export default OrderForm;