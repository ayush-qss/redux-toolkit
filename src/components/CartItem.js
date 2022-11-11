import React, { useEffect } from "react";
import { ChevronDown, ChevronUp } from "../icons";
import { removeItem, increase, decrease } from "../features/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();

  return (
    <article className="cart-item">
      <img src={img} alt="" />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button onClick={() => dispatch(removeItem(id))} className="remove-btn">
          Remove
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(increase(id))} className="amount-btn">
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id));
            } else dispatch(decrease(id));
          }}
          className="amount-btn"
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
