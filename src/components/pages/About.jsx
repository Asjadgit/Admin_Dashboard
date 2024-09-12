import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-container">
            <header className="about-header">
                <h1>About Us</h1>
                <p>Welcome to our company! We are dedicated to providing top-notch services and products to our valued customers.</p>
            </header>
            <section className="about-section">
                <div className="section-content">
                    <h2>Our Mission</h2>
                    <p>
                        Our mission is to deliver exceptional quality and value to our clients through innovation, 
                        dedication, and excellence. We strive to exceed expectations and be a leader in our industry.
                    </p>
                </div>
            </section>
            <section className="about-section">
                <div className="section-content">
                    <h2>Our Team</h2>
                    <div className="team-members">
                        <div className="team-member">
                            <img src="https://via.placeholder.com/150" alt="Team Member" />
                            <h3>Jane Doe</h3>
                            <p>CEO & Founder</p>
                        </div>
                        <div className="team-member">
                            <img src="https://via.placeholder.com/150" alt="Team Member" />
                            <h3>John Smith</h3>
                            <p>CTO</p>
                        </div>
                        <div className="team-member">
                            <img src="https://via.placeholder.com/150" alt="Team Member" />
                            <h3>Emily Johnson</h3>
                            <p>Marketing Director</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about-section">
                <div className="section-content">
                    <h2>Contact Us</h2>
                    <p>
                        If you have any questions or need further information, feel free to reach out to us through the following channels:
                    </p>
                    <ul>
                        <li>Email: contact@ourcompany.com</li>
                        <li>Phone: +1 (123) 456-7890</li>
                        <li>Address: 123 Business Ave, Suite 100, City, Country</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default About;
