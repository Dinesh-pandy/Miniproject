import "../styles/checkout.css";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { useNavigate } from "react-router-dom";
import { addShipping } from './shipapi';

const Checkout = () => {

  const [formdatas, setFormdatas] = useState({
    email: '',
    name: '',
    number: '',
    country: '',
    city: '',
    pincode: '',
  })
  const handleChange = (e) => {
    e.preventDefault();
    setFormdatas({ ...formdatas, [e.target.id]: e.target.value })
    console.log(formdatas);
  }
  const handleSubmits = async (e) => {
    e.preventDefault();
    try {
      await addShipping(formdatas);
      navigate('/')
    }
    catch (error) {
      console.log(error);
    }

    console.log(formdatas);
  }


  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const shippingCost = 30;
  const totalAmount = cartTotalAmount + Number(shippingCost);
  const navigate = useNavigate();
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
          email: "dinesh1234@gmail.com",
          contact: "9025317201"
        },
        notes: {
          address: "Sri krishna college of Enginnering and Technology"
        },
        theme: {
          color: "black"
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
    navigate('/checkouts');
  }

  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="8" md="6">
              <h6 className="mb-4">Shipping Address</h6>
              <form className="checkout__form" onSubmit={handleSubmit}>
                <div className="form__group">
                  <input id='name' type="text" placeholder="Enter your name" required onChange={handleChange} />
                </div>
                <div className="form__group">
                  <input id='email' type="email" placeholder="Enter your email" required onChange={handleChange} />
                </div>
                <div className="form__group">
                  <input
                    type="number" id='number'
                    placeholder="Phone number"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="text" id='country'
                    placeholder="Country"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="text" id='city'
                    placeholder="City"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="number" id='postcode'
                    placeholder="Postal code"
                    required
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" onChange={handleSubmit} className="addTOCart__btn">Payment</button>
              </form>
            </Col>

            <Col lg="4" md="6">
              <div className="bc">
                <div className="checkout__bill">
                  <h6 className="d-flex align-items-center justify-content-between mb-3">
                    Subtotal: <span>Rs:{cartTotalAmount}</span>
                  </h6>
                  <h6 className="d-flex align-items-center justify-content-between mb-3">
                    Shipping: <span>Rs:{shippingCost}</span>
                  </h6>
                  <div className="checkout__total">
                    <h5 className="d-flex align-items-center justify-content-between">
                      Total: <span>Rs:{totalAmount}</span>
                    </h5>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;