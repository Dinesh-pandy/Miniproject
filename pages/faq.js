import React, { useState } from 'react';
import './faq.css';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: 'How can I order?',
            answer:
                'You can order easily using our online platform. When you find a product you need, you can add it to cart, login and go through the ordering process. After the order is ready, you will receive order summary to your email. Order summary will also be stored to your account.You can also easily make reorders afterwards by clicking the “reorder” button on any of your previously made orders. After clicking the “reorder” button the cart will open and you can change quantities or products.'
        },
        {
            question: 'Do you have the product in stock?',
            answer:
                'All the products which are shown on our site are available. Order lead time depends on the products and quantities.'
        },
        {
            question: 'Can I return a product?',
            answer:
                'If you want to return a product, please contact through ContactUs page'
        },
        {
            question: 'Do you offer warranties on your appliances?',
            answer:
                'Yes, we provide warranties on our appliances. The duration and coverage of the warranty may vary depending on the manufacturer and the specific appliance. Please inquire about the warranty details for the appliance you are interested in.'
        },
        {
            question: 'Are your appliances brand new?',
            answer:
                'Yes, all our appliances are brand new, unless otherwise specified. We also sell used or refurbished appliances for rent.'
        },
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className="faq-page">
            <br></br><br></br><br></br><br></br>
            <div className='container'>
                <center><h1 className='title'>Frequently Asked Questions</h1></center>
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                    >
                        <div
                            className="faq-question"
                            onClick={() => toggleAccordion(index)}
                        >
                            {faq.question}
                            <span className="arrow">{activeIndex === index ? '-' : '+'}</span>
                        </div>
                        {activeIndex === index && (
                            <div className="faq-answer">{faq.answer}</div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;