const ServiceCard = ({ imgURL, label, subtext }) => {
    return (
      <div className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16 bg-white hover:shadow-card transition-all duration-300 hover:translate-y-[-5px] dark:bg-dark-secondary dark:border dark:border-dark-accent'>
        <div className='w-11 h-11 flex justify-center items-center bg-gradient-to-r from-accent-indigo to-accent-purple rounded-full'>
          <img src={imgURL} alt={label} width={24} height={24} className="dark:invert" />
        </div>
        <h3 className='mt-5 font-palanquin text-3xl leading-normal font-bold text-dark-blue dark:text-dark-text'>
          {label}
        </h3>
        <p className='mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray dark:text-dark-muted'>
          {subtext}
        </p>
      </div>
    );
  };
  
  export default ServiceCard;