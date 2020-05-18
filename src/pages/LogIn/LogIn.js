import React, { useCallback } from "react";
import { useAuth } from "../../hooks/useAuth";
import UserForm from "../../components/UserForm/UserForm";
import { Link } from "react-router-dom";
import { logInSuccess } from "./store/Actions";
import { useDispatch } from "react-redux";

const LogIn = ({ history }) => {
  const auth = useAuth();
  const dispatch = useDispatch();

  const handleLogIn = useCallback(
    async (event) => {
      event.preventDefault();
      const form = event.target;
      const email = form.elements.email.value;
      const password = form.elements.password.value;
      try {
        await auth.signin(email, password);
        dispatch(logInSuccess(auth.user));
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [auth, history, dispatch]
  );

  return (
    <>
      <h2>Log In</h2>
      <UserForm onSubmit={handleLogIn} />
      <p>
        Don't have an account? <Link to={"/signup"}>Create one</Link>
      </p>
    </>
  );
};

export default LogIn;
