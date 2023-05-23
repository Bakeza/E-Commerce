import { createContext, useContext, useEffect } from "react";
import axios from "axios";

const UserContext = createContext(null);

export const useUserContext = () => {
  return useContext(UserContext);
};

const UserProvider = ({ children }) => {
  const { userData, setUserData } = useContext(UserContext);

  // useEffect(() => {
  //   axios
  //     .get(`${process.env.REACR_APP_API}/`) 
  //     .then((response) => {
  //       const { name, email, cart, favorite } = response.data;
  //       setUserData({ name, email, cart, favorite });
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  return (
    <UserContext.Provider value={userData}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
