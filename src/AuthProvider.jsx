import React, { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [authState, setAuthState] = useState({
    username: null,
    token: null,
    isAuthenticated: false,
  });
  const [isVerifying, setIsVerifying] = useState(false)

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
            localStorage.removeItem("token"); // Optionally handle invalid token
          }
        } catch (err) {
          console.error("Failed to authenticate token.", err);
        } finally {
          // Reset the flag once verification is done
          setIsVerifying(false);
        }
      })();
    }
    // Only run this effect on initial mount and when `token` is found
  }, []); 
  

  return (
    <AuthContext.Provider value={{ authState }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
