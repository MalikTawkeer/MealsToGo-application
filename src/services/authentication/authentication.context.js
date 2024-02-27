import React, { createContext, useRef, useState } from "react";
import { signOut, getAuth, onAuthStateChanged } from "firebase/auth";
// import { auth } from "../../config/firebase_config";

import { loginRequest, registerRequest } from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const auth = useRef(getAuth()).current;
  onAuthStateChanged(auth, (usr) => {
    if (usr) {
      setUser(usr);
      // setIsLoading(false);
    } else {
      // setIsLoading(false);
    }
  });

  const onLogin = (email, password) => {
    setIsLoading(true);
    setError("");
    loginRequest(auth, email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
        console.log("Login :: ERROR", e);
      });
  };

  const onRegister = (email, password, repeatedPassword) => {
    setIsLoading(true);
    setError("");
    if (password !== repeatedPassword) {
      setError("ERROR :: Passwords don't match!");
      return;
    }
    registerRequest(auth, email, password)
      .then((u) => {
        console.log("USER::", u);
        setUser(u);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };

  const onLogout = () => {
    signOut(auth).then(() => {
      setUser(null);
      setError(null);
    });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
