import { useState, type FormEvent, type ChangeEvent } from "react";
import Auth from "../utils/auth";
import { login } from "../api/authAPI";
import type { CreateAccount } from "../interfaces/CreateAccount";

const Login = () => {
  const [CreateAccountData, setCreateAccountData] = useState<CreateAccount>({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setCreateAccountData({
      ...CreateAccountData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const data = await login(CreateAccountData);
      Auth.login(data.token);
    } catch (err) {
      console.error("Error: Existing User", err);
    }
  };

  return (
    <>
      <div className="form-container">
        <form className="form login-form" onSubmit={handleSubmit}>
          <h1>Create Account Form</h1>

          <div className="form-group">
            <label>Username</label>
            <input
              className="form-input"
              type="text"
              name="username"
              value={CreateAccountData.username}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>First Name</label>
            <input
              className="form-input"
              type="text"
              name="firstname"
              value={CreateAccountData.firstname}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              className="form-input"
              type="text"
              name="lastname"
              value={CreateAccountData.lastname}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              className="form-input"
              type="text"
              name="email"
              value={CreateAccountData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              className="form-input"
              type="password"
              name="password"
              value={CreateAccountData.password}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <button className="btn btn-primary" type="submit">
              Create Account
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
