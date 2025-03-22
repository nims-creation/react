import { shoe8 } from "../assets/images";
import { Button } from "../components";
import { useCart } from "../contexts/CartContext";
import { motion } from "framer-motion";

const SuperQuality = () => {
  const { addToCart } = useCart();
  
  const handleQuickAdd = () => {
    // Create a featured product
    const featuredProduct = {
      id: 101,
      name: "Nike Air Max Alpha",
      price: 195.0,
      image: shoe8,
      color: "Premium White/Gold",
      size: "10",
      quantity: 1
    };
    
    addToCart(featuredProduct);
  };
  
  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          We Provide You
          <span className='text-coral-red'> Super </span>
          <span className='text-coral-red'>Quality </span> Shoes
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className='mt-11 flex gap-4'>
          <Button label='View details' />
          <motion.button
            onClick={handleQuickAdd}
            whileTap={{ scale: 0.95 }}
            className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red text-white border-coral-red rounded-full"
          >
            Quick Add to Cart
          </motion.button>
        </div>
      </div>

      <div className='flex-1 flex justify-center items-center relative'>
        <img
          src={shoe8}
          alt='product detail'
          width={570}
          height={522}
          className='object-contain'
        />
        <div className="absolute bottom-4 right-4 bg-white dark:bg-dark-accent p-4 rounded-xl shadow-lg">
          <div className="text-lg font-bold text-dark-blue dark:text-white">Nike Air Max Alpha</div>
          <div className="text-coral-red font-semibold">$195.00</div>
          <div className="text-sm text-slate-500 dark:text-slate-300">Premium White/Gold</div>
        </div>
      </div>
    </section>
  );
};

export default SuperQuality;