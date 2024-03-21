import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../auth/redux/authActions";
import LoginForm from "../components/form/LoginForm";
import { AuthContext } from "../context/authContext";
import LogingHeading from "../components/LoginHeading";

function Login() {
  const { userInfo } = useSelector((state) => state.auth);
  const { getUserRoles } = useContext(AuthContext);
  const userRoles = getUserRoles();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo) {
      // Check if "User" role is included in the roles array
      if (userInfo.roles.includes("User")) {
        navigate("/");
        window.location.reload();
      } else if (userInfo.roles.includes("Superadmin")) {
        navigate("/sellerDashboard");
        window.location.reload();
      }
    }
  }, [navigate, userInfo]);

  const { email, password } = formData;

  const onChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    dispatch(userLogin(formData));
  };

  return (
    <>
      <LogingHeading />
      <LoginForm
        email={email}
        password={password}
        onChange={onChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
}

export default Login;
