import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import styled from "styled-components";
import loginImage from "../assets/images/loginImage.webp";
import registerImage from "../assets/images/registerImage.webp"; // Import a separate image for the register page

const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;

  .authImage {
    display: block;
    max-width: 100%;
    flex: 1;
    background-color: #00024c;
    background-size: cover;
    background-position: center;
  }
`;

const Auth = () => {
  const location = useLocation();

  // Determine which background image to use based on the current path
  const backgroundImage = location.pathname.includes("register")
    ? registerImage
    : loginImage;

  return (
    <Wrapper>
      <div
        className="authImage"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Wrapper>
  );
};

export default Auth;
