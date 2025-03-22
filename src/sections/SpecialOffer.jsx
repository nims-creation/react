import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import { Button } from "../components";
import { motion } from "framer-motion";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "../contexts/CartContext";

const SpecialOffer = () => {
  const { addToCart } = useCart();
  
  const handleAddSpecialOffer = () => {
    // Add this special offer product to cart
    const specialOfferProduct = {
      id: 202,
      name: "Nike Special Edition Bundle",
      price: 259.99,
      image: offer,
      color: "Limited Edition Red/Black",
      size: "9.5",
      quantity: 1
    };
    
    addToCart(specialOfferProduct);
  };
  
  return (
    <section className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1 relative group'>
        <img
          src={offer}
          alt='Shoe Promotion'
          width={773}
          height={687}
          className='object-contain w-full'
        />
        <div className="absolute top-4 right-4 bg-coral-red text-white py-2 px-4 rounded-full font-bold">
          Special Offer
        </div>
        <div className="absolute top-16 right-4 bg-white dark:bg-dark-accent py-2 px-4 rounded-full font-bold text-coral-red">
          Save 20%
        </div>
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className='text-4xl font-palanquin font-bold'>
          <span className='text-coral-red'>Special </span>
          Offer
        </h2>
        <p className='mt-4 info-text'>
        Begin an extraordinary shopping adventure that transforms your experience with unmatched deals.
        Explore top-tier selections and enjoy phenomenal savings, delivering exceptional value that
        distinguishes us from the rest.
        </p>
        <p className='mt-6 info-text'>
        Step into a world of endless possibilities tailored to meet your every desire, 
        exceeding even your highest expectations. Your journey with us promises to be 
        nothing less than extraordinary.
        </p>
        
        <div className="mt-6 bg-pale-blue dark:bg-dark-accent/30 p-4 rounded-xl">
          <div className="flex justify-between">
            <div>
              <h3 className="font-bold text-xl">Nike Special Edition Bundle</h3>
              <p className="text-coral-red font-medium">$259.99</p>
            </div>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={handleAddSpecialOffer}
              className="bg-coral-red hover:bg-coral-red/90 text-white rounded-full p-3 shadow-lg"
            >
              <FiShoppingCart className="text-xl" />
            </motion.button>
          </div>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Limited time offer - Get the exclusive Nike Special Edition Bundle with a complimentary sports bag
          </p>
        </div>
        
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button label='Shop now' iconURL={arrowRight} />
          <Button
            label='Learn more'
            backgroundColor='bg-white'
            borderColor='border-slate-gray'
            textColor='text-slate-gray'
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
