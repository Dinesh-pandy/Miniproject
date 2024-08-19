import React from "react";
import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col } from "reactstrap";
import Pow from "./pow.png";
import { Link } from "react-router-dom";
import "./Home.css";
import guyImg from "../assets/images/Front-page.jpg";
import "../styles/hero-section.css";
import Slider1 from "./Slider.jsx";

const Home = () => {
  return (
    <Helmet title="Home">
      <section className="top-home">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h5 className="mb-3">D-06 Online Appliance Store</h5>
                <h1 className="mb-4 hero__title">
                  <span>Buy</span> your favorite Appliance
                </h1>

                <button className="order__btn d-flex align-items-center justify-content-between ">
                  <Link to="/appliance">
                    Appliances <i className="ri-arrow-right-s-line"></i>
                  </Link>
                </button>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={guyImg} alt="delivery-guy" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <>
        <center> <section className='home'>
          <div className='container d_flex'>
            <Slider1 />
          </div>
        </section></center>
      </>

      <div className="pro-week">
        <h3 className="pow-title">PRODUCT OF THE WEEK</h3>
        <div>
          <p className="pow"> SONY BRAVIA</p>
          <center><img src={Pow} alt="img" className="pow-img"></img></center>
          <center><p className="pow-des">Introducing our cutting-edge TV, the ultimate centerpiece for your entertainment space. With its sleek design and advanced features, this TV is a game-changer in home entertainment.Get ready to be blown away by the stunning picture quality, rich colors, and incredible clarity. Every scene comes to life, immersing you in a visual experience like no other.</p></center>
        </div>
      </div>
    </Helmet>
  );
};

export default Home;
