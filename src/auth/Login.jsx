import styled from "styled-components";
import logo from "../assets/images/logo.svg";
import companyName from "../assets/images/companyNameLogo.svg";
import googleLogo from "../assets/images/googleLogo.svg";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ForgotPasswordModal from "../modals/ForgotPasswordModal";
import { storeToLocalStorage } from "../utils";
import { AuthContext } from "../context/AuthContext";

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

  .forgotPassword {
    color: #333;
    text-decoration: underline;
    cursor: pointer;
    margin-bottom: 20px;
  }

  .signupBox {
    border-top: 1px solid #ddd;
    padding-top: 15px;
    width: 100%;
    text-align: center;

    .signupText {
      color: #333;
    }

    .signupLink {
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

const Login = () => {
  const navigate = useNavigate();
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const notify = (msg) => toast(msg);

  const { setUserData } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https:localhost:775/api/v1/auth/login", {
        email: emailOrPhone,
        password: password,
      });
      if (res.data.status === "success") {
        notify("Login successful");
        storeToLocalStorage("userData", res.data.data);
        setUserData(res.data.data);
        navigate("/");
      }
      console.log("res", res);
    } catch (error) {
      notify("Login failed");
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
        <label htmlFor="emailOrPhone">Email or Phone Number</label>
        <input
          type="text"
          id="emailOrPhone"
          value={emailOrPhone}
          onChange={(e) => setEmailOrPhone(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="submitButton" type="submit">
          Sign in
        </button>
      </form>

      <button className="googleButton">
        <img src={googleLogo} alt="Google Logo" /> Login with Google
      </button>

      {/* Forgotten password link to open the modal */}
      <div className="forgotPassword" onClick={() => setIsModalOpen(true)}>
        Forgotten password?
      </div>

      <div className="signupBox">
        <span className="signupText">Don't have an account?</span>
        <span className="signupLink" onClick={() => navigate("/auth/register")}>
          {" "}
          Sign up
        </span>
      </div>

      <ToastContainer />

      {/* Forgot Password Modal */}
      <ForgotPasswordModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </Wrapper>
  );
};

export default Login;
