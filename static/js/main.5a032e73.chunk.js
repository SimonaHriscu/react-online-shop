(this["webpackJsonponline-shop"]=this["webpackJsonponline-shop"]||[]).push([[0],{10:function(e){e.exports=JSON.parse('[{"id":0,"productName":"apple","icon":"\ud83c\udf4f","price":3,"inventory":10},{"id":1,"productName":"watermelon","icon":"\ud83c\udf49","price":0,"inventory":3},{"id":2,"productName":"pizza","icon":"\ud83c\udf55","price":10,"inventory":100},{"id":3,"productName":"salad","icon":"\ud83e\udd57","price":40,"inventory":0},{"id":4,"productName":"ice cream","icon":"\ud83c\udf66","price":7,"inventory":66},{"id":5,"productName":"soup","icon":"\ud83c\udf72","price":25,"inventory":5},{"id":6,"productName":"hot-dog","icon":"\ud83c\udf2d","price":15,"inventory":3},{"id":7,"productName":"burrito","icon":"\ud83c\udf2f","price":12,"inventory":7},{"id":8,"productName":"taco","icon":"\ud83c\udf2e","price":16,"inventory":3},{"id":9,"productName":"water","icon":"\ud83c\udf76","price":4,"inventory":40},{"id":10,"productName":"wine","icon":"\ud83c\udf77","price":8,"inventory":2},{"id":11,"productName":"sushi","icon":"\ud83c\udf63","price":32,"inventory":6}]')},13:function(e,t,a){e.exports=a(22)},18:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(4),i=a.n(c),l=(a(18),a(5)),s=a(6),o=a(7);l.a.add(s.a,o.a);var u=a(1),m=a(8),d=a(9),p=a(12),h=a(11),f=a(10),v=function(e){return console.log(e.showCart),n.a.createElement("nav",null,n.a.createElement("div",{className:"logo"},n.a.createElement("p",null,"Swish")),n.a.createElement("div",{className:"filters-box"},n.a.createElement("div",{className:"title"},"Filters"),n.a.createElement("div",{className:"filters"},n.a.createElement("div",{className:"filter1",onClick:e.filterUnderTen},"#0-10 $"),n.a.createElement("div",{className:"filter2",onClick:e.filterOverTen},"#over 10 $"),n.a.createElement("div",{className:"filter3",onClick:e.showAll},"ALL"))),n.a.createElement("div",{className:"cart",onClick:e.showCart},n.a.createElement("i",{className:"fas fa-concierge-bell"}),n.a.createElement("div",{className:"order-status"},"ORDER STATUS"),n.a.createElement("div",{className:"items-no"},e.cartItem)))},E=function(e){var t=e.info,a=t.id,r=t.productName,c=t.icon,i=t.price,l=t.inventory;return n.a.createElement(n.a.Fragment,null,n.a.createElement("li",{key:a},n.a.createElement("p",null,r," ",n.a.createElement("i",null,c)),n.a.createElement("h5",null,i,n.a.createElement("span",null," $")),n.a.createElement("button",{onClick:function(t){return e.cartItem({id:a,productName:r,icon:c,price:i,inventory:l})},disabled:0===l},l>0?"Add to cart":"Sold out")))},N=function(e){var t=e.data.map((function(t,a){return n.a.createElement(E,{key:a,info:t,cartItem:e.cartItem})})),a=e.filteredData.map((function(t,a){return n.a.createElement(E,{key:a,info:t,cartItem:e.cartItem})}));return n.a.createElement(n.a.Fragment,null,e.showProducts?n.a.createElement("ul",{className:"product-gallery"},t):n.a.createElement("ul",{className:"product-gallery"},a))},w=function(e){if(e.showCart){var t=e.products.map((function(e,t){return n.a.createElement("li",{key:e.id},n.a.createElement("span",null," ",e.icon),n.a.createElement("span",null," ",e.productName),n.a.createElement("span",null," ",e.price,"$"))}));return console.log(t),n.a.createElement("div",{className:"total"},n.a.createElement("h3",null,"Total number of items: ",e.cartPriceHandle),n.a.createElement("ul",{className:"cart-products"},n.a.createElement("p",null,"Your items:"),n.a.createElement("li",null,n.a.createElement("span",null," ","No"," :","")," ",n.a.createElement("span",null," ","product")," ",n.a.createElement("span",null,"price")),t),n.a.createElement("h3",null,"Total:  ",e.price," $"))}return e.showCart},y=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var r;return Object(m.a)(this,a),(r=t.call(this,e)).filterUnderTenHandle=function(e){e.preventDefault();var t=r.state.data.filter((function(e){if(e.price<=10)return e}));r.setState({searchData:t,showProducts:!1})},r.filterOverTenHandle=function(e){e.preventDefault();var t=r.state.data.filter((function(e){if(e.price>10)return e}));r.setState({searchData:t,showProducts:!1})},r.showAllHandle=function(e){e.preventDefault(),r.setState({showProducts:!0})},r.cartNumHandle=function(e,t){var a=e.price;[].push(a),r.setState((function(t){return{cartItems:t.cartItems+1,price:t.price+a,productList:t.productList.concat(e)}}))},r.showCartHandle=function(e){e.preventDefault(),r.setState({showCart:!r.state.showCart})},r.changeHandle=function(e){r.setState({userInput:e.target.value.trim()})},r.submitHandle=function(e){e.preventDefault();var t=r.state.userInput.toLocaleLowerCase(),a=r.state.data.filter((function(e){if(e.productName.toLocaleLowerCase().includes(t))return e}));r.setState({searchData:a})},r.state={userInput:"",data:f,searchData:[],cartItems:0,showProducts:!0,price:0,productList:[],showCart:!1},r}return Object(d.a)(a,[{key:"render",value:function(){var e;return n.a.createElement(n.a.Fragment,null,n.a.createElement(v,{filterUnderTen:this.filterUnderTenHandle,filterOverTen:this.filterOverTenHandle,showAll:this.showAllHandle,cartItem:this.state.cartItems,showCart:this.showCartHandle}),n.a.createElement("div",{className:"container"},n.a.createElement("h1",null,"Welcome to our online store"),n.a.createElement("form",{onKeyUp:this.submitHandle},n.a.createElement("input",{type:"text",onChange:this.changeHandle,value:this.state.userInput}),n.a.createElement("input",{type:"submit",value:"Search"})),n.a.createElement(N,(e={data:this.state.data},Object(u.a)(e,"data",this.state.userInput?this.state.searchData:this.state.data),Object(u.a)(e,"filteredData",this.state.searchData?this.state.searchData:this.state.data),Object(u.a)(e,"cartItem",this.cartNumHandle),Object(u.a)(e,"showProducts",this.state.showProducts),Object(u.a)(e,"itemInfo",this.itemInfoHandle),Object(u.a)(e,"cartPriceHandle",this.cartPriceHandle),e)),n.a.createElement(w,{cartPriceHandle:this.state.cartItems,price:this.state.price,products:this.state.productList,showCart:this.state.showCart})))}}]),a}(r.Component);i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(y,null)),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.5a032e73.chunk.js.map