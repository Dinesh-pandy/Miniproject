import React from 'react';
import './ContactUsPage.css';
import emailjs from "emailjs-com";


const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mfafvoj",
        "template_p3tqdpj",
        e.target,
        "aDknS3dV6mrnkKv8_"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Error sending email.");
        }
      );

    e.target.reset();
  };

  return (
    <div className='hole'>
      <div className="contact-us-container">
        <h1 className='head'>Contact Us</h1>
        <form onSubmit={sendEmail}>
          <div className="form-group">
            <label className='cl1' htmlFor="name">Name:</label>
            <input className='ci1' required type="text1" placeholder='Enter your name' id="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input className='ci1' required type="email" placeholder='Enter your mail' id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" required placeholder='Enter your Message' name="message" />
          </div>
          <button className='b1' type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}


export default Contact;
