// Import the styled components library
import styled from "styled-components";

// Define a styled component for the container element
const Container = styled.div`
  // Set the maximum width to 1200px
  max-width: 1200px;
  // Center the container horizontally
  margin: 0 auto;
  // Add some padding to the container
  padding: 20px;
  // Set the background color to a light gray
  background-color: #f4f4f4;
`;

// Define a styled component for the header element
const Header = styled.div`
  // Center the header text horizontally
  text-align: center;
  // Add some margin to the bottom of the header
  margin-bottom: 20px;

  // Style the h1 element inside the header
  h1 {
    // Set the font size to 2.5rem
    font-size: 2.5rem;
    // Set the color to a bright orange (matches the website's primary color)
    color: #ff6f61;
  }
`;

// Define a styled component for the content element
const Content = styled.div`
  // Set the background color to white
  background-color: #fff;
  // Add some padding to the content element
  padding: 20px;
  // Add a border radius to give the content element a rounded corner
  border-radius: 8px;
  // Add a box shadow to give the content element some depth
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  // Style the p elements inside the content element
  p {
    // Set the line height to 1.6
    line-height: 1.6;
    // Set the font size to 1rem
    font-size: 1rem;
    // Add some margin to the bottom of each paragraph
    margin-bottom: 15px;
  }

  // Style the elements with the class "highlight" inside the content element
  .highlight {
    // Set the font weight to bold
    font-weight: bold;
    // Set the color to a bright orange (matches the website's primary color)
    color: #ff6f61;
  }
`;

// Define the About component
const About = () => {
  return (
    // Render the Container component
    <Container>
      {/* // Render the Header component */}
      <Header>
        {/* // Render an h1 element with the text "About Us" */}
        <h1>About Us</h1>
      </Header>
      {/* // Render the Content component */}
      <Content>
        {/* // Render several paragraphs of text with highlighted words */}
        <p>
          Welcome to <span className="highlight">Elite Auto Hub</span>! My name
          is <span className="highlight">Imma~Nuel</span>, and I am the proud
          owner and founder of this platform. At Elite Auto Hub, we are
          passionate about cars and committed to providing our customers with an
          exceptional online shopping experience.
        </p>
        <p>
          Our mission is simple: to connect car enthusiasts with their dream
          vehicles through a seamless, trustworthy, and innovative online
          marketplace. Whether you are looking for a brand-new ride, a reliable
          used car, or special car accessories, we've got you covered.
        </p>
        <p>
          At Elite Auto Hub, we believe in quality, transparency, and customer
          satisfaction. Every car listed on our site is carefully vetted to
          ensure it meets our high standards of excellence. We strive to offer
          the best deals and provide you with detailed information and tools to
          make informed decisions.
        </p>
        <p>
          Thank you for choosing Elite Auto Hub. We look forward to helping you
          find your next vehicle and making your car-buying experience as smooth
          and enjoyable as possible.
        </p>
        <p>
          If you have any questions or need assistance, don't hesitate to
          contact us. We are here to help you every step of the way!
        </p>
        <p>Happy driving!</p>
        <p>
          Sincerely,
          <br />
          <span className="highlight">Imma~Nuel</span>
          <br />
          Founder & Owner, Elite Auto Hub
        </p>
      </Content>
    </Container>
  );
};

// Export the About component as the default export
export default About;
