import { lazy, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuthContext } from "../Context/authContext";
import Footer from "../Sections/Footer";
import Header from "../Sections/Header";
import Subscribe from "../Sections/Subscribe";

// pages
const Home = lazy(() => import("../Pages/Home"));
const SelectedItems = lazy(() => import("../Pages/SelectedItems"));
const Electronics = lazy(() => import("../Pages/Electronics"));
const Item = lazy(() => import("../Pages/Item"));
const Cart = lazy(() => import("../Pages/Cart"));
const Signup = lazy(() => import("../Pages/Register"));
const Login = lazy(() => import("../Pages/SignIn"));

export const PATHS = {
  HOME: "/",
  SELECTEDITEMS: "/selectedItems",
  ELECTRONICS: "/electronics",
  ITEM: "/item",
  CART: "/cart",
  SIGNUP: "/signup",
  LOGIN: "/login",
};

export function Router() {
  const { isAuthorized, setIsAuthorized } = useAuthContext();
  console.log("isAuthorizeddd", isAuthorized);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthorized(true);
    }
  },[setIsAuthorized])

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
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path={PATHS.SELECTEDITEMS} element={<SelectedItems />} />
        <Route path={PATHS.ELECTRONICS} element={<Electronics />} />
        <Route path={PATHS.ITEM} element={<Item />} />
        <Route path={PATHS.CART} element={<Cart />} />
      </Routes>
      <Subscribe />
      <Footer />
    </>
  );
}
