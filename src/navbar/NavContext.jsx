// Import the necessary React hooks
import { createContext, useState } from "react";

// Create a new React context named NavContext
// This context will be used to share state between components
const NavContext = createContext();

// Create a provider component named NavProvider
// This component will wrap other components and provide them with the context value
const NavProvider = ({ children }) => {
  // Create a state variable activeLink with an initial value of "/"
  // This state variable will be used to store the currently active link in the navigation bar
  const [activeLink, setActiveLink] = useState("/");

  // Return the NavContext.Provider component, which wraps the children component(s)
  // The value prop of the NavContext.Provider component is an object that contains the activeLink state variable and the setActiveLink function
  // This object will be made available to all components that are wrapped by the NavProvider component
  return (
    <NavContext.Provider value={{ activeLink, setActiveLink }}>
      {children}
    </NavContext.Provider>
  );
};

// Export both the NavContext and NavProvider components together
// This allows other components to import and use them
export { NavContext, NavProvider };
