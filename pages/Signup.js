import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Signup.css";
import { useNavigate } from "react-router-dom";

export const Register = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [number, setNumber] = useState('');

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:8181/api/v1/auth/register",
        {
          name: name,
          gmail: email,
          mobno: number,
          password: pass,
        }
      );

      if (response.status === 200) {
        navigate("/");
        setName("");
        setNumber("");
        setEmail("");
        setPass("");
      }
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  return (
    <div className="login">
      <center>
        <div className="h21">Register</div></center>
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="input-container1">
          <label className="lab" htmlFor="name">Username</label>
          <input type="text" className="lab1" required value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Enter Your Fullname" /></div>
        <div className="input-container1">
          <label className="lab" htmlFor="email">E-mail</label>
          <input className="lab1" required value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your Email" id="email" name="email" /></div>
        <div className="input-container1">
          <label className="lab" htmlFor="password">Password</label>
          <input className="lab1" required value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Enter your password" id="password" name="password" /></div>
        <div className="input-container1">
          <label className="lab" htmlFor="phonenumber">Mobile Number</label>
          <input className="lab1" required value={number} onChange={(e) => setNumber(e.target.value)} type="phonenumber" placeholder="Enter your Moblie Number" id="number" name="number" /></div>
        <div className='button-container'>
          <button className="button2" type="submit" >Proceed</button></div>
      </form>
      <div className="register">
        <Link to={"/"}><button className="link-btn1">Already have an account? Login here.</button></Link>
      </div>
    </div>
  )
}