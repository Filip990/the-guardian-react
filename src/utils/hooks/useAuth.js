import React, { useState, useEffect, useContext, createContext } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";

// Firebase credentials
firebase.initializeApp({
  apiKey: "AIzaSyBXemQVg9KLfbhUrLuwc3NRFFT4-Vwtglo",
  authDomain: "the-guardian-react.firebaseapp.com",
  databaseURL: "https://the-guardian-react.firebaseio.com",
  projectId: "the-guardian-react",
  storageBucket: "the-guardian-react.appspot.com",
  messagingSenderId: "782602247996",
  appId: "1:782602247996:web:551f87c7eba0b6e0424839",
});

const authContext = createContext();

// Provider component that wraps our app and makes auth object ...
// ... available to any child component that calls useAuth().
export const ProvideAuth = ({ children }) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => useContext(authContext);

// Provider hook that creates auth object and handles state
const useProvideAuth = () => {
  const [user, setUser] = useState(null);

  // Wrap any Firebase methods we want to use making sure ...
  // ... to save the user to state.
  const signin = async (email, password) => {
    const response = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    setUser(response.user);
    localStorage.setItem(
      "currentUser",
      JSON.stringify(response.user.refreshToken)
    );
    return response.user;
  };

  const signup = async (email, password) => {
    const response = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    setUser(response.user);
    localStorage.setItem(
      "currentUser",
      JSON.stringify(response.user.refreshToken)
    );
    return response.user;
  };

  const signout = async () => {
    await firebase
      .auth()
      .signOut()
      .then(() => {
        localStorage.removeItem("currentUser");
        setUser(false);
      });
  };

  // password reset logic is not currently used in UI
  const sendPasswordResetEmail = (email) => {
    return firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        return true;
      });
  };

  const confirmPasswordReset = (code, password) => {
    return firebase
      .auth()
      .confirmPasswordReset(code, password)
      .then(() => {
        return true;
      });
  };

  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.
  useEffect(() => {
    const unsubscribe = firebase
      .auth()
      .onAuthStateChanged((user) => (user ? setUser(user) : setUser(false)));

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  // Return the user object and auth methods
  return {
    user,
    signin,
    signup,
    signout,
    sendPasswordResetEmail,
    confirmPasswordReset,
  };
};
