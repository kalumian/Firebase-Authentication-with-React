import React, { useState, useEffect } from "react";
import { auth } from "../Firebase/firebase";
import { useHistory, Link } from "react-router-dom";
const initialState = { email: "", password: "" };

function Login() {
  useEffect(() => {
    document.title = "React| Login ";
  }, []);

  const [input, setINput] = useState(initialState);
  const histroy = useHistory();
  const [error , setError] = useState('')

  const handleChange = ({ target }) => {
    setINput({
      ...input,
      [target.name]: target.value,
    });
    setError('')
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(input.email, input.password);
      setINput(initialState);
      histroy.push("/");
    } catch (error) {
      setError(error.message)
    }
  };

  return (
    <div className="login">
      <h1>Login Page</h1>

      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          value={input.email}
          autoComplete="off"
          name="email"
          onChange={handleChange}
        />

        <label htmlFor="password">Email</label>
        <input
          type="password"
          value={input.password}
          autoComplete="off"
          name="password"
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
        <p className="form__error">{error}</p>
        <Link to="/signup">Create New Acount</Link>
      </form>
    </div>
  );
}

export default Login;
