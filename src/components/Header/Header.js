import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        if (location.pathname !== '/') {
            // If not on home page, navigate to home first
            window.location.href = `/#${sectionId}`;
            return;
        }
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <nav className="nav">
                    <div className="nav-brand">
                        <Link to="/">
                            <img src="/logo.png" alt="Revennt AI" className="logo" />
                        </Link>
                    </div>

                    <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                        <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className="nav-link">
                            Home
                        </a>
                        <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} className="nav-link">
                            Services
                        </a>
                        <a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }} className="nav-link">
                            Features
                        </a>
                        <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="nav-link">
                            Contact
                        </a>
                        <Link to="/legal" className="nav-link">
                            Legal
                        </Link>
                        <button className="btn btn-primary nav-cta" onClick={() => scrollToSection('contact')}>
                            Get Started
                        </button>
                    </div>

                    <button
                        className="nav-toggle"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;