import React, { useRef } from "react";
import "./common.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { Helmet } from "react-helmet";

const Register = () => {
  const emailInput = useRef() as React.MutableRefObject<HTMLInputElement>;
  const passwordInput = useRef() as React.MutableRefObject<HTMLInputElement>;
  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    axios.post("http://localhost:5000/users/register", {
      email: emailInput.current.value,
      password: passwordInput.current.value,
    });
  };
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://maks-images-aws-bucket.s3.ap-south-1.amazonaws.com/maks-logo.png"
          type="image/icon"
        />
        <title>Register | Maks ~ safety, simplified.</title>
      </Helmet>
      <Navbar />
      <div className="session">
        <div className="left">
          <img
            id="image"
            src="https://maks-images-aws-bucket.s3.ap-south-1.amazonaws.com/maks-logo.png"
            alt="icon"
          />
        </div>
        <form>
          <h4>
            Welcome to <span>MAKS</span>
          </h4>
          <p>
            Create a new account to start using Maks and ensuring the safety of
            your venues!
          </p>
          <div className="floating-label">
            <input
              placeholder="Email"
              type="email"
              name="email"
              id="email"
              ref={emailInput}
            />
            <label htmlFor="email">Email</label>
            <div className="icon">
              <svg
                enableBackground="new 0 0 100 100"
                version="1.1"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g transform="translate(0 -952.36)">
                  <path d="m17.5 977c-1.3 0-2.4 1.1-2.4 2.4v45.9c0 1.3 1.1 2.4 2.4 2.4h64.9c1.3 0 2.4-1.1 2.4-2.4v-45.9c0-1.3-1.1-2.4-2.4-2.4h-64.9zm2.4 4.8h60.2v1.2l-30.1 22-30.1-22v-1.2zm0 7l28.7 21c0.8 0.6 2 0.6 2.8 0l28.7-21v34.1h-60.2v-34.1z" />
                </g>
                <rect className="st0" width="100" height="100" />
              </svg>
            </div>
          </div>
          <div className="floating-label">
            <input
              placeholder="Password"
              type="password"
              name="password"
              id="password"
              ref={passwordInput}
            />
            <label htmlFor="password">Password</label>
            <div className="icon">
              <svg
                enableBackground="new 0 0 24 24"
                version="1.1"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect className="st0" width="24" height="24" />
                <path className="st1" d="M19,21H5V9h14V21z M6,20h12V10H6V20z" />
                <path
                  className="st1"
                  d="M16.5,10h-1V7c0-1.9-1.6-3.5-3.5-3.5S8.5,5.1,8.5,7v3h-1V7c0-2.5,2-4.5,4.5-4.5s4.5,2,4.5,4.5V10z"
                />
                <path
                  className="st1"
                  d="m12 16.5c-0.8 0-1.5-0.7-1.5-1.5s0.7-1.5 1.5-1.5 1.5 0.7 1.5 1.5-0.7 1.5-1.5 1.5zm0-2c-0.3 0-0.5 0.2-0.5 0.5s0.2 0.5 0.5 0.5 0.5-0.2 0.5-0.5-0.2-0.5-0.5-0.5z"
                />
              </svg>
            </div>
          </div>
          <button id="register-btn" type="submit" onClick={onClickHandler}>
            Register
          </button>
          <Link className="a" to="/login">
            Login to your account
          </Link>
        </form>
      </div>
    </>
  );
};

export default Register;
