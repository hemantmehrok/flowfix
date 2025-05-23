import React, { useState } from 'react';
import { useForm } from '@formspree/react';
import { Check } from 'lucide-react';

const OrderForm: React.FC = () => {
  const [state, handleSubmit] = useForm("mbloepjw");
  const [quantity, setQuantity] = useState(1);

  if (state.succeeded) {
    return (
      <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-xl p-8 text-center">
        <div className="w-16 h-16 bg-emerald-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="w-8 h-8 text-emerald-400" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Thank you!</h3>
        <p className="text-gray-300">
          Your order has been received. We’ll contact you shortly to confirm the details.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input type="hidden" name="product" value="FlowFix Nasal Strips" />
      <input type="text" name="name" placeholder="Full Name" required className="w-full p-3 rounded-md" />
      <input type="tel" name="phone" placeholder="Phone Number" required className="w-full p-3 rounded-md" />
      <input type="text" name="address" placeholder="Shipping Address" required className="w-full p-3 rounded-md" />
      <input type="text" name="pincode" placeholder="Pincode" required className="w-full p-3 rounded-md" />
      <select name="quantity" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} className="w-full p-3 rounded-md">
        <option value={1}>1 unit</option>
        <option value={2}>2 units</option>
        <option value={3}>3 units</option>
      </select>
      <button type="submit" className="w-full bg-red-600 text-white py-3 rounded-md">Place Order</button>
      <p className="text-center text-sm text-gray-400">* Cash on Delivery available</p>
    </form>
  );
};

export default OrderForm;