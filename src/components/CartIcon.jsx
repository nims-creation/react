import { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../contexts/CartContext';
import { RiShoppingBagLine } from 'react-icons/ri';

const CartIcon = () => {
  const { getCartItemCount, toggleCart, showAnimation } = useCart();
  const count = getCartItemCount();
  const iconRef = useRef(null);
  
  useEffect(() => {
    if (showAnimation && iconRef.current) {
      iconRef.current.classList.add('animate-bounce');
      
      setTimeout(() => {
        if (iconRef.current) {
          iconRef.current.classList.remove('animate-bounce');
        }
      }, 1000);
    }
  }, [showAnimation]);

  return (
    <div className="relative" ref={iconRef}>
      <button 
        onClick={toggleCart}
        className="relative p-2 text-slate-800 dark:text-white rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        aria-label="Shopping cart"
      >
        <RiShoppingBagLine className="text-2xl" />
        
        <AnimatePresence>
          {count > 0 && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="absolute -top-2 -right-2 bg-coral-red text-white rounded-full text-xs font-bold flex items-center justify-center h-6 w-6"
            >
              {count <= 99 ? count : '99+'}
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
};

export default CartIcon; 