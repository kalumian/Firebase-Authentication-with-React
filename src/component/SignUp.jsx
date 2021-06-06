import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../Firebase/firebase";
const initialState = { email: "", password: "", confirmPassword: "" };

function SignUp() {
  useEffect(() => {
    document.title = "React| Sign Up ";
  }, []);

  const [input, setINput] = useState(initialState);
  const [error, setError] = useState("");
  const histroy = useHistory();

  const handleChange = ({ target }) => {
    setINput({
      ...input,
      [target.name]: target.value,
    });
    setError("");
  };

  const handleSubmit = async (e) => {
    if (input.password !== input.confirmPassword)
      return setError("Password don't match");

    e.preventDefault();
    try {
      await auth.createUserWithEmailAndPassword(input.email, input.password);
      setINput(initialState);
      histroy.push("/login");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login">
      <h1>Sign Up Page</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          value={input.email}
          autoComplete="off"
          name="email"
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={input.password}
          autoComplete="off"
          name="password"
          onChange={handleChange}
        />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          value={input.confirmPassword}
          autoComplete="off"
          name="confirmPassword"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
        <p className="form__error">{error}</p>
        <Link to="/login">Have Acount, Login</Link>
      </form>
    </div>
  );
}

export default SignUp;
