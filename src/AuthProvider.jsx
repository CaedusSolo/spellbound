import React, { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [authState, setAuthState] = useState({
    username: null,
    token: null,
    isAuthenticated: false,
  });

  async function verifyToken(token) {
    const response = await fetch("http://localhost:5000/auth/verify_token", {
      method: "POST",
      body: {
        token: token,
      },
    });
    if (response.ok) return true;
    return false;
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const tokenIsValid = verifyToken(token);
        if (tokenIsValid)
          setAuthState({ ...authState, token: token, isAuthenticated: true });
        else return "Something went wrong.";
      } catch (err) {
        return "Failed to authenticate token.";
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ authState }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };