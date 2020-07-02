import React from "react";

const  ProductItem =(props)=> {
  

  
    const { id, productName, icon, price, inventory } = props.info;

     
    return (
      <React.Fragment>
        <li key={id}>
          <p>{productName} <i>{icon}</i></p>
          <h5>{price}<span> $</span></h5>
          <button onClick={props.cartItem} disabled={inventory === 0}>
            {inventory > 0 ? "Add to cart" : "Sold out"}
          </button>
        </li>
      </React.Fragment>
    );
  }

export default ProductItem