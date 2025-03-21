import { useState, useEffect } from "react";

import { shoes, statistics } from "../constants";
import { Button, ShoeCard } from "../components";
import { bigShoe1 } from "../assets/images";
import { arrowRight } from "../assets/icons";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  const [buttonSize, setButtonSize] = useState("default");

  useEffect(() => {
    const handleResize = () => {
      setButtonSize(window.innerWidth < 640 ? "small" : "default");
    };

    // Set initial size
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      id='home'
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'
    >
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
        <p className='text-xl font-montserrat text-coral-red animate-fadeIn'>
          Our Summer collections
        </p>

        <h1 className='mt-6 font-palanquin text-8xl max-sm:text-[60px] sm:text-[72px] md:text-[84px] max-sm:leading-[72px] font-bold animate-slideIn'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
            The New Arrival
          </span>
          <br />
          <span className='text-coral-red inline-block mt-3'>Nike</span> Shoes
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-10 sm:max-w-sm animate-fadeIn'>
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>

        <div className="animate-fadeIn">
          <Button 
            label='Shop now' 
            iconURL={arrowRight} 
            size={buttonSize}
          />
        </div>

        <div className='flex justify-start items-start flex-wrap w-full mt-16 gap-12 animate-fadeIn'>
          {statistics.map((stat, index) => (
            <div key={index} className="hover:transform hover:scale-105 transition-transform duration-300">
              <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
              <p className='leading-7 font-montserrat text-slate-gray'>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img
          src={bigShoeImg}
          alt='shoe collection'
          width={610}
          height={502}
          className='object-contain relative z-10 max-w-full h-auto animate-float'
        />

        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6 animate-fadeIn'>
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;