import carData from "./utils/mockData"; // Importing the car data from the mockData file
import { useCart } from "./CartContext"; // Importing the custom hook for cart management

// Styling for the container that holds all the car cards
const containerStyle = {
  padding: "20px",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
};

// Styling for individual car cards
const cardStyle = {
  border: "1px solid #ccc",
  margin: "10px",
  borderRadius: "8px",
  width: "300px",
  textAlign: "center",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.2s", // Transition effect for card scaling
};

// Styling for the car images
const imageStyle = {
  width: "100%",
  borderTopLeftRadius: "8px",
  borderTopRightRadius: "8px",
};

// Styling for the content inside each card
const cardContentStyle = {
  padding: "10px",
};

// Styling for the 'Add to Cart' button
const buttonStyle = {
  padding: "10px 20px",
  margin: "10px",
  backgroundColor: "#ff6f61", // Matches the user's preferred background color
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  opacity: 1,
  transition: "opacity 0.3s", // Smooth transition effect for opacity change
};

// Cars component definition
const Cars = () => {
  const { cart, addToCart } = useCart(); // Destructuring cart and addToCart function from the useCart hook
  const cars = carData(); // Getting the list of cars from carData function

  // Helper function to check if a car is already in the cart
  const isInCart = (carId) => cart.some((car) => car.id === carId);

  return (
    <div>
      <h1>Available Cars</h1>
      <div style={containerStyle}>
        {cars.map((car) => (
          <div
            key={car.id}
            style={PcardStyle}
            onMouseEnter={
              (e) => (e.currentTarget.style.transform = "scale(1.05)") // Slightly scales up the card on hover
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")} // Scales back to normal on mouse leave
          >
            <img src={car.image} alt={car.name} style={imageStyle} />{" "}
            {/* Displaying car image */}
            <div style={cardContentStyle}>
              <h2>{car.name}</h2> {/* Car name */}
              <p>
                <strong>Brand:</strong> {car.brand}
              </p>{" "}
              {/* Car brand */}
              <p>
                <strong>Price:</strong> ${car.price.toLocaleString()}
              </p>{" "}
              {/* Formatted car price */}
              <p>
                <strong>Company:</strong> {car.company}
              </p>{" "}
              {/* Car company */}
              <p>{car.info}</p> {/* Additional car information */}
              <button
                style={{
                  ...buttonStyle,
                  opacity: isInCart(car.id) ? 0.5 : 1, // Changes opacity if the car is already in the cart
                  cursor: isInCart(car.id) ? "not-allowed" : "pointer", // Changes cursor style if the car is in the cart
                }}
                onClick={() => {
                  if (!isInCart(car.id)) {
                    addToCart(car); // Adds the car to the cart if it's not already there
                  }
                }}
                disabled={isInCart(car.id)} // Disables the button if the car is already in the cart
              >
                {isInCart(car.id) ? "Added" : "Add to Cart"}{" "}
                {/* Button text changes based on cart status */}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cars;
