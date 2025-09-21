import React from 'react';
import './Footer.css';

const Footer = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <img src="/logo.png" alt="Revennt AI" className="logo" />
                            <span className="brand-text">Revennt AI</span>
                        </div>
                        <p className="footer-description">
                            Transforming businesses with intelligent AI agents.
                            Fully trained, seamlessly integrated, and enterprise secure.
                        </p>
                    </div>

                    <div className="footer-links">
                        <div className="footer-column">
                            <h4>Services</h4>
                            <ul>
                                <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Enterprise AI</a></li>
                                <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Team AI</a></li>
                                <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Individual AI</a></li>
                                <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Custom Solutions</a></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4>Legal</h4>
                            <ul>
                                <li><a href="/legal">Privacy Policy</a></li>
                                <li><a href="/legal">Terms of Service</a></li>
                                <li><a href="/legal">Security</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-copyright">
                        <p>&copy; 2025 Revennt AI. All rights reserved.</p>
                    </div>
                    <div className="footer-bottom-links">
                        <a href="/legal">Privacy</a>
                        <a href="/legal">Terms</a>
                        <a href="/legal">Security</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;