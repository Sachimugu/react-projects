import React from "react";
import { ChevronDown, ChevronUp } from "../icons";
import { useDispatch } from "react-redux";
import {
  increaseItem,
  removeItem,
  decreaseItem,
} from "../../features/cart/cartSlice";

const Cartitem = (props) => {
  const { id, img, title, price, amount } = props.item;

  const dispatch = useDispatch();
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button
          className=" remove-btn"
          onClick={() => dispatch(removeItem(id))}
        >
          remove
        </button>
      </div>
      <div>
        <button
          className="amount-btn"
          onClick={() => dispatch(increaseItem(id))}
        >
          <ChevronUp></ChevronUp>
        </button>
        <p className="amount">{amount}</p>
        <button
          className="amount-btn"
          onClick={() => dispatch(decreaseItem(id))}
        >
          <ChevronDown></ChevronDown>
        </button>
      </div>
    </article>
  );
};

export default Cartitem;
