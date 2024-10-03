import { createContext, useContext, useState } from "react"; // Importing necessary hooks from React

// Create Context
const CartContext = createContext(); // Creating a context with an initial value

// Cart Provider Component
const CartProvider = ({ children }) => {
  // State to manage the items in the cart
  const [cart, setCart] = useState([]); // Initialize cart state as an empty array

  // Function to add a car to the cart
  const addToCart = (car) => {
    // Check if car is already in the cart
    const existingCar = cart.find((item) => item.id === car.id);

    if (existingCar) {
      // If the car is already in the cart, update its quantity
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === car.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      // Adds a new car to the cart state with quantity 1
      setCart((prevCart) => [...prevCart, { ...car, quantity: 1 }]);
    }
  };

  // Function to remove a car from the cart
  const removeFromCart = (carId) => {
    // Updates the cart state by removing the car with the specified id
    setCart((prevCart) => prevCart.filter((car) => car.id !== carId));
  };

  // Function to update the quantity of a car in the cart
  const updateQuantity = (carId, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((car) =>
        car.id === carId ? { ...car, quantity: newQuantity } : car
      )
    );
  };

  // Function to clear all items from the cart
  const clearcart = () => {
    setCart([]); // Resets the cart state to an empty array
  };

  // Function to calculate the total price of all cars in the cart
  const calculateTotal = () => {
    // Calculates the sum of all car prices and formats it as a string with commas
    return cart
      .reduce((total, car) => total + car.price * car.quantity, 0)
      .toLocaleString();
  };

  return (
    // Providing the cart context value to all children components
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearcart,
        calculateTotal,
        updateQuantity, // Add updateQuantity to the context value
      }}
    >
      {children}{" "}
      {/* Renders the children components wrapped in the CartProvider */}
    </CartContext.Provider>
  );
};

// Custom hook to use the Cart context
const useCart = () => useContext(CartContext); // Allows easy access to the cart context in other components

export { CartProvider, useCart };
