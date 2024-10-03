import styled from "styled-components";
import logo from "../assets/images/logo.svg";
import companyName from "../assets/images/companyNameLogo.svg";
import googleLogo from "../assets/images/googleLogo.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Wrapper = styled.div`
  background-color: #fff;
  margin: 40px auto;
  padding: 40px;
  max-width: 400px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;

  .logoContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;

    .logoImgWrapper {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 20px;

      img {
        height: 40px;
      }
    }
  }

  .inputContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 20px;

    label {
      font-size: 14px;
      font-weight: bold;
      color: #333;
      margin-bottom: 5px;
    }

    input {
      padding: 10px;
      font-size: 16px;
      border: 1px solid #ddd;
      border-radius: 4px;
      outline: none;
      transition: border-color 0.3s ease;

      &:focus {
        border-color: #ff6f61;
      }
    }
  }

  .submitButton,
  .googleButton {
    width: 100%;
    background-color: #ff6f61;
    color: white;
    border: none;
    padding: 12px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
    margin-bottom: 15px;

    &:hover {
      background-color: #e35a50;
    }
  }

  .googleButton {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    color: #333;
    border: 1px solid #ddd;
    img {
      margin-right: 8px;
      height: 20px;
    }

    &:hover {
      background-color: #f0f0f0;
    }
  }

  .loginBox {
    border-top: 1px solid #ddd;
    padding-top: 15px;
    width: 100%;
    text-align: center;

    .loginText {
      color: #333;
    }

    .loginLink {
      color: #ff6f61;
      font-weight: bold;
      text-decoration: none;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const notify = (msg) => toast(msg);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://school-app-os8e.onrender.com/api/v1/auth/create-account/student",
        {
          name: name,
          email: email,
          password: password,
        }
      );
      if (res.data.status === "success") {
        notify("Registration successful");
        navigate("/auth/login"); // Navigate to login page after successful registration
      }
      console.log("res", res);
    } catch (error) {
      notify("Registration failed");
      console.log(error);
    }
  };

  return (
    <Wrapper>
      <div className="logoContainer">
        <div className="logoImgWrapper">
          <img src={logo} alt="Logo" />
          <img src={companyName} alt="Company Name" />
        </div>
      </div>
      <form onSubmit={handleSubmit} className="inputContainer">
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="submitButton" type="submit">
          Sign up
        </button>
      </form>

      <button className="googleButton">
        <img src={googleLogo} alt="Google Logo" /> Register with Google
      </button>

      <div className="loginBox">
        <span className="loginText">Already have an account?</span>
        <span className="loginLink" onClick={() => navigate("/auth/login")}>
          {" "}
          Sign in
        </span>
      </div>

      <ToastContainer />
    </Wrapper>
  );
};

export default Register;
