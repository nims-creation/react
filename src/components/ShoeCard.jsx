const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
    const handleClick = () => {
      if (bigShoeImg !== imgURL.bigShoe) {
        changeBigShoeImage(imgURL.bigShoe);
      }
    };
  
    const isSelected = bigShoeImg === imgURL.bigShoe;
  
    return (
      <div
        className={`border-2 rounded-xl ${
          isSelected
            ? "border-coral-red shadow-md"
            : "border-transparent"
        } cursor-pointer max-sm:flex-1 transition-all duration-300 hover:shadow-lg ${
          !isSelected && "hover:border-slate-gray hover:border-opacity-50"
        }`}
        onClick={handleClick}
      >
        <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 max-sm:w-full max-sm:h-28 rounded-xl max-sm:p-2'>
          <img
            src={imgURL.thumbnail}
            alt='shoe collection'
            width={127}
            height={103.34}
            className={`object-contain transition-transform duration-300 ${
              isSelected ? "scale-110" : "hover:scale-105"
            }`}
          />
        </div>
      </div>
    );
  };
  
  export default ShoeCard;