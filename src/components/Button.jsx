const Button = ({
    label,
    iconURL,
    backgroundColor,
    textColor,
    borderColor,
    fullWidth,
    onClick,
    size = "default"
  }) => {
    const getSizeClasses = () => {
      switch (size) {
        case "small":
          return "px-5 py-2 text-base";
        case "large":
          return "px-8 py-5 text-xl";
        default:
          return "px-7 py-4 text-lg";
      }
    };

    return (
      <button
        onClick={onClick}
        className={`flex justify-center items-center gap-2 ${getSizeClasses()} border font-montserrat leading-none
        ${
          backgroundColor
            ? `${backgroundColor} ${textColor} ${borderColor}`
            : "bg-coral-red text-white border-coral-red"
        } rounded-full ${fullWidth ? "w-full" : ""} hover:opacity-90 transition-all duration-300 active:scale-95`}
      >
        {label}
  
        {iconURL && (
          <img
            src={iconURL}
            alt='arrow right icon'
            className='ml-2 rounded-full bg-white w-5 h-5'
          />
        )}
      </button>
    );
  };
  
  export default Button;