import React, { useCallback } from "react";
import { useAuth } from "../../hooks/useAuth";

const SignUp = ({ history }) => {
  const auth = useAuth();

  const handleSignup = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements; //email and password are just DOM nodes here
      try {
        await auth.signup(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [auth, history]
  );

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignup}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
