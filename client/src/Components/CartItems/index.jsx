import React, { useEffect, useState } from "react";

import { ItemP } from "../ItemCard/style";
import { Information } from "../MayLike";
import { Div } from "../Region/style";
import { FlexDiv } from "../SignInForm/style";

import { MdKeyboardArrowDown } from "react-icons/md";
import { RxArrowLeft } from "react-icons/rx";

import { Cart, CartButton, Item } from "./style";
import { useCartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import { PATHS } from "../../Router";
import axios from "axios";

export default function CartItems() {
  const { state, removeFromCart, removeAllItems } = useCartContext();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const cart = async () => {
      const res= await axios.get(`${process.env.REACT_APP_API}/cart/`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });
      console.log(res);
      // setItems(data);
    };
    cart();
  }, []);

  return (
    <>
      <Cart>
        {!state.cardItems.length && <h3>Your shopping bag is empty</h3>}

        {items?.cardItems?.map((item) => (
          <Item key={item.id}>
            <FlexDiv>
              <img src={item.src} alt="item" />
              <Div className="cart">
                <h5>{item.name}</h5>
                <Information className="desc">{item.description}</Information>
                <FlexDiv>
                  <CartButton
                    remove
                    onClick={() => {
                      removeFromCart(item.id);
                    }}
                  >
                    Remove
                  </CartButton>
                  <CartButton>Save for later</CartButton>
                </FlexDiv>
              </Div>
            </FlexDiv>
            <div>
              <ItemP className="flex">{item.price}</ItemP>
              <Cart className="Qty">
                Qty: 3 <MdKeyboardArrowDown />
              </Cart>
            </div>
          </Item>
        ))}

        <FlexDiv className="justify">
          <CartButton className="back">
            <Link
              to={PATHS.SELECTEDITEMS}
              style={{ color: "white", cursor: "pointer" }}
            >
              {" "}
              <RxArrowLeft /> Back to shop
            </Link>
          </CartButton>
          <CartButton
            style={{ fontSize: "1rem", cursor: "pointer" }}
            onClick={removeAllItems}
          >
            Remove all
          </CartButton>
        </FlexDiv>
      </Cart>
    </>
  );
}
