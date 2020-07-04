import React from "react";
import ProductItem from "./ProductItem";

const ProductList = (props) => {
  const items = props.data.map((item, i) => {
    return <ProductItem key={i} info={item} cartItem={props.cartItem} itemInfo={props.itemInfo}/>;
  });
  const filteredData = props.filteredData.map((item, i) => {
    return <ProductItem key={i} info={item} cartItem={props.cartItem} />;
  });

  return (
    <React.Fragment>
      {props.showProducts ? <ul>{items}</ul> : <ul>{filteredData}</ul> }
    </React.Fragment>
  );
};

export default ProductList;
