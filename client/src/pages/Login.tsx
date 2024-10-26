import { useState, type FormEvent, type ChangeEvent } from "react";
import Auth from "../utils/auth";
import { login } from "../api/authAPI";
import type { UserLogin } from "../interfaces/UserLogin";

const Login = () => {
  const [loginData, setLoginData] = useState<UserLogin>({
    username: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const data = await login(loginData);
      Auth.login(data.token);
      setErrorMessage(null);
    } catch (err) {
      console.error("Whoops! Incorrect Credentials, Try Again", err);
      setErrorMessage("Incorrect credentials. Please try again.");
    }
  };

  return (
    <>
      <div className="form-container">
        <form className="form login-form" onSubmit={handleSubmit}>
          <h1>Login</h1>

          <div className="form-group">
            <label>Username</label>
            <input
              className="form-input"
              type="text"
              name="username"
              value={loginData.username || ""}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              className="form-input"
              type="password"
              name="password"
              value={loginData.password || ""}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <button className="btn btn-primary" type="submit">
              Login
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          </form>
        </form>
      </div>
    </>
  );
};

export default Login;
