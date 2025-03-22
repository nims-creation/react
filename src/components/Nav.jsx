import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { useState, useEffect } from "react";
import { ThemeToggle, SearchBar, CartIcon, MiniCart } from "../components";
import { useTheme } from "../contexts/ThemeContext";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`padding-x py-6 fixed z-30 w-full transition-all duration-300 ${
      scrolled 
        ? 'bg-white/90 dark:bg-dark-primary/90 backdrop-blur-md shadow-md border-b border-slate-200 dark:border-dark-accent/20' 
        : 'bg-transparent'
    }`}>
      <nav className={`flex justify-between items-center max-container rounded-full transition-all duration-300 ${
        scrolled 
          ? 'mx-4 sm:mx-6 md:mx-8 lg:mx-12 px-6 py-2 border border-slate-200/60 dark:border-dark-accent/20' 
          : ''
      }`}>
        <a href='/'>
          <img
            src={headerLogo}
            alt='logo'
            width={129}
            height={29}
            className='m-0 w-[129px] h-[29px] dark:invert'
          />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-12 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label} className="flex items-center justify-center">
              <a
                href={item.href}
                className='nav-link inline-block'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='flex items-center gap-5 wide:mr-24'>
          <SearchBar />
          <div className='flex gap-4 text-lg leading-normal font-medium font-montserrat max-lg:hidden'>
            <a href='/' className="nav-link inline-block">Sign in</a>
            <span className="text-slate-gray dark:text-dark-muted">/</span>
            <a href='/' className="nav-link inline-block">Explore now</a>
          </div>
          <div className="flex items-center gap-4">
            <CartIcon />
            <ThemeToggle />
          </div>
          <div className='hidden max-lg:block cursor-pointer' onClick={toggleMenu}>
            <img 
              src={hamburger} 
              alt='hamburger icon' 
              width={25} 
              height={25} 
              className={`transition-all ${theme === 'dark' ? 'invert' : ''}`} 
            />
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='fixed inset-0 bg-white/95 dark:bg-dark-primary/95 backdrop-blur-md z-50 lg:hidden pt-24 animate-fadeIn'>
          <div className='flex flex-col items-center justify-start h-full gap-8 p-8'>
            <div className="w-full max-w-md mx-auto mb-4">
              <SearchBar />
            </div>
            <ul className='flex flex-col items-center gap-8 w-full'>
              {navLinks.map((item) => (
                <li key={item.label} className='w-full text-center py-3 border-b border-gray-100/30 dark:border-dark-accent/30'>
                  <a
                    href={item.href}
                    className='nav-link block text-xl py-2'
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className='flex gap-4 text-xl font-medium font-montserrat mt-8'>
              <a 
                href='/' 
                className='bg-gradient-to-r from-accent-indigo to-accent-purple text-white px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all' 
                onClick={toggleMenu}
              >
                Sign in
              </a>
              <a 
                href='/' 
                className='border border-coral-red bg-white dark:bg-transparent text-coral-red px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all' 
                onClick={toggleMenu}
              >
                Explore
              </a>
            </div>
            <div className="flex items-center gap-4 mt-8">
              <CartIcon />
              <ThemeToggle />
            </div>
            <button 
              className='absolute top-8 right-8 flex items-center justify-center w-10 h-10 text-2xl font-bold text-slate-gray hover:text-coral-red transition-colors dark:text-dark-text dark:hover:text-accent-purple bg-white/20 dark:bg-dark-accent/20 backdrop-blur-md rounded-full border border-slate-200/30 dark:border-dark-accent/30' 
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>
        </div>
      )}
      
      {/* MiniCart component */}
      <MiniCart />
    </header>
  );
};

export default Nav;