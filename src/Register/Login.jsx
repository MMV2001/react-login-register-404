import React, { useState, useEffect } from "react";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import {loadCaptchaEnginge,LoadCanvasTemplate,validateCaptcha } from "react-simple-captcha";



function Login({
  setPassword,
  user,
  email,
  setEmail,
  showpass,
  setShowpass,
  password,
}) {
  const [captchaValue, setCaptchaValue] = useState("");

  React.useEffect(() => {
    loadCaptchaEnginge(5);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!validateCaptcha(captchaValue)) {
      alert("Captcha is incorrect. Please try again.");
      return;
    }

    const foundUser = user.find(
      (u) => u.email === email && u.password === password
    );

    if (foundUser) {
      alert("Login successful!");
    } else {
      alert("No user found with these credentials.");
    }

    // پاک کردن فیلدها (اختیاری)
    setEmail("");
    setPassword("");
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <div className="from-container">
          <div className="input-total">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Email</label>
          </div>
          <div className="input-total pass-show">
            <input
              type={showpass ? "text" : "password"}
              required
              className="input-with-icon"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Password</label>
            <span
              className="icon-inside"
              onClick={() => setShowpass(!showpass)}
            >
              {showpass ? <IoEyeSharp /> : <FaEyeSlash />}
            </span>
          </div>
        </div>
        <div className="captcha-container">
          <LoadCanvasTemplate />
          <input
            type="text"
            required
            placeholder="Enter Captcha"
            value={captchaValue}
            onChange={(e) => setCaptchaValue(e.target.value)}
          />
        </div>

        <div className="password-forget">
          <a href="#" className="forget-link">
            Forgot your password?
          </a>
        </div>

        <div className="btn-container">
          <button type="submit" className="btn-from action">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
