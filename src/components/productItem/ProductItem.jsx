import React from "react";

const  ProductItem =(props)=> {
  
//console.log(props);
  
    const { id, productName, icon, price, inventory } = props.info;

  
     
    return (
      <React.Fragment>
        <li key={id}>
          <p>{productName} <i>{icon}</i></p>
          <h5>{price}<span> $</span></h5>
          <button onClick={e=> props.cartItem( props.info)} disabled={inventory === 0}>
            {inventory > 0 ? "Add to cart" : "Sold out"}
          </button>
        </li>
      </React.Fragment>
    );
  }

export default ProductItem