import React, { useState } from "react";

import { AiFillFacebook } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

import RegisterButton, { RegButton } from "../RegisterButton";
import { Link } from "react-router-dom";
import {
  FlexDiv,
  Forminput,
  FormLabel,
  FormTitle,
  Or,
  SignForm,
} from "./style";
import { SignIn } from "../../Validation/SignInValid";
import { Error } from "../RegisterForm";
import { PATHS } from "../../Router";
import { useAuthContext } from "../../Context/authContext";
import { API_URL } from "../../config/api";
import axios from "axios";

const style = { fontSize: "1rem", margin: "0 2rem 0 0" };

export default function SignInForm() {
  const [Data, setData] = useState({
    email: "",
    password: "",
    isLoading: false,
  });
  const { errors, setErrors, setToken, setIsAuthorized } = useAuthContext();

  const handleChange = (e) => {
    setData({
      ...Data,
      [e.target.name]: e.target.value,
    });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();

    try {
      setData({
        ...Data,
        isLoading: true,
      });
      await SignIn(Data);

      const res = await axios.post(`${API_URL}/users/login`, {
        email: Data.email,
        password: Data.password,
      });

      if (res) {
        setIsAuthorized(true);
        setToken(res.data.token);
        localStorage.setItem("token", res.data.token);
      }
    } catch (error) {
      console.log(error);
      setErrors(
        error.inner.reduce((errors, error) => {
          errors[error.path] = error.message;
          return errors;
        }, {})
      );
    } finally {
      setData({
        ...Data,
        isLoading: false,
      });
    }
  };
  return (
    <SignForm onSubmit={handelSubmit}>
      <FormTitle>Sign in</FormTitle>
      <FormLabel>Username</FormLabel>
      <Forminput
        type="text"
        name="email"
        value={Data.email}
        className={errors.email ? "error" : ""}
        onChange={handleChange}
        placeholder="Email or phone"
      />
      {errors.email && <Error>{errors.email}</Error>}

      <FlexDiv className="justify">
        <FormLabel>Password</FormLabel>{" "}
        <Link to={PATHS.SIGNUP}>Forgot Password</Link>
      </FlexDiv>
      <Forminput
        type="text"
        name="password"
        value={Data.password}
        className={errors.password ? "error" : ""}
        onChange={handleChange}
        placeholder="Type here"
      />
      {errors.password && <Error>{errors.password}</Error>}

      <FlexDiv>
        <input type="checkbox" />
        <FormLabel> Remember me </FormLabel>
      </FlexDiv>

      <RegisterButton title={Data.isLoading?"Loading...":"Log In" }/>

      <Or>
        <hr /> <p>OR</p> <hr />
      </Or>

      <RegButton className="google">
        <FcGoogle style={style} />
        Continue with Google
      </RegButton>
      <RegButton className="facebook">
        <AiFillFacebook style={style} /> Continue with Facebook
      </RegButton>
      <p>
        Don’t have an account? <Link to={PATHS.SIGNUP}>Register now</Link>
      </p>
    </SignForm>
  );
}
