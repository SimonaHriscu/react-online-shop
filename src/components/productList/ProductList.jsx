import React from "react";
import ProductItem from "../productItem/ProductItem";

const ProductList = (props) => {
 // console.log(props)
  const items = props.data.map((item, i) => {
    return <ProductItem key={i} info={item} cartItem={props.cartItem} />;
  });
  const filteredData = props.filteredData.map((item, i) => {
    return <ProductItem key={i} info={item} cartItem={props.cartItem}  />;
  });

  return (
    <React.Fragment>
      {props.showProducts ? <ul className="product-gallery">{items}</ul> : <ul className="product-gallery">{filteredData}</ul> }
    </React.Fragment>
  );
};

export default ProductList;
