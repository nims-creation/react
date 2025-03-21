import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { useState } from "react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          <img
            src={headerLogo}
            alt='logo'
            width={129}
            height={29}
            className='m-0 w-[129px] h-[29px]'
          />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red transition-colors'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
          <a href='/' className="hover:text-coral-red transition-colors">Sign in</a>
          <span>/</span>
          <a href='/' className="hover:text-coral-red transition-colors">Explore now</a>
        </div>
        <div className='hidden max-lg:block cursor-pointer' onClick={toggleMenu}>
          <img src={hamburger} alt='hamburger icon' width={25} height={25} />
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='fixed inset-0 bg-white z-50 lg:hidden pt-20'>
          <div className='flex flex-col items-center justify-start h-full gap-8 p-8'>
            <ul className='flex flex-col items-center gap-6 w-full'>
              {navLinks.map((item) => (
                <li key={item.label} className='w-full text-center py-2 border-b border-gray-100'>
                  <a
                    href={item.href}
                    className='font-montserrat text-xl text-slate-gray hover:text-coral-red transition-colors block'
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className='flex gap-4 text-xl font-medium font-montserrat mt-4'>
              <a href='/' className='bg-coral-red text-white px-6 py-2 rounded-full' onClick={toggleMenu}>
                Sign in
              </a>
              <a href='/' className='border border-coral-red text-coral-red px-6 py-2 rounded-full' onClick={toggleMenu}>
                Explore
              </a>
            </div>
            <button 
              className='absolute top-8 right-8 text-2xl font-bold' 
              onClick={toggleMenu}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;