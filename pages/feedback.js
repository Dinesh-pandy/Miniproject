import React, { useState } from 'react';
import './feedback.css';
import { useNavigate } from 'react-router-dom';
import { addFeedback } from './api';

const FeedForm = () => {
    const [formdata, setFormdata] = useState({
        email: '',
        name: '',
        subject: '',
        message: ''

    })
    const navigate = useNavigate();
    const handleChange = (e) => {
        e.preventDefault();
        setFormdata({ ...formdata, [e.target.id]: e.target.value })
        // console.log(formdata);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addFeedback(formdata);
            navigate('/')
        }
        catch (error) {
            console.log(error);
        }

        console.log(formdata);
    }


    return (
        <div className="down">
            <div className="feedy">
                <center><h2>FEEDBACK</h2></center>
                <form className='fd' onSubmit={handleSubmit} >
                    <label className="lab" htmlFor="name">Email</label>
                    <input type="email" placeholder="Enter your Email" id='email' onChange={handleChange} required />
                    <label className="lab" htmlFor="name">Username</label>
                    <input type="name" placeholder="Enter your Name" id='name' onChange={handleChange} required />
                    {/* <input type="name" placeholder="Enter your Subject" id='subject' onChange={handleChange} required /> */}
                    <label className="lab" htmlFor="name">Message</label>
                    <textarea type="name" placeholder="Enter Message" id='message' onChange={handleChange} required />
                    <center><button type='submit' onChange={handleSubmit} className="btg-fd">Submit</button></center>
                </form>
            </div>
        </div>

    );
};

export default FeedForm;