import styled from "styled-components";

const Card = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  padding: 15px;
  width: 100%;
  max-width: 800px;
`;

const ItemImage = styled.img`
  width: 100px;
  height: auto;
  border-radius: 8px;
  margin-right: 15px;
`;

const ItemDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ItemName = styled.h3`
  margin: 0;
  font-size: 18px;
`;

const ItemPrice = styled.p`
  margin: 5px 0;
  font-size: 16px;
  font-weight: bold;
`;

const ControlsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-left: auto;
`;

const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const QuantityButton = styled.button`
  background-color: #ff6f61;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 16px;
  margin: 0 5px;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const RemoveButton = styled.button`
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px; /* Margin to separate from quantity controls */

  &:hover {
    background-color: #c82333;
  }
`;

const CartCard = ({ car, onRemove, onQuantityChange }) => {
  const handleDecrement = () => {
    if (car.quantity > 1) {
      onQuantityChange(car.id, car.quantity - 1);
    }
  };

  const handleIncrement = () => {
    onQuantityChange(car.id, car.quantity + 1);
  };

  return (
    <Card>
      <ItemImage src={car.image} alt={car.name} />
      <ItemDetails>
        <ItemName>{car.name}</ItemName>
        <ItemPrice>${car.price.toLocaleString()}</ItemPrice>
      </ItemDetails>
      <ControlsWrapper>
        <QuantityControls>
          <QuantityButton
            onClick={handleDecrement}
            disabled={car.quantity <= 1}
          >
            -
          </QuantityButton>
          <p style={{ margin: "0 5px" }}>{car.quantity}</p>
          <QuantityButton onClick={handleIncrement}>+</QuantityButton>
        </QuantityControls>
        <RemoveButton onClick={() => onRemove(car.id)}>Remove</RemoveButton>
      </ControlsWrapper>
    </Card>
  );
};

export default CartCard;
