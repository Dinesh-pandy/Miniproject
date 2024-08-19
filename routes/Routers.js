import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
// import Pizzas from "../pages/Appliance";
// import PizzaDetails from "../pages/PizzaDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Checkouts from "../pages/checkouts";
import { Login } from "../pages/Login";
import { Register } from "../pages/Signup";
import Contact from "../pages/contact";
import Appliance from "../pages/Appliance";
import About from "../pages/about";
import FAQ from "../pages/faq";
import { Privacy } from "../pages/privacy";
import { Poptions } from "../pages/payoptions";
import { Sdelivery } from "../pages/sd";
import Review from "../pages/reviewrate";
import FeedForm from "../pages/feedback";

const Routers = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/appliance" element={<Appliance />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/checkouts" element={<Checkouts />} />
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/payOptions" element={<Poptions />} />
      <Route path="/shipdelivery" element={<Sdelivery />} />
      <Route path="/rating" element={<Review />} />
      <Route path="/feedback" element={<FeedForm />} />
      
      {/* <Route path="/pizzas/:id" element={<PizzaDetails />} /> */}
    </Routes>
  );
};

export default Routers;
