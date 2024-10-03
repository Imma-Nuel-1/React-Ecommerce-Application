import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../Home";
import Cars from "../Cars";
import About from "../About";
import Contact from "../Contact";
import Cart from "../Cart";
import Navbar from "../navbar/Navbar";
import { CartProvider } from "../CartContext";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {
  const { userData } = useContext(AuthContext);
  console.log(userData);
  if (!userData) {
    return <Navigate to="/auth/login" />;
  }

  return (
    <CartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </CartProvider>
  );
};

export default Dashboard;
