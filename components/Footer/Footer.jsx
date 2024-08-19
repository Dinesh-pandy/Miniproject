import React from "react";

import "../../styles/footer.css";

const Footer = () => {
  return (
    <div className="bottom">
      <footer className="footer">
        <div className="footer-row">
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="/about">ABOUT US</a></li>
              <li><a href="/contact">CONTACT US</a></li>
              <li><a href="/privacy">PRIVACY POLICY</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Get help</h4>
            <ul>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/payOptions">PAYMENT OPTIONS</a></li>
              <li><a href="/shipdelivery">SHIPPING AND DELIVERY</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Useful Links</h4>
            <ul>
              <li><a href="/home">HOME</a></li>
              <li><a href="/appliance">SHOPPING</a></li>
              <li><a href="/cart">CART</a></li>
              <li><a href="/">LOGIN</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Follow us</h4>
            <div className="social-links">
              <a href="https://www.facebook.com/profile.php?id=100088095992292"><i className="fab fa-facebook-f" /><img src='https://res.cloudinary.com/dggrpzdnl/image/upload/v1669136043/1_xriwsb.jpg' width={40} height={40} style={{ borderRadius: 50 }}></img></a>
              <a href="https://twitter.com/OMG__burgers"><i className="fab fa-twitter" /><img src='https://res.cloudinary.com/dggrpzdnl/image/upload/v1669136581/7_m5zlyz.jpg' width={40} height={40} style={{ borderRadius: 50 }}></img></a>
              <a href="https://www.linkedin.com/in/omg-burgers-939437257/"><i className="fab fa-linkedin-in" /><img src='https://res.cloudinary.com/dggrpzdnl/image/upload/v1669136599/5_tf2hye.png' width={40} height={40} style={{ borderRadius: 50 }}></img></a>
            </div>
          </div>
        </div>
        {/* <div className="footer-row1">
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="/about">ABOUT US</a></li>
              <li><a href="/privacy">PRIVACY POLICY</a></li>
            </ul>
          </div>
        </div> */}
        <p className='reserve'>Copyright © 2023 D-06 APPLIANCES AND CO. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;
