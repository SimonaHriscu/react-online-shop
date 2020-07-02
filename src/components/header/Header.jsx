import React from "react";

const Header = (props) => {
  return (
    <nav>
      <div className="logo">
        <p>Swish</p>
      </div>

      <div className="filters-box">
        <div className="title">Filters</div>
        <div className="filters">
          <div className="filter1" onClick={props.filterUnderTen}>#0-10 $</div>
          <div className="filter2" onClick={props.filterOverTen}>#over 10 $</div>
          <div className="filter3" onClick={props.showAll}>ALL</div>
        </div>
      </div>

      <div className="cart">
        <i className="fas fa-concierge-bell"></i>
        <div className="order-status">ORDER STATUS</div>
        <div className="items-no">{props.cartItem}</div>
      </div>
    </nav>
  );
};

export default Header