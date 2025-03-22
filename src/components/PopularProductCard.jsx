import { star } from "../assets/icons";
import { ProductCardButton } from "../components";

const PopularProductCard = ({ imgURL, name, price, id }) => {
  // Create a product object that our ProductCardButton can use
  const product = {
    id,
    name,
    price: parseFloat(price.replace('$', '')),
    imgURL
  };

  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full p-4 rounded-2xl hover:shadow-3xl transition-all duration-300 hover:translate-y-[-5px] bg-white dark:bg-dark-secondary relative'>
      <div className='bg-pale-blue dark:bg-dark-accent/30 rounded-xl p-3 overflow-hidden relative'>
        <img src={imgURL} alt={name} className='w-[282px] h-[282px] object-contain hover:scale-105 transition-all duration-500' />
        <ProductCardButton product={product} />
      </div>
      <div className='mt-8 flex justify-start gap-2.5'>
        <img src={star} alt='rating icon' width={24} height={24} className='text-accent-orange' />
        <p className='font-montserrat text-xl leading-normal text-accent-orange font-medium'>
          (4.5)
        </p>
      </div>
      <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin text-dark-blue dark:text-dark-text'>
        {name}
      </h3>
      <p className='mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal'>
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;