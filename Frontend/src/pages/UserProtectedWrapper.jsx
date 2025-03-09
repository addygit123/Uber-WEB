import React, { useEffect } from "react";
import { UserDataContext } from "../context/UserContext";
import { replace, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { useState } from "react";
import axios from "axios";

const UserProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [user, setUser] = useContext(UserDataContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // console.log("Checking token:", token); // Debugging
    if (!token) {
      navigate("/login", { replace: true });
      return;
    }
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        // console.log("API Response:", response.data); // Debugging
        if (response.status === 200 && response.data) {
          setUser(response.data);
        } else {
          throw new Error("Invalid user data");
        }
      })
      .catch((err) => {
        console.log(err);
        localStorage.removeItem("token");
        navigate("/login", { replace: true });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [token, navigate, setUser]);
  if (isLoading) return <div>Loading...</div>;

  return token ? <>{children}</> : null;
};

export default UserProtectedWrapper;
