import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className='flex justify-center items-center flex-col p-8 rounded-2xl bg-white shadow-card hover:shadow-3xl transition-all duration-300 dark:bg-dark-secondary dark:border dark:border-dark-accent'>
      <img
        src={imgURL}
        alt='customer'
        className='rounded-full object-cover w-[120px] h-[120px] border-4 border-primary shadow-md dark:border-dark-accent'
      />
      <p className='mt-6 max-w-sm text-center info-text'>{feedback}</p>
      <div className='mt-3 flex justify-center items-center gap-2.5'>
        <img
          src={star}
          width={24}
          height={24}
          alt='rating star'
          className='object-contain m-0 text-accent-orange'
        />
        <p className='text-xl font-montserrat text-accent-orange font-semibold'>({rating})</p>
      </div>
      <h3 className='mt-1 font-palanquin text-3xl text-center font-bold text-dark-blue dark:text-dark-text'>
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;