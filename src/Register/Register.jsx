import React, { useState } from "react";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";

function Register({
  email,
  setUsername,
  password,
  user,
  username,
  setEmail,
  showpass,
  setShowpass,
  setShowpassconfi,
  showpassconfi,
  setUser,
  setPassword
}) {
  const [cofig, setConfig] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false); // ✅ state برای چک‌باکس

  const handleRegister = (e) => {
    e.preventDefault();

    // بررسی تیک چک‌باکس
    if (!agreeTerms) {
      alert("You must agree to the Terms of Service and Privacy Policy.");
      return;
    }

    // بررسی یکسان بودن پسورد
    if (password !== cofig) {
      alert("Passwords do not match. Please try again.");
      return;
    }

    // محاسبه سطح رمز عبور
    let level_password = 0;
    if (password.length >= 8) level_password += 1;
    if (/[A-Z]/.test(password)) level_password += 1;
    if (/[a-z]/.test(password)) level_password += 1;
    if (/[0-9]/.test(password)) level_password += 1;
    if (/[^A-Za-z0-9]/.test(password)) level_password += 1;

    if (level_password < 5) {
      alert(
        "Your password is too weak. Try adding uppercase letters, numbers, or symbols."
      );
      return;
    }

    const newUser = { username, email, password };
    setUser([...user, newUser]);
    alert("Register is successful.");

    // پاک کردن فرم
    setUsername("");
    setEmail("");
    setPassword("");
    setConfig("");
    setAgreeTerms(false);
  };

  return (
    <div className="login-container">
      <form onSubmit={handleRegister}>
        <div className="from-container">
          <div className="input-total">
            <input
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label>Username</label>
          </div>
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
          <div className="input-total pass-show">
            <input
              type={showpassconfi ? "text" : "password"}
              required
              className="input-with-icon"
              value={cofig}
              onChange={(e) => setConfig(e.target.value)}
            />
            <label>Confirm Password</label>
            <span
              className="icon-inside"
              onClick={() => setShowpassconfi(!showpassconfi)}
            >
              {showpassconfi ? <IoEyeSharp /> : <FaEyeSlash />}
            </span>
          </div>
        </div>

        <div className="password-forget">
          <input
            type="checkbox"
            id="terms"
            checked={agreeTerms}
            onChange={(e) => setAgreeTerms(e.target.checked)}
          />
          <label htmlFor="terms">
            I agree to the{" "}
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>
            .
          </label>
        </div>

        <div className="btn-container">
          <button className="btn-from action">Register</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
