import { createContext, useContext, useState, useEffect } from "react";

// Create the cart context
const CartContext = createContext(undefined);

// Sample product data for testing
const sampleProducts = [
  {
    id: 1,
    name: "Nike Air Max 270",
    price: 150,
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-665455a5-45de-40fb-945f-c1852b82400d/air-max-270-mens-shoes-KkLcGR.png",
    color: "Black/White",
    size: "10",
  },
  {
    id: 2,
    name: "Nike React Element",
    price: 130,
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/xngdhlkxtypbj1ufptqd/react-element-55-se-mens-shoe-XdZQL5.png",
    color: "Gray/Black",
    size: "9.5",
  },
  {
    id: 3,
    name: "Nike Zoom Pegasus",
    price: 120,
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-cc608b0a-1c7c-46f7-88c1-559f481e9cf0/air-zoom-pegasus-38-mens-road-running-shoes-lq7PZZ.png",
    color: "Blue/White",
    size: "11",
  }
];

// Create the cart provider
export const CartProvider = ({ children }) => {
  // Get cart from localStorage or set empty array
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  
  // Save cart to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  
  // Add product to cart
  const addToCart = (product, quantity = 1) => {
    setCart(prevCart => {
      // Check if the product is already in the cart
      const existingProductIndex = prevCart.findIndex(
        item => item.id === product.id
      );
      
      // If it's already in the cart, update the quantity
      if (existingProductIndex > -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += quantity;
        return updatedCart;
      }
      
      // Otherwise, add the product to the cart
      return [...prevCart, { ...product, quantity }];
    });
    
    // Trigger animation
    setShowAnimation(true);
    setTimeout(() => setShowAnimation(false), 1500);
  };
  
  // Remove product from cart
  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };
  
  // Update product quantity
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCart(prevCart => 
      prevCart.map(item => 
        item.id === productId 
          ? { ...item, quantity: newQuantity } 
          : item
      )
    );
  };
  
  // Clear the cart
  const clearCart = () => {
    setCart([]);
  };
  
  // Get total number of items in the cart
  const getCartItemCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };
  
  // Get total price of items in the cart
  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };
  
  // Toggle the cart sidebar
  const toggleCart = () => {
    setIsCartOpen(prev => !prev);
  };
  
  // Sample method to add a sample product (for testing)
  const addSampleProduct = () => {
    // Pick a random product from the sample products
    const randomProduct = sampleProducts[Math.floor(Math.random() * sampleProducts.length)];
    addToCart(randomProduct);
  };
  
  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      isCartOpen,
      toggleCart,
      getCartItemCount,
      getCartTotal,
      showAnimation,
      addSampleProduct
    }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook for using the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}; 