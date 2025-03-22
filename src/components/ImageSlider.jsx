import { useState, useEffect, useRef } from 'react';

const ImageSlider = ({ slides, autoPlayInterval = 5000, height = 'h-[400px]' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  // Reset timer when current index changes
  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    
    if (!isPaused) {
      timerRef.current = setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, autoPlayInterval);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [currentIndex, autoPlayInterval, slides.length, isPaused]);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div 
      className={`w-full ${height} relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slider content */}
      <div 
        className="w-full h-full bg-cover bg-center transition-all duration-700 ease-in-out"
        style={{ 
          backgroundImage: `url(${slides[currentIndex].image})`,
          transform: `scale(${isPaused ? 1.05 : 1})` 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex flex-col justify-end p-8">
          <div className="max-w-md animate-fadeIn">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              {slides[currentIndex].title}
            </h2>
            <p className="text-white/80 mb-4 text-sm md:text-base">
              {slides[currentIndex].description}
            </p>
            <a 
              href={slides[currentIndex].link}
              className="inline-block bg-white text-dark-blue px-5 py-2 rounded-full font-semibold text-sm hover:bg-accent-indigo hover:text-white transition-all duration-300"
            >
              {slides[currentIndex].buttonText || 'Shop Now'}
            </a>
          </div>
        </div>
      </div>

      {/* Left/Right arrows */}
      <div className="absolute top-1/2 -translate-y-1/2 left-4 bg-white/80 dark:bg-dark-primary/80 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button 
          onClick={goToPrevious} 
          className="text-dark-blue dark:text-white"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </button>
      </div>
      
      <div className="absolute top-1/2 -translate-y-1/2 right-4 bg-white/80 dark:bg-dark-primary/80 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button 
          onClick={goToNext} 
          className="text-dark-blue dark:text-white"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      {/* Dots/indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((slide, slideIndex) => (
          <button
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              currentIndex === slideIndex
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${slideIndex + 1}`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div 
          className="h-full bg-white transition-all duration-300 ease-linear"
          style={{ 
            width: `${(currentIndex / (slides.length - 1)) * 100}%`,
            transitionDuration: isPaused ? '0ms' : `${autoPlayInterval}ms` 
          }}
        />
      </div>
    </div>
  );
};

export default ImageSlider; 