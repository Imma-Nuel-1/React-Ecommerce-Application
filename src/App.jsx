// Import the necessary components from the react-router-dom library
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Auth from "./auth/Auth";
import Dashboard from "./pages/Dashboard";

// Define the App component
const App = () => {
  // Return the JSX for the App component
  return (
    // Wrap the entire app in the Router component
    <Router>
      {/* // Define the routes for the app using the Routes component */}
      <Routes>
        <Route path="/auth/*" element={<Auth />} />
        <Route path="/*" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

// Export the App component as the default export
export default App;
