import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Alert } from "react-bootstrap";

import { useAuth } from "../../utils/hooks/useAuth";
import UserForm from "../../components/UserForm/UserForm";

import { signUpStart, signUpFailure } from "./store/actions";

const SignUp = ({ history }) => {
  const auth = useAuth();
  const dispatch = useDispatch();
  const { signUpError, isLoading } = useSelector((state) => state.user);

  const handleSignup = useCallback(
    async (event) => {
      dispatch(signUpStart());
      event.preventDefault();
      const form = event.target;
      const email = form.elements.email.value;
      const password = form.elements.password.value;
      try {
        await auth.signup(email, password);
        history.push("/");
      } catch (error) {
        dispatch(signUpFailure(error.message));
      }
    },
    [dispatch, auth, history]
  );

  return (
    <>
      <h2>Sign Up</h2>
      <UserForm onSubmit={handleSignup} isLoading={isLoading} />
      <p>
        <Link to={"/login"}>Back to Log In</Link>
      </p>
      {signUpError && <Alert variant="danger">{signUpError}</Alert>}
    </>
  );
};

export default SignUp;
