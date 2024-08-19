import React from "react";

import { ListGroup } from "reactstrap";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { cartUiActions } from "../../../store/shopping-cart/cartUiSlice";

import "../../../styles/shopping-cart.css";

const Carts = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (totalAmount === "") {
      alert("please enter amount");
    } else {
      var options = {
        key: "rzp_test_0YI6y1BKg3OqGN",
        key_secret: "vpFaaS1e27tYekNst9dLIe63",
        amount: totalAmount * 100,
        currency: "INR",
        name: "D-06 Appliance",
        description: "for testing purpose",
        handler: function (response) {
          alert(response.razorpay_payment_id);
        },
        prefill: {
          name: "Dinesh",
          email: "dineshpandy793@gmail.com",
          contact: "9025317201"
        },
        notes: {
          address: "Sri krishna college of Enginnering and Technology"
        },
        theme: {
          color: "#3399cc"
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  }

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };
  return (
    <div className="cart__container" onClick={toggleCart}>
      <ListGroup onClick={(event) => event.stopPropagation()} className="cart">
        <div className="cart__closeButton">
          <span onClick={toggleCart}>
            <i className="ri-close-fill"></i>
          </span>
        </div>

        <div className="cart__item-list">
          {cartProducts.length === 0 ? (
            <h6 className="text-center">No item added to the cart</h6>
          ) : (
            cartProducts.map((item, index) => (
              <CartItem item={item} key={index} onClose={toggleCart} />
            ))
          )}
        </div>

        <div className="cart__bottom d-flex align-items-center justify-content-between">
          <h6>
            Subtotal : <span>₹{totalAmount}</span>
          </h6>
          <button>
            <Link to="/checkout">
              Checkout
            </Link>
          </button>
        </div>
      </ListGroup>
    </div>
  );
};

export default Carts;
