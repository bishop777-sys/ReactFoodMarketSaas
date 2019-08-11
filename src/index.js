import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Header from "./components/Header";
import Products from "./components/Products";
import Footer from "./components/Footer";
import QuickView from "./components/QuickView";
import "./scss/style.scss";


class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          "id": 1,
          "name": "Brocolli - 1 Kg",
          "price": 120,
          "image": require('./resources/broccoli.jpg'),
          "category": "vegetables"
        },
        {
          "id": 2,
          "name": "Cauliflower - 1 Kg",
          "price": 60,
          "image":  require("./resources/cauliflower.jpg"),
          "category": "vegetables"
        },
        {
          "id": 3,
          "name": "Cucumber - 1 Kg",
          "price": 48,
          "image":  require("./resources/cucumber.jpg"),
          "category": "vegetables"
        },
        {
          "id": 4,
          "name": "Beetroot - 1 Kg",
          "price": 32,
          "image": require("./resources/beetroot.jpg"),
          "category": "vegetables"
        },
        {
          "id": 5,
          "name": "Carrot - 1 Kg",
          "price": 56,
          "image": require("./resources/carrots.jpg"),
          "category": "vegetables"
        },
        {
          "id": 6,
          "name": "Tomato - 1 Kg",
          "price": 16,
          "image": require("./resources/tomato.jpg"),
          "category": "vegetables"
        },
        {
          "id": 7,
          "name": "Beans - 1 Kg",
          "price": 82,
          "image": require("./resources/beans.jpg"),
          "category": "vegetables"
        },
        {
          "id": 8,
          "name": "Brinjal - 1 Kg",
          "price": 35,
          "image": require("./resources/brinjal.jpg"),
          "category": "vegetables"
        },
        {
          "id": 9,
          "name": "Capsicum",
          "price": 60,
          "image": require("./resources/capsicum.jpg"),
          "category": "vegetables"
        },
        {
          "id": 10,
          "name": "Mushroom - 1 Kg",
          "price": 75,
          "image": require("./resources/button-mushroom.jpg"),
          "category": "vegetables"
        },
        {
          "id": 11,
          "name": "Potato - 1 Kg",
          "price": 22,
          "image": require("./resources/potato.jpg"),
          "category": "vegetables"
        },
        {
          "id": 12,
          "name": "Pumpkin - 1 Kg",
          "price": 48,
          "image": require("./resources/pumpkin.jpg"),
          "category": "vegetables"
        },
        {
          "id": 13,
          "name": "Corn - 1 Kg",
          "price": 75,
          "image": require("./resources/corn.jpg"),
          "category": "vegetables"
        },
        {
          "id": 14,
          "name": "Onion - 1 Kg",
          "price": 16,
          "image": require("./resources/onion.jpg"),
          "category": "vegetables"
        },
        {
          "id": 15,
          "name": "Apple - 1 Kg",
          "price": 72,
          "image": require("./resources/apple.jpg"),
          "category": "fruits"
        },
        {
          "id": 16,
          "name": "Banana - 1 Kg",
          "price": 45,
          "image": require("./resources/banana.jpg"),
          "category": "fruits"
        },
        {
          "id": 17,
          "name": "Grapes - 1 Kg",
          "price": 60,
          "image": require("./resources/grapes.jpg"),
          "category": "fruits"
        },
        {
          "id": 18,
          "name": "Mango - 1 Kg",
          "price": 75,
          "image": require("./resources/mango.jpg"),
          "category": "fruits"
        },
        {
          "id": 19,
          "name": "Musk Melon - 1 Kg",
          "price": 36,
          "image": require("./resources/musk-melon.jpg"),
          "category": "fruits"
        },
        {
          "id": 20,
          "name": "Orange - 1 Kg",
          "price": 75,
          "image": require("./resources/orange.jpg"),
          "category": "fruits"
        },
        {
          "id": 21,
          "name": "Pears - 1 Kg",
          "price": 69,
          "image": require("./resources/pears.jpg"),
          "category": "fruits"
        },
        {
          "id": 22,
          "name": "Pomegranate - 1 Kg",
          "price": 95,
          "image": require("./resources/pomegranate.jpg"),
          "category": "fruits"
        },
        {
          "id": 23,
          "name": "Raspberry - 1 Kg",
          "price": 160,
          "image": require("./resources/raspberry.jpg"),
          "category": "fruits"
        },
        {
          "id": 24,
          "name": "Strawberry - 1 Kg",
          "price": 180,
          "image": require("./resources/strawberry.jpg"),
          "category": "fruits"
        },
        {
          "id": 25,
          "name": "Water Melon - 1 Kg",
          "price": 28,
          "image": require("./resources/water-melon.jpg"),
          "category": "fruits"
        },
        {
          "id": 26,
          "name": "Almonds - 1 Kg",
          "price": 200,
          "image": require("./resources/almonds.jpg"),
          "category": "nuts"
        },
        {
          "id": 27,
          "name": "Pista - 1 Kg",
          "price": 190,
          "image": require("./resources/pista.jpg"),
          "category": "nuts"
        },
        {
          "id": 28,
          "name": "Nuts Mixture - 1 Kg",
          "price": 950,
          "image": require("./resources/nuts-mixture.jpg"),
          "category": "nuts"
        },
        {
          "id": 29,
          "name": "Cashews - 1 Kg",
          "price": 650,
          "image": require("./resources/cashews.jpg"),
          "category": "nuts"
        },
        {
          "id": 30,
          "name": "Walnuts - 1 Kg",
          "price": 170,
          "image": require("./resources/walnuts.jpg"),
          "category": "nuts"
        }
      ],
      cart: [],
      totalItems: 0,
      totalAmount: 0,
      term: "",
      category: "",
      cartBounce: false,
      quantity: 1,
      quickViewProduct: {},
      modalActive: false
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleMobileSearch = this.handleMobileSearch.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.sumTotalItems = this.sumTotalItems.bind(this);
    this.sumTotalAmount = this.sumTotalAmount.bind(this);
    this.checkProduct = this.checkProduct.bind(this);
    this.updateQuantity = this.updateQuantity.bind(this);
    this.handleRemoveProduct = this.handleRemoveProduct.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  // Search by Keyword
  handleSearch(event) {
    this.setState({ term: event.target.value });
  }
  // Mobile Search Reset
  handleMobileSearch() {
    this.setState({ term: "" });
  }
  // Filter by Category
  handleCategory(event) {
    this.setState({ category: event.target.value });
  }
  // Add to Cart
  handleAddToCart(selectedProducts) {
    let cartItem = this.state.cart;
    let productID = selectedProducts.id;
    let productQty = selectedProducts.quantity;
    if (this.checkProduct(productID)) {
      let index = cartItem.findIndex(x => x.id == productID);
      cartItem[index].quantity =
        Number(cartItem[index].quantity) + Number(productQty);
      this.setState({
        cart: cartItem
      });
    } else {
      cartItem.push(selectedProducts);
    }
    this.setState({
      cart: cartItem,
      cartBounce: true
    });
    setTimeout(
      function() {
        this.setState({
          cartBounce: false,
          quantity: 1
        });
      }.bind(this),
      1000
    );
    this.sumTotalItems(this.state.cart);
    this.sumTotalAmount(this.state.cart);
  }
  handleRemoveProduct(id, e) {
    let cart = this.state.cart;
    let index = cart.findIndex(x => x.id == id);
    cart.splice(index, 1);
    this.setState({
      cart: cart
    });
    this.sumTotalItems(this.state.cart);
    this.sumTotalAmount(this.state.cart);
    e.preventDefault();
  }
  checkProduct(productID) {
    let cart = this.state.cart;
    return cart.some(function(item) {
      return item.id === productID;
    });
  }
  sumTotalItems() {
    let total = 0;
    let cart = this.state.cart;
    total = cart.length;
    this.setState({
      totalItems: total
    });
  }
  sumTotalAmount() {
    let total = 0;
    let cart = this.state.cart;
    for (var i = 0; i < cart.length; i++) {
      total += cart[i].price * parseInt(cart[i].quantity);
    }
    this.setState({
      totalAmount: total
    });
  }

  //Reset Quantity
  updateQuantity(qty) {
    this.setState({
      quantity: qty
    });
  }
  // Open Modal
  openModal(product) {
    this.setState({
      quickViewProduct: product,
      modalActive: true
    });
  }
  // Close Modal
  closeModal() {
    this.setState({
      modalActive: false
    });
  }

  render() {
    return (
      <div className="container">

        <Header
          cartBounce={this.state.cartBounce}
          total={this.state.totalAmount}
          totalItems={this.state.totalItems}
          cartItems={this.state.cart}
          removeProduct={this.handleRemoveProduct}
          handleSearch={this.handleSearch}
          handleMobileSearch={this.handleMobileSearch}
          handleCategory={this.handleCategory}
          categoryTerm={this.state.category}
          updateQuantity={this.updateQuantity}
          productQuantity={this.state.moq}
        />

        <Products
          productsList={this.state.products}
          searchTerm={this.state.term}
          addToCart={this.handleAddToCart}
          productQuantity={this.state.quantity}
          updateQuantity={this.updateQuantity}
          openModal={this.openModal}
        />
        <Footer />
        <QuickView
          product={this.state.quickViewProduct}
          openModal={this.state.modalActive}
          closeModal={this.closeModal}
        />

      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
