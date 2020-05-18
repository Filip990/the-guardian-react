import React, { useCallback } from "react";
import { useAuth } from "../../hooks/useAuth";
import UserForm from "../../components/Form/UserForm";

const LogIn = ({ history }) => {
  const auth = useAuth();

  const handleLogIn = useCallback(
    async (event) => {
      event.preventDefault();
      let form = event.target;
      const email = form.elements.email.value;
      const password = form.elements.password.value;
      try {
        await auth.signin(email, password);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [auth, history]
  );

  return <UserForm onSubmit={handleLogIn} />;
};

export default LogIn;
