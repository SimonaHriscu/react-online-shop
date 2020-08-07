import React from "react";

const Total = (props) => {
  if (props.showCart) {
    const items = props.products.map((item, i) => (
      <li key={i}>
        <span> {item.icon}</span>
        <span className="product-name"> {item.productName}</span>
        <span> {item.price}$</span>
        <span>
          {" "}
          <button className="delete-btn" onClick={() => props.del(item)}>
            ✗
          </button>
        </span>
      </li>
    ));
    return (
      <div className="total">
        <h3>Total number of items: {props.cartPriceHandle}</h3>
        <ul className="cart-products">
          <p>Your items:</p>
          <li>
            <span>
              {" "}
              {"No"} :{""}
            </span>{" "}
            <span> {"product"}</span> <span>{"price"}</span>
            <span>{"   "}</span>
          </li>
          {items}
        </ul>
        <h3>Total: {props.price} $</h3>
        <button
          className="reset-button"
          onClick={() => props.reset(items)}
          disabled={props.cartPriceHandle === 0}
        >
          {props.cartPriceHandle > 0 ? "Reset Cart" : "Empty"}
        </button>
      </div>
    );
  }
  return props.showCart;
};

export default Total;
