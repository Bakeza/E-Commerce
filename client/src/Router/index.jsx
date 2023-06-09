import { lazy, useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuthContext } from "../Context/authContext";
import Footer from "../Sections/Footer";
import Header from "../Sections/Header";
import Subscribe from "../Sections/Subscribe";
import axios from "axios";

// pages
const Home = lazy(() => import("../Pages/Home"));
const SelectedItems = lazy(() => import("../Pages/SelectedItems"));
const Electronics = lazy(() => import("../Pages/Electronics"));
const Item = lazy(() => import("../Pages/Item"));
const Cart = lazy(() => import("../Pages/Cart"));
const WishList = lazy(() => import("../Pages/WishList"));
const Profile = lazy(() => import("../Pages/Profile"));
const ControllPanel = lazy(() => import("../Pages/ControllPanel"));
const Signup = lazy(() => import("../Pages/Register"));
const Login = lazy(() => import("../Pages/SignIn"));

export const PATHS = {
  HOME: "/",
  SELECTEDITEMS: "/selectedItems",
  ELECTRONICS: "/electronics",
  ITEM: "/electronics/:id",
  CART: "/cart",
  SIGNUP: "/signup",
  LOGIN: "/login",
  WISHLIST: "/wishList",
  PROFILE: "/profile",
  CONTROlPANEl: "/controlPanel",
};

export function Router() {
  const { isAuthorized, setIsAuthorized } = useAuthContext();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthorized(true);
    }
  }, [setIsAuthorized]);

  return <>{isAuthorized ? <Auth /> : <NotAuth />}</>;
}

export function NotAuth() {
  return (
    <>
      <Routes>
        <Route index element={<Login />} />
        <Route path={PATHS.SIGNUP} element={<Signup />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export function Auth() {
  const [searchValue, setSearchValue] = useState([]);
  const getProductByName = async (value) => {
    const {data} = await axios.get(
      `${process.env.REACT_APP_API}/product/search?name=${value}`
    );
    setSearchValue(data.data.product);
  };
  return (
    <>
      <Header getProductByName={getProductByName} />
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path={PATHS.SELECTEDITEMS} element={<SelectedItems />} />
        <Route
          path={PATHS.ELECTRONICS}
          element={<Electronics searchValue={searchValue} />}
        />
        <Route path={PATHS.ITEM} element={<Item />} />
        <Route path={PATHS.WISHLIST} element={<WishList />} />
        <Route path={PATHS.CART} element={<Cart />} />
        <Route path={PATHS.PROFILE} element={<Profile />} />
        <Route path={PATHS.CONTROlPANEl} element={<ControllPanel />} />
      </Routes>
      <Subscribe />
      <Footer />
    </>
  );
}
