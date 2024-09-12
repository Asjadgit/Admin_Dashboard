import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-us-container">
            <h1>Contact Us</h1>
            <form className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="subject">Subject:</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="Enter the subject"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="5"
                        placeholder="Enter your message"
                    ></textarea>
                </div>
                <button type="submit">
                    Send Message
                </button>
            </form>
        </div>
    );
}

export default Contact