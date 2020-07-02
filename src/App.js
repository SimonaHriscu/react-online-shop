import React, { Component } from "react";
import Data from "./data.json";
import Header from "./components/header/Header";
import ProductList from "./components/ProductList";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      data: Data,
      searchData: [],
      cartItems: 0,
    };
  }
  
// Filter button under 10$
  filterUnderTenHandle = (e) => {
    e.preventDefault();

    let newArr = this.state.data.filter((item) => {
      if (item.price <= 10) {
        return item;
      }
    });
    console.log(newArr);
    this.setState({
      searchData: newArr,
    });
  };

//Filter button over 10$
  filterOverTenHandle= (e) => {
    e.preventDefault();
    let newArr = this.state.data.filter((item) => {
      if (item.price > 10) {
        return item;
      }
    });
    this.setState({
      searchData: newArr,
    });
  };

//  filter button show ALL items
  showAllHandle = (e) => {
    e.preventDefault();
    let newArr = this.state.data.filter((item) => {
       return item;
    });
    this.setState({
      searchData: newArr,
    });
  };
  
  //no of items in the cart
  cartNumHandle = (prevState) => {

    this.setState(prevState => {
      return {cartItems: prevState.cartItems ++}
   })
    console.log(this.state.cartItems);
  };


  

  changeHandle = (e) => {
    // console.log(e.target.value.trim())
    this.setState({
      userInput: e.target.value.trim(),
    });
  };

  //Search filter
  submitHandle = (e) => {
    e.preventDefault();
    const userText = this.state.userInput.toLocaleLowerCase();
    let newArr = this.state.data.filter((item) => {
      if (item.productName.toLocaleLowerCase().includes(userText)) {
        return item;
      }
    });
    this.setState({
      searchData: newArr,
    });
  };

  
  render() {
    return (
      <React.Fragment>
        <Header filterUnderTen={this.filterUnderTenHandle }
        filterOverTen = {this.filterOverTenHandle}
        showAll = {this.showAllHandle}
        cartItem ={this.state.cartItems}
       />
        <div className="container">
          <h1>Welcome to our online store</h1>
          <form onKeyUp={this.submitHandle}>
            <input
              type="text"
              onChange={this.changeHandle}
              value={this.state.userInput}
            />
            <input type="submit" value="Search" />
          </form>
          <ProductList
            data={this.state.data}
            data={
              this.state.userInput ? this.state.searchData : this.state.data
            }
            data={this.state.searchData ? this.state.searchData: this.state.data}
            cartItem = {this.cartNumHandle}
          />
        </div>
      </React.Fragment>
    );
  }
}
