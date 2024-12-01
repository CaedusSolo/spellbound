import React, { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [authState, setAuthState] = useState({
    username: null,
    token: null,
    isAuthenticated: false,
  });
  const [isVerifying, setIsVerifying] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  async function verifyToken(token) {
    const response = await fetch("http://localhost:5000/auth/verify_token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${token}`,
      },
    });
    console.log(response.ok);
    return response.ok;
  }

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token && !isVerifying) {
      // Mark the process as started
      setIsVerifying(true);
  
      (async () => {
        try {
          const tokenIsValid = await verifyToken(token);
          if (tokenIsValid) {
            setAuthState({
              ...authState,
              token: token,
              isAuthenticated: true,
            });
          } else {
            localStorage.removeItem("token");
          }
        } catch (err) {
          console.error("Failed to authenticate token.", err);
        } finally {
          setIsVerifying(false);
          setIsLoading(false);
        }
      })();
    }
    else {
      setIsLoading(false)
    }
    // Only run this effect on initial mount and when `token` is found
  }, []); 
  
  function login(token, username) {
    localStorage.setItem("token", JSON.stringify(token))
    setAuthState({
      token: token,
      isAuthenticated: true,
      username: username
    });
    console.log(`${username} is logged in!`)
  }

  function logout() {
    localStorage.clear()
    setAuthState({
      token: null,
      isAuthenticated: false,
      username: null
    })
  }

  return (
    <AuthContext.Provider value={{ authState, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext)
}

export { AuthContext, AuthProvider };
