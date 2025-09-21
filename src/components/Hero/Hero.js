import React from 'react';
import './Hero.css';

const Hero = () => {

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="hero">
            <div className="hero-background">
                <div className="hero-gradient"></div>
                <div className="hero-pattern"></div>
            </div>

            <div className="container">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1 className="hero-title">
                            AI Agents That Transform
                            <span className="gradient-text"> Your Business</span>
                        </h1>
                        <p className="hero-description">
                            We create fully trained, integrated, and secure AI agents tailored for enterprise,
                            team, or individual needs. Transform your operations with intelligent automation
                            that adapts to your unique requirements.
                        </p>
                        <div className="hero-buttons">
                            <button
                                className="btn btn-primary hero-cta"
                                onClick={() => scrollToSection('services')}
                            >
                                Explore Services
                            </button>
                            <button
                                className="btn btn-secondary hero-secondary"
                                onClick={() => scrollToSection('contact')}
                            >
                                Get Custom Quote
                            </button>
                        </div>
                    </div>

                    <div className="hero-visual">
                        <div className="floating-bubbles">
                            <div className="bubble bubble-1"></div>
                            <div className="bubble bubble-2"></div>
                            <div className="bubble bubble-3"></div>
                            <div className="bubble bubble-4"></div>
                            <div className="bubble bubble-5"></div>
                            <div className="bubble bubble-6"></div>
                            <div className="bubble bubble-7"></div>
                            <div className="bubble bubble-8"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
