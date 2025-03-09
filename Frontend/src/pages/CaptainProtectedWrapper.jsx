import React, { useEffect, useState } from "react";
import { CaptainDataContext } from "../context/CaptainContext";
import { replace, useNavigate } from "react-router-dom";
import { useContext } from "react";
import axios from "axios";

const CaptainProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { captain, setCaptain } = useContext(CaptainDataContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // console.log("Checking token:", token); // Debugging
    if (!token) {
      console.warn("No token found, redirecting...");
      navigate("/captain-login", { replace: true });
      return;
    }
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        // console.log("API Response:", response.data); // Debugging
        if (response.status === 200 && response.data) {
          setCaptain(response.data);
        } else {
          throw new Error("Invalid captain data");
        }
      })
      .catch((err) => {
        console.log(err);
        localStorage.removeItem("token");
        navigate("/captain-login", { replace: true });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [token, navigate, setCaptain]);

  if (isLoading) return <div>Loading...</div>;

  return token ? <>{children}</> : null;
};

export default CaptainProtectedWrapper;
