import { useState } from "react";

const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [errors, setErrors] = useState([]);
  const [token, setToken] = useState("");

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setIsAuthorized(false);
  };

  return {
    isAuthorized,
    setIsAuthorized,
    loading,
    setLoading,
    errors,
    setErrors,
    token,
    setToken,
    logout,
  };
};

export default useAuth;
