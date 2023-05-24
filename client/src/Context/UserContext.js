import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const { data } = await axios.post(
      `${process.env.REACT_APP_API}/auth/me`,
      {},
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      }
    );
    setUserData(data.data.user);
  };
console.log("userContex",userData);
  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};
