import React, { createContext, useContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [userInfo, setUserInfo] = useState({
    username: null,
    house: null,
  });

  const updateUserInfo = (info) => {
    setUserInfo((prevInfo) => ({ ...prevInfo, ...info }));
  };

  return (
    <UserContext.Provider value={{ userInfo, updateUserInfo }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
