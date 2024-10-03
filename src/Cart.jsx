import { useCart } from "./CartContext";
import CartCard from "./CartCard";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// Define styled components for Cart
const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Center all content horizontally */
  justify-content: flex-start; /* Align content to the top */
  padding: 20px;
  min-height: 100vh; /* Full height to make sure container takes full viewport height */
`;

const CartSummary = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Center the summary content horizontally */
  margin-bottom: 20px;
  width: 100%;
  max-width: 800px;
`;

const SubtotalCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 15px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 400px;
`;

const SubtotalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px; /* Space between header and write-up */
`;

const SubtotalText = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: bold;
`;

const SubtotalAmount = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: bold;
`;

const ShippingNote = styled.p`
  margin: 10px 0 0;
  font-size: 14px;
  color: #6c757d;
`;

const EmptyCartMessage = styled.p`
  font-size: 18px;
  margin: 10px 0; /* Adjust margin for spacing */
  text-align: center;
`;

const StartShoppingButton = styled.button`
  background-color: #ff6f61;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #e55c50;
  }
`;

const Cart = () => {
  const { cart, removeFromCart, calculateTotal, updateQuantity } = useCart();
  const navigate = useNavigate();

  const handleStartShopping = () => {
    navigate("/cars");
  };

  return (
    <CartContainer>
      <h1>Cart</h1> {/* Ensuring the title "Cart" is at the top */}
      {cart.length === 0 ? (
        <>
          <EmptyCartMessage>Your cart is currently empty.</EmptyCartMessage>
          <EmptyCartMessage>
            Explore our collection and find your next favorite car!
          </EmptyCartMessage>
          <StartShoppingButton onClick={handleStartShopping}>
            Start Shopping
          </StartShoppingButton>
        </>
      ) : (
        <CartSummary>
          <h2>Cart Summary</h2>
          <SubtotalCard>
            <SubtotalHeader>
              <SubtotalText>Subtotal:</SubtotalText>
              <SubtotalAmount>
                ${calculateTotal().toLocaleString()}
              </SubtotalAmount>
            </SubtotalHeader>
            <ShippingNote>Shipping fee not included yet.</ShippingNote>
          </SubtotalCard>
          {cart.map((car) => (
            <CartCard
              key={car.id}
              car={car}
              onRemove={removeFromCart}
              onQuantityChange={updateQuantity}
            />
          ))}
        </CartSummary>
      )}
    </CartContainer>
  );
};

export default Cart;
