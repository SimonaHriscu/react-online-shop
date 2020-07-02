import React from "react";
import ProductItem from "./ProductItem";

const ProductList = (props) => {
  console.log(props)
  const items = props.data.map((item, i) => {
    return <ProductItem key = {i} info={item} cartItem={props.cartItem} />;
  });
  
  return (
    <React.Fragment>
      <ul>{items}</ul>
     
    </React.Fragment>
  );
};

export default ProductList;

// if (props.filteredData) {
//   const items = props.filteredData.map((item, i) => {
//     return <ProductItem key={i} info={item} />
//   });
// } else if (props.searchedData) {
//   const items = props.searchedData.map((item, i) => {
//     return <ProductItem key={i} info={item} />
//   })
// }else {
//   const items = props.data.map((item, i) => {
//   return <ProductItem key = {i} info={item} />
// })
// return items;
// }
