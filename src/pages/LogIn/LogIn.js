import React, { useCallback } from "react";
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "react-bootstrap";

import UserForm from "../../components/UserForm/UserForm";

import { useAuth } from "../../utils/hooks/useAuth";
import { logInSuccess, logInStart, logInFailure } from "./store/actions";

import { HOME } from "../../routes/constants";

const LogIn = ({ history }) => {
  const auth = useAuth();
  const dispatch = useDispatch();
  const { isLoading, logInError } = useSelector((state) => state.user);

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
        dispatch(logInFailure(error.message));
      }
    },
    [auth, history, dispatch]
  );

  if (auth.user) {
    return <Redirect to={HOME} />;
  }

  return (
    <>
      <h2>Log In</h2>
      <UserForm onSubmit={handleLogIn} isLoading={isLoading} />
      <p>
        Don't have an account? <Link to={"/signup"}>Create one</Link>
      </p>
      {logInError && <Alert variant="danger">{logInError}</Alert>}
    </>
  );
};

export default LogIn;
