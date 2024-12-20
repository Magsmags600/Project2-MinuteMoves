import { useState, type FormEvent, type ChangeEvent } from "react";
import Auth from "../utils/auth";
import { signUp } from "../api/authAPI";
import type { CreateAccount } from "../interfaces/CreateAccount";
import "../css/CreateAccountStyle.css";

const CreateAccount = () => {
  const [CreateAccountData, setCreateAccountData] = useState<CreateAccount>({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setCreateAccountData({
      ...CreateAccountData,
      [name]: value,
    });
  };

  const validateEmail = (email: string) => {
    return email.includes("@");
  };

  const validatePassword = (password: string) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!validateEmail(CreateAccountData.email)) {
      setErrorMessage("Email must contain an '@' symbol.");
      return;
    }

    if (!validatePassword(CreateAccountData.password)) {
      setErrorMessage(
        "Password must be at least 8 characters long, contain at least one uppercase letter, and one number."
      );
      return;
    }

    try {
      const data = await signUp(CreateAccountData);
      Auth.login(data.token);
    } catch (err) {
      console.error("Error: Existing User", err);
      setErrorMessage("Failed to create account. Please try again.");
    }
  };

  return (
    <div className="form-container">
      <form className="form create-account-form" onSubmit={handleSubmit}>
        <h1 className="form-title">Create Account</h1>

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <div className="form-group">
          <label className="form-label">Username</label>
          <input
            className="form-input"
            type="text"
            name="username"
            value={CreateAccountData.username}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label">First Name</label>
          <input
            className="form-input"
            type="text"
            name="firstName"
            value={CreateAccountData.firstName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Last Name</label>
          <input
            className="form-input"
            type="text"
            name="lastName"
            value={CreateAccountData.lastName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Email</label>
          <input
            className="form-input"
            type="text"
            name="email"
            value={CreateAccountData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Password</label>
          <input
            className="form-input"
            type="password"
            name="password"
            value={CreateAccountData.password}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <button className="btn create-account-btn" type="submit">
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateAccount;
