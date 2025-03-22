const Button = ({
    label,
    iconURL,
    backgroundColor,
    textColor,
    borderColor,
    fullWidth,
    onClick,
    variant = "primary",
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

    const getVariantClasses = () => {
      switch (variant) {
        case "secondary":
          return "bg-accent-indigo text-white border-accent-indigo";
        case "outline":
          return "bg-transparent text-slate-gray border-slate-gray hover:bg-slate-gray hover:text-white";
        case "accent":
          return "bg-accent-teal text-white border-accent-teal";
        case "custom":
          return `${backgroundColor || ''} ${textColor || ''} ${borderColor || ''}`;
        default:
          return "bg-coral-red text-white border-coral-red";
      }
    };

    return (
      <button
        onClick={onClick}
        className={`flex justify-center items-center gap-2 ${getSizeClasses()} border font-montserrat leading-none
        ${variant === 'custom' ? getVariantClasses() : getVariantClasses()}
        rounded-full ${fullWidth ? "w-full" : ""} hover:shadow-lg transition-all duration-300 active:scale-95`}
      >
        {label}
  
        {iconURL && (
          <img
            src={iconURL}
            alt='arrow right icon'
            className='ml-2 rounded-full w-5 h-5 object-contain'
          />
        )}
      </button>
    );
  };
  
  export default Button;