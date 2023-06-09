import { useEffect, useReducer } from "react";
import axios from "axios";

const initialState = {
  count: parseInt(localStorage.getItem("count")) || 0,
  cardItems: JSON.parse(localStorage.getItem("cardItems")) || [],
};

const ACTIONS = {
  ADD_TO_CART: "addToCart",
  REMOVE_FROM_CART: "removeFromCart",
  REMOVE_ALL_ITEMS: "removeAllItems",
  GET_ALL_ITEMS: "getItems",
};

const Reduce = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TO_CART:
      return {
        ...state,
        cardItems: [...state.cardItems, action.payload],
        count: state.count + 1,
      };
    case ACTIONS.REMOVE_FROM_CART:
      return {
        ...state,
        cardItems: state.cardItems.filter(
          (product) => product.id !== action.payload
        ),
        count: state.count - 1,
      };

    case ACTIONS.REMOVE_ALL_ITEMS:
      return {
        count: 0,
        cardItems: [],
      };
    case ACTIONS.GET_ALL_ITEMS:
      return {
        count: 0,
        cardItems: [],
      };

    default:
      return state;
  }
};

const useCart = () => {
  const [state, dispatch] = useReducer(Reduce, initialState);

  useEffect(() => {
    const cardItems = JSON.parse(localStorage.getItem("cardItems")) || [];
    const count = parseInt(localStorage.getItem("count")) || 0;
    dispatch({
      type: "INITIAL_CART",
      payload: { cardItems, count },
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("cardItems", JSON.stringify(state.cardItems));
    localStorage.setItem("count", state.count);
  }, [state]);

  const addToCart = (product) => {
    axios
      .post(
        `${process.env.REACT_APP_API}/cart/add-items`,
        {
          cartItem: {
            productId: product._id,
            price: parseInt(product.price),
            quantity: 1,
          },
        },
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((data) => console.log(data))
      .catch((err) => console.log(err));

    return (dispatch) => {
      dispatch({ type: ACTIONS.ADD_TO_CART, payload: product });
      console.log("kkkkkkkkkkkkkkk", product);
    };
  };
  const removeFromCart = (productId) =>
    dispatch({ type: ACTIONS.REMOVE_FROM_CART, payload: productId });

  const removeAllItems = () => {
    dispatch({ type: ACTIONS.REMOVE_ALL_ITEMS });
  };
  const getItems = () => {
    dispatch({ type: ACTIONS.GET_ALL_ITEMS });
  };
  return {
    state,
    addToCart,
    removeFromCart,
    removeAllItems,
    getItems,
  };
};

export default useCart;
