import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            // Add a small delay to ensure the element is rendered
            setTimeout(() => {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    inline: 'nearest'
                });
            }, 100);
        }
    };

    const navigateToSection = (sectionId) => {
        // If we're on the home page, scroll to section
        if (location.pathname === '/') {
            scrollToSection(sectionId);
        } else {
            // If we're on another page, navigate to home page with hash
            navigate(`/#${sectionId}`);
        }
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <img src="/logo.png" alt="Revennt" className="logo" />
                            <span className="brand-text">Revennt</span>
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
                                <li><a href="#services" onClick={(e) => { e.preventDefault(); navigateToSection('services'); }}>Enterprise AI</a></li>
                                <li><a href="#services" onClick={(e) => { e.preventDefault(); navigateToSection('services'); }}>Team AI</a></li>
                                <li><a href="#services" onClick={(e) => { e.preventDefault(); navigateToSection('services'); }}>Individual AI</a></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4>Why Revennt?</h4>
                            <ul>
                                <li><a href="#features" onClick={(e) => { e.preventDefault(); navigateToSection('features'); }}>AI Agents</a></li>
                                <li><a href="#contact" onClick={(e) => { e.preventDefault(); navigateToSection('contact'); }}>Get Started</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-copyright">
                        <p>&copy; 2025 Revennt. All rights reserved.</p>
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