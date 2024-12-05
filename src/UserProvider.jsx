import React, { createContext, useContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {

  const [userInfo, setUserInfo] = useState(() => {
    const savedUserInfo = localStorage.getItem('userInfo')
    return savedUserInfo ? JSON.parse(savedUserInfo) : {house: null}
  });

  const updateUserInfo = (info) => {
    const newUserInfo = {...userInfo, ...info}
    setUserInfo(newUserInfo)
    localStorage.setItem("userInfo", JSON.stringify(newUserInfo))
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
