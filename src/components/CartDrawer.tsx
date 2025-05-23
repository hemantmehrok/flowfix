import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartDrawer: React.FC = () => {
  const { items, isCartOpen, setIsCartOpen, updateQuantity, removeItem } = useCart();

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    // Redirect to Shopify checkout with the current cart items
    const shopifyCartUrl = `https://flowfixofficial.myshopify.com/cart/44374369018103:${items[0]?.quantity || 1}`;
    window.open(shopifyCartUrl, '_blank');
    setIsCartOpen(false);
  };

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-matte-black border-l border-gray-800 transform transition-transform duration-300">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-4 border-b border-gray-800 flex items-center justify-between">
            <h2 className="text-xl font-bold text-white flex items-center">
              <ShoppingBag className="mr-2" />
              Cart ({items.length})
            </h2>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {items.length === 0 ? (
              <div className="text-center text-gray-400 py-8">
                Your cart is empty
              </div>
            ) : (
              <div className="space-y-4">
                {items.map(item => (
                  <div key={item.id} className="flex gap-4 bg-gray-900/50 p-4 rounded-lg">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="text-white font-semibold">{item.name}</h3>
                      <p className="text-gray-400">₹{item.price}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 text-gray-400 hover:text-white transition-colors"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="text-white">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 text-gray-400 hover:text-white transition-colors"
                        >
                          <Plus size={16} />
                        </button>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="ml-auto text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-gray-800">
            <div className="flex justify-between mb-4">
              <span className="text-white">Total</span>
              <span className="text-white font-bold">₹{total}</span>
            </div>
            <button 
              onClick={handleCheckout}
              className="w-full bg-royal-blue-600 hover:bg-royal-blue-500 text-white py-3 rounded-lg transition-all font-semibold"
              disabled={items.length === 0}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;