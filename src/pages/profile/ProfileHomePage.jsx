import React from "react";
import { useAuth } from "../../AuthProvider";
import { useUser } from "../../UserProvider";

function ProfileHomePage() {
  const {userInfo} = useUser()

  const {house, username} = JSON.parse(localStorage.getItem('userInfo'))

  return <div>Welcome, {username}! Your house is: {house} </div>;
}

export default ProfileHomePage;