import React, { useCallback } from "react";

import { useAuth } from "../../hooks/useAuth";
import UserForm from "../../components/UserForm/UserForm";

const SignUp = ({ history }) => {
  const auth = useAuth();

  const handleSignup = useCallback(
    async (event) => {
      event.preventDefault();
      const form = event.target;
      const email = form.elements.email.value;
      const password = form.elements.password.value;
      try {
        await auth.signup(email, password);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [auth, history]
  );

  return (
    <>
      <h2>Sign Up</h2>
      <UserForm onSubmit={handleSignup} />
    </>
  );
};

export default SignUp;
