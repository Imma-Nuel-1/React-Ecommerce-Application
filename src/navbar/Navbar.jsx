// Navbar.jsx
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useCart } from "../CartContext";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Wrapper = styled.div`
  background-color: #333;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavSection = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  font-weight: bold;
  color: #ff6f61;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
`;

const NavItem = styled.li`
  margin: 0 10px;

  a {
    color: white;
    text-decoration: none;
    padding: 5px 10px;
    border-radius: 4px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #555;
    }

    &.active {
      font-weight: bold;
      background-color: #666;
    }
  }
`;

const CartButton = styled(NavLink)`
  color: #ff6f61;
  cursor: pointer;
  margin-left: auto;
  padding: 0 10px;
  font-size: 18px;

  &:hover {
    color: #aaa;
  }
`;

const LogoutButton = styled.button`
  background-color: #ff6f61;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
  margin-left: 10px;

  &:hover {
    background-color: #e35a50;
  }
`;

const Navbar = () => {
  const { cart } = useCart();
  const { logout } = useContext(AuthContext);

  return (
    <Wrapper>
      <Title>Elite Auto Hub</Title>
      <NavSection>
        <NavList>
          <NavItem>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="/cars"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Cars
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Contact
            </NavLink>
          </NavItem>
        </NavList>
      </NavSection>
      <CartButton to="/cart">🛒 {cart?.length} items</CartButton>
      <LogoutButton onClick={logout}>Logout</LogoutButton>
    </Wrapper>
  );
};

export default Navbar;
