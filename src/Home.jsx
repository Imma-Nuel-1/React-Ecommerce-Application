import styled from "styled-components"; // Importing styled-components for styling
import carData from "./utils/mockData"; // Importing mock car data
import { useNavigate } from "react-router-dom"; // Importing useNavigate hook for navigation

// Styled Components

// Wrapper component for the main container of the Home page
const Wrapper = styled.div`
  text-align: center; // Center align text inside the container
  padding: 2rem; // Padding around the content
  background-color: #f4f4f4; // Light gray background color
`;

// HeroSection component for the hero section with a background image
const HeroSection = styled.section`
  background: url("https://zakautoleasing.com/wp-content/uploads/2017/02/0bd40c3319a793ac5c8f10c81674d4a7.jpg")
    no-repeat center center; // Background image with no-repeat and centered
  background-size: cover; // Cover the entire section with the background image
  color: white; // White text color for contrast against the background
  padding: 4rem 2rem; // Padding for the content inside the hero section
  text-align: center; // Center align text inside the section
  height: 300px; // Fixed height for the hero section
`;

// Section component for individual sections on the page
const Section = styled.section`
  margin: 2rem 0; // Vertical margin to separate sections
  padding: 1rem; // Padding inside the section
`;

// Title component for the main titles
const Title = styled.h1`
  font-size: 2.5rem; // Large font size for titles
  margin-bottom: 1rem; // Space below the title
`;

// Subtitle component for the subtitles
const Subtitle = styled.h2`
  font-size: 1.5rem; // Font size for subtitles
  margin-bottom: 1rem; // Space below the subtitle
`;

// Text component for paragraph text
const Text = styled.p`
  font-size: 1rem; // Regular font size for text
  color: #333; // Dark gray text color
`;

// Button component for action buttons
const Button = styled.button`
  padding: 0.75rem 1.5rem; // Padding inside the button
  font-size: 1rem; // Font size for button text
  color: #ff6f61; // Text color matching the website's primary color
  background-color: #333; // Dark background color for contrast
  border: none; // No border for the button
  border-radius: 5px; // Rounded corners
  cursor: pointer; // Pointer cursor on hover
  transition: background-color 0.3s; // Smooth transition for hover effect

  &:hover {
    background-color: #555; // Lighter gray color on hover for visual feedback
  }
`;

// CarGrid component for displaying car cards in a grid
const CarGrid = styled.div`
  display: flex; // Flexbox for layout
  flex-wrap: wrap; // Allow wrapping of flex items
  justify-content: center; // Center the items
  gap: 2rem; // Space between grid items
`;

// CarCard component for individual car cards
const CarCard = styled.div`
  background: white; // White background for the card
  border-radius: 10px; // Rounded corners for the card
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); // Subtle shadow for depth
  overflow: hidden; // Hide overflow to keep the content within rounded corners
  width: 300px; // Fixed width for consistency
  text-align: left; // Left align text inside the card
`;

// CarImage component for the car images inside cards
const CarImage = styled.img`
  width: 100%; // Full width for the image
  height: 200px; // Fixed height for image uniformity
  object-fit: cover; // Cover the entire image space without distortion
`;

// CarInfo component for car details inside cards
const CarInfo = styled.div`
  padding: 1rem; // Padding around car details
`;

// CarTitle component for car titles inside cards
const CarTitle = styled.h3`
  margin: 0 0 0.5rem; // Margin below the title
`;

// CarPrice component for displaying car prices
const CarPrice = styled.p`
  color: #666; // Gray color for car price
  margin: 0; // No margin to keep it tight with car title
`;

// TestimonialSection component for displaying testimonials in a grid
const TestimonialSection = styled.section`
  display: flex; // Flexbox for layout
  flex-wrap: wrap; // Allow wrapping of flex items
  justify-content: center; // Center the items
  gap: 2rem; // Space between testimonial items
  margin: 2rem 0; // Vertical margin around the section
  padding: 1rem; // Padding inside the section
`;

// TestimonialCard component for individual testimonial cards
const TestimonialCard = styled.div`
  background: white; // White background for the card
  border-radius: 10px; // Rounded corners for the card
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); // Subtle shadow for depth
  padding: 1rem; // Padding inside the card
  text-align: left; // Left align text inside the card
  width: 300px; // Fixed width for consistency
`;

// TestimonialTitle component for testimonial titles inside cards
const TestimonialTitle = styled.h3`
  font-size: 1.2rem; // Font size for testimonial title
  margin-bottom: 0.5rem; // Space below the testimonial title
`;

// TestimonialText component for testimonial text
const TestimonialText = styled.p`
  font-size: 1rem; // Regular font size for text
  color: #333; // Dark gray text color
`;

// Home component representing the home page of the website
const Home = () => {
  const navigate = useNavigate(); // Hook for navigation
  const cars = carData(); // Fetching car data

  // Handler function for the "Shop Now" button click
  const handleShopNowClick = () => {
    navigate("/cars"); // Navigate to the cars page (adjust path as necessary)
  };

  return (
    <Wrapper>
      {/* Hero Section */}
      <HeroSection>
        <Title>Welcome to Elite Auto Hub</Title> {/* Main heading */}
        <Subtitle>Your one-stop shop for the best cars</Subtitle>{" "}
        {/* Subtitle */}
        <Button onClick={handleShopNowClick}>Shop Now</Button>{" "}
        {/* Shop Now button */}
      </HeroSection>
      {/* Featured Cars Section */}
      <Section>
        <Title>Featured Cars</Title> {/* Section title */}
        <CarGrid>
          {cars.map((car) => (
            <CarCard key={car.id}>
              {" "}
              {/* Car card for each car */}
              <CarImage src={car.image} alt={car.name} /> {/* Car image */}
              <CarInfo>
                <CarTitle>{car.name}</CarTitle> {/* Car name */}
                <CarPrice>${car.price.toLocaleString()}</CarPrice>{" "}
                {/* Car price formatted */}
                <Text>{car.info}</Text> {/* Car description */}
              </CarInfo>
            </CarCard>
          ))}
        </CarGrid>
      </Section>
      {/* Customer Testimonials Section */}
      <Title>Customer Testimonials</Title> {/* Section title */}
      <TestimonialSection>
        {/* Individual testimonial cards */}
        <TestimonialCard>
          <TestimonialTitle>John Doe</TestimonialTitle>
          <TestimonialText>
            "Fantastic service! The car buying experience was smooth and
            enjoyable. Highly recommend!"
          </TestimonialText>
        </TestimonialCard>
        <TestimonialCard>
          <TestimonialTitle>Jane Smith</TestimonialTitle>
          <TestimonialText>
            "I found the perfect car at a great price. The team was helpful and
            knowledgeable."
          </TestimonialText>
        </TestimonialCard>
        <TestimonialCard>
          <TestimonialTitle>Michael Johnson</TestimonialTitle>
          <TestimonialText>
            "Excellent customer service and a wide selection of cars. Will
            definitely return for my next purchase."
          </TestimonialText>
        </TestimonialCard>
      </TestimonialSection>
    </Wrapper>
  );
};

export default Home; // Exporting the Home component for use in other parts of the application
