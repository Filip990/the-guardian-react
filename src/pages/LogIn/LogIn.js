import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import UserForm from "../../components/UserForm/UserForm";

import { useAuth } from "../../hooks/useAuth";
import { logInSuccess, logInStart } from "./store/Actions";

const LogIn = ({ history }) => {
  const auth = useAuth();
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.user);

  const handleLogIn = useCallback(
    async (event) => {
      event.preventDefault();
      dispatch(logInStart());
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
      <UserForm onSubmit={handleLogIn} isLoading={isLoading} />
      <p>
        Don't have an account? <Link to={"/signup"}>Create one</Link>
      </p>
    </>
  );
};

export default LogIn;
