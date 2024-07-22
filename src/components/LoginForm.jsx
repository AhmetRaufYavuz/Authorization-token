import React, { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';

function LoginForm() {
  const { login } = useContext(AuthContext);
  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    login(form);
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="loginFormMainDiv">
      <h1>LOGIN</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <h2>Username</h2>
          <input
            name="username"
            placeholder="Username"
            type="text"
            onChange={handleChange}
            value={form.username}
          />
        </div>
        <div>
          <h2>Password</h2>
          <input
            name="password"
            placeholder="Password"
            type="password"
            onChange={handleChange}
            value={form.password}
          />
        </div>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}

export default LoginForm;
