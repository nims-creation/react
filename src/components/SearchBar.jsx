import { useState, useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const SearchBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const searchRef = useRef(null);
  const { theme } = useTheme();
  
  // Dummy suggestions data - in a real app, this would come from your product data
  const dummySuggestions = [
    { id: 1, name: 'Nike Air Max', image: '/nike-air-max.png', category: 'Running' },
    { id: 2, name: 'Nike React Element', image: '/nike-react.png', category: 'Lifestyle' },
    { id: 3, name: 'Nike Zoom Pegasus', image: '/nike-zoom.png', category: 'Running' },
    { id: 4, name: 'Nike Dunk Low', image: '/nike-dunk.png', category: 'Casual' },
    { id: 5, name: 'Nike Jordan 1', image: '/nike-jordan.png', category: 'Basketball' },
  ];

  // Filter suggestions based on search term
  useEffect(() => {
    if (searchTerm.length > 1) {
      const filtered = dummySuggestions.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  }, [searchTerm]);

  // Handle click outside to close expanded search
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsExpanded(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div 
      ref={searchRef}
      className={`relative flex items-center transition-all duration-300 ${
        isExpanded ? 'w-64' : 'w-10'
      }`}
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`flex items-center justify-center w-10 h-10 rounded-full 
          ${isExpanded ? 'bg-accent-indigo text-white dark:bg-accent-purple' : 'bg-white dark:bg-dark-secondary'} 
          shadow-md hover:shadow-lg transition-all z-10`}
        aria-label="Search"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </button>

      {/* Search input */}
      <div
        className={`absolute right-0 h-10 overflow-hidden transition-all duration-300 rounded-full border border-slate-200 dark:border-dark-accent/30 ${
          isExpanded ? 'w-full opacity-100' : 'w-0 opacity-0'
        }`}
      >
        <input
          type="text"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={`w-full h-full pl-12 pr-4 outline-none bg-white dark:bg-dark-secondary text-slate-gray dark:text-dark-text`}
          disabled={!isExpanded}
        />
      </div>

      {/* Search suggestions dropdown */}
      {isExpanded && suggestions.length > 0 && (
        <div className="absolute top-12 right-0 w-full bg-white dark:bg-dark-secondary shadow-lg rounded-xl border border-slate-200 dark:border-dark-accent/30 z-20 max-h-80 overflow-y-auto">
          <div className="py-2">
            <h3 className="px-4 py-2 text-sm font-semibold text-slate-gray dark:text-dark-muted">
              Suggestions
            </h3>
            <ul>
              {suggestions.map((item) => (
                <li key={item.id} className="hover:bg-slate-100 dark:hover:bg-dark-accent/20">
                  <a 
                    href={`/product/${item.id}`} 
                    className="flex items-center px-4 py-2"
                  >
                    <div className="w-8 h-8 bg-pale-blue dark:bg-dark-accent/30 rounded-md flex items-center justify-center mr-3">
                      <span className="text-xs font-medium text-accent-indigo dark:text-accent-purple">
                        {item.name.substring(0, 2)}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-dark-blue dark:text-dark-text">
                        {item.name}
                      </p>
                      <p className="text-xs text-slate-gray dark:text-dark-muted">
                        {item.category}
                      </p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar; 