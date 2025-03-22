import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../contexts/CartContext';
import { RiCloseLine } from 'react-icons/ri';
import { FiPlus, FiMinus, FiTrash2 } from 'react-icons/fi';
import { BsArrowRight } from 'react-icons/bs';

const MiniCart = () => {
  const { 
    cart, 
    isCartOpen, 
    toggleCart, 
    removeFromCart, 
    updateQuantity, 
    getCartTotal, 
    clearCart 
  } = useCart();
  const cartRef = useRef(null);

  // Close cart when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target) && isCartOpen) {
        toggleCart();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isCartOpen, toggleCart]);

  // Prevent body scrolling when cart is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isCartOpen]);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black z-40"
            onClick={toggleCart}
          />
          
          {/* Cart panel */}
          <motion.div
            ref={cartRef}
            initial={{ x: '100%' }}
            animate={{ x: '0%' }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[420px] bg-white dark:bg-dark-secondary shadow-lg z-50 flex flex-col"
          >
            {/* Header */}
            <div className="p-5 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
              <h2 className="text-xl font-bold dark:text-white">Your Cart ({cart.length})</h2>
              <button
                onClick={toggleCart}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400"
                aria-label="Close cart"
              >
                <RiCloseLine className="text-2xl" />
              </button>
            </div>
            
            {/* Cart items */}
            <div className="flex-1 overflow-y-auto py-5 px-5">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center">
                  <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-full">
                    <RiCloseLine className="text-4xl text-slate-400 dark:text-slate-500" />
                  </div>
                  <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 text-center">Your cart is empty</p>
                  <button
                    onClick={toggleCart}
                    className="mt-6 px-6 py-3 bg-coral-red text-white rounded-full text-base font-medium hover:bg-coral-red/90 transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <ul className="space-y-6">
                  {cart.map((item) => (
                    <motion.li 
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="flex gap-5 p-3 border-b border-slate-100 dark:border-slate-700 pb-6"
                    >
                      {/* Product image */}
                      <div className="w-28 h-28 flex-shrink-0 bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Product details */}
                      <div className="flex-1">
                        <h3 className="font-medium text-lg text-slate-900 dark:text-white">{item.name}</h3>
                        <p className="text-base text-slate-500 dark:text-slate-400 mt-1">
                          {item.color} • Size {item.size}
                        </p>
                        <div className="mt-3 flex justify-between items-center">
                          <span className="font-medium text-base px-3 py-1 bg-pale-blue dark:bg-dark-accent/30 rounded-full text-coral-red">
                            ${item.price.toFixed(2)}
                          </span>
                          
                          {/* Quantity controls */}
                          <div className="flex items-center border border-slate-200 dark:border-slate-700 rounded-full">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                              className="p-2 text-slate-500 dark:text-slate-400 hover:text-coral-red disabled:opacity-50"
                              aria-label="Decrease quantity"
                            >
                              <FiMinus size={18} />
                            </button>
                            <span className="px-3 text-base text-slate-800 dark:text-white min-w-[30px] text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-2 text-slate-500 dark:text-slate-400 hover:text-coral-red"
                              aria-label="Increase quantity"
                            >
                              <FiPlus size={18} />
                            </button>
                          </div>
                        </div>
                      </div>
                      
                      {/* Remove button */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-slate-400 hover:text-coral-red p-2 self-start"
                        aria-label="Remove item"
                      >
                        <FiTrash2 size={20} />
                      </button>
                    </motion.li>
                  ))}
                </ul>
              )}
            </div>
            
            {/* Footer with total and checkout */}
            {cart.length > 0 && (
              <div className="border-t border-slate-200 dark:border-slate-700 p-5 bg-white dark:bg-dark-secondary">
                <div className="flex justify-between items-center mb-5 bg-pale-blue dark:bg-dark-accent/30 p-3 rounded-xl">
                  <span className="text-lg text-slate-600 dark:text-slate-400">Subtotal</span>
                  <span className="text-xl font-bold text-coral-red">${getCartTotal().toFixed(2)}</span>
                </div>
                
                <button
                  className="w-full py-4 bg-coral-red text-white rounded-full font-medium text-lg hover:bg-coral-red/90 transition-colors flex items-center justify-center"
                >
                  Checkout <BsArrowRight className="ml-2" size={20} />
                </button>
                
                <button
                  onClick={clearCart}
                  className="w-full mt-3 py-2 text-base text-slate-600 dark:text-slate-400 hover:text-coral-red transition-colors"
                >
                  Clear Cart
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MiniCart; 