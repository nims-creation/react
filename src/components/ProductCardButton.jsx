import { motion } from 'framer-motion';
import { FiShoppingBag } from 'react-icons/fi';
import { useCart } from '../contexts/CartContext';

const ProductCardButton = ({ product }) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = () => {
    // Create a complete product object
    const completeProduct = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.imgURL,
      color: product.color || "Default",
      size: product.size || "9",
      quantity: 1
    };
    
    addToCart(completeProduct);
  };
  
  return (
    <motion.button
      onClick={handleAddToCart}
      whileTap={{ scale: 0.9 }}
      className="bg-coral-red hover:bg-coral-red/90 text-white rounded-full p-4 absolute bottom-4 right-4 shadow-lg z-10"
      aria-label="Add to cart"
    >
      <FiShoppingBag className="text-2xl" />
    </motion.button>
  );
};

export default ProductCardButton; 