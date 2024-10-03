import styled from "styled-components"; // Importing styled-components for styling

// Styled Components

// Container component for wrapping the contact form with styling
const Container = styled.div`
  max-width: 800px; // Maximum width of the container
  margin: 0 auto; // Center the container horizontally
  padding: 20px; // Padding inside the container
  background-color: #f4f4f4; // Light gray background color
  border-radius: 8px; // Rounded corners
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // Box shadow for a subtle 3D effect
`;

// Header component for styling the heading section
const Header = styled.div`
  text-align: center; // Center the text
  margin-bottom: 20px; // Space below the header

  h1 {
    font-size: 2.5rem; // Large font size for the main heading
    color: #ff6f61; // Primary color matching the website's theme
  }
`;

// Form component for styling the contact form
const Form = styled.form`
  display: flex; // Use flexbox for layout
  flex-direction: column; // Stack form elements vertically

  label {
    font-size: 1rem; // Font size for labels
    margin-bottom: 5px; // Space below each label
  }

  input,
  textarea {
    padding: 10px; // Padding inside input fields and textarea
    margin-bottom: 15px; // Space below each input field and textarea
    border: 1px solid #ccc; // Light gray border
    border-radius: 4px; // Rounded corners
    font-size: 1rem; // Font size for input text
  }

  button {
    padding: 10px 20px; // Padding inside the button
    background-color: #ff6f61; // Button background color matching the website's primary color
    color: white; // Button text color
    border: none; // No border
    border-radius: 4px; // Rounded corners for the button
    font-size: 1rem; // Font size for button text
    cursor: pointer; // Pointer cursor on hover
    transition: background-color 0.3s ease; // Smooth transition effect on background color change

    &:hover {
      background-color: #e85a50; // Darker color on hover for better visual feedback
    }
  }
`;

// Contact component representing the Contact Us page
const Contact = () => {
  return (
    <Container>
      {/* Header section */}
      <Header>
        <h1>Contact Us</h1> {/* Main heading */}
      </Header>

      {/* Form section */}
      <Form>
        <label htmlFor="name">Name</label> {/* Label for the name input */}
        <input type="text" id="name" placeholder="Your Name" required /> {/* Input field for name */}

        <label htmlFor="email">Email</label> {/* Label for the email input */}
        <input type="email" id="email" placeholder="Your Email" required /> {/* Input field for email */}

        <label htmlFor="message">Message</label> {/* Label for the message textarea */}
        <textarea
          id="message"
          rows="5"
          placeholder="Your Message"
          required
        ></textarea> {/* Textarea for message */}

        <button type="submit">Send Message</button> {/* Submit button */}
      </Form>
    </Container>
  );
};

export default Contact; // Exporting the Contact component for use in other parts of the application
