import React, { useCallback } from "react";
import { login, logout, useAuth } from "../../contexts/auth";
import Title from "../Title";

const Login = (): JSX.Element => {
  const [{ loggedIn, token, error }, dispatch] = useAuth();

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();

      const data = new FormData(event.target);
      const username = data.get("username") as string;
      const password = data.get("password") as string;

      dispatch(login(username, password));
    },
    [dispatch]
  );

  const handleLogout = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  return (
    <div className="component">
      <Title name="Login" />
      <div>
        <p>
          Counter actions cause re-render, since
          <br />
          CounterContextProvider is parent of AuthContextProvider.
        </p>
      </div>
      {loggedIn ? (
        <>
          <div>Your token is {token}.</div>
          <div>
            <button type="button" onClick={handleLogout}>
              logout
            </button>
          </div>
        </>
      ) : (
        <form className="loginForm" onSubmit={handleSubmit}>
          <label htmlFor="username">
            <span>Username:</span>
            <input
              type="text"
              id="username"
              name="username"
              defaultValue="eve.holt@reqres.in"
            />
          </label>
          <br />
          <label htmlFor="password">
            <span>Password:</span>
            <input
              type="password"
              id="password"
              name="password"
              defaultValue="cityslicka"
            />
          </label>
          <br />
          <button type="submit">login</button>
          <div className="error">{error}</div>
        </form>
      )}
    </div>
  );
};

export default Login;
