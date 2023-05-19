import { createContext, useContext } from "react";
import useCart from "../hooks/useCartReducer";

const productContext = createContext(null);

export const useCartContext = () => {
  return useContext(productContext);
};

const CartProvider = ({ children }) => {
  const cart = useCart();
  return (
    <productContext.Provider value={cart}>{children}</productContext.Provider>
  );
};

export default CartProvider;
