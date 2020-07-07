import React from "react";

const Total = (props) => {
  if (props.showCart) {
    const items = props.products.map((item, i) => (
      <li key={item.id}>
        <span> {item.icon}</span>
        <span> {item.productName}</span> 
        <span> {item.price}$</span>
      </li>
    ));
    console.log(items);
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
          </li>
          {items}
        </ul>
        <h3>Total:  {props.price} $</h3>
      </div>
    );
  }
  return props.showCart;
};

export default Total;
