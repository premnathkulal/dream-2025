import "./Login.scss";
import AppLogo from "../../assets/react.svg";
import { FormEvent, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import InputBox, { InputTypes } from "../../components/input-box/InputBox";

const AdminLogin = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    setShowError(false);
  }, [userName, password]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Email:", userName);
    console.log("Password:", password);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-page">
      <div className={`login-container ${showError ? "error-warn" : ""}`}>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-title">
            <p>Admin Login</p>
            <img src={AppLogo} alt="brand-logo" className="brand-logo" />
          </div>
          <InputBox
            id="user-name"
            name="user-name"
            type={InputTypes.Text}
            label="Name"
            value={userName}
            isRequired
            setInputValue={setUserName}
          />
          <InputBox
            id="password"
            name="password"
            type={!showPassword ? InputTypes.Password : InputTypes.Text}
            label="Password"
            value={password}
            isRequired
            isHiddenInput
            setInputValue={setPassword}
            handleShowHideInput={handleShowPassword}
          />
          <button type="submit" className="btn">
            LOGIN
          </button>
          <a href="/#" className="forgot-password-link">
            Forgot Password?
          </a>
          {showError && (
            <p className="warn-message">
              <FontAwesomeIcon icon={faCircleInfo} />
              <span>Invalid Credentials</span>
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
