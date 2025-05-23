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
        <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
        <p className="text-gray-300">
          Your order has been received. We'll contact you shortly to confirm the details.
        </p>
      </div>
    );
  }

  return (
    <div>
      <a
        href="https://rzp.io/rzp/spOthHZh"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-semibold py-4 rounded-lg transition-all relative overflow-hidden group flex items-center justify-center"
      >
        <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform group-hover:translate-x-[200%] transition-transform duration-1000"></div>
        <span className="relative z-10">Buy Now</span>
      </a>
      <p className="text-sm text-gray-500 text-center mt-4">
        * Secure payment via Razorpay
      </p>
    </div>
  );
};

export default OrderForm;