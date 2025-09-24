import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        service: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Create FormData object for Web3Forms
        const formDataToSend = new FormData();
        formDataToSend.append("access_key", "8ba8e947-e485-4bd1-a0e3-dfd07d5ebcb5");
        formDataToSend.append("name", formData.name);
        formDataToSend.append("email", formData.email);
        formDataToSend.append("company", formData.company);
        formDataToSend.append("service", formData.service);
        formDataToSend.append("message", formData.message);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formDataToSend
            });

            const data = await response.json();

            if (data.success) {
                setIsSubmitting(false);
                setSubmitStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    company: '',
                    service: '',
                    message: '',
                    access_key: '8ba8e947-e485-4bd1-a0e3-dfd07d5ebcb5'
                });
            } else {
                console.log("Error", data);
                setIsSubmitting(false);
            }
        } catch (error) {
            console.log("Error", error);
            setIsSubmitting(false);
        }
    };

    const contactMethods = [
        {
            title: 'Email Us',
            description: 'Get in touch via email for detailed inquiries',
            contact: 'info@revennt.com',
            action: 'mailto:info@revennt.com'
        }
    ];

    return (
        <section id="contact" className="contact section">
            <div className="container">
                <div className="contact-header">
                    <h2 className="section-title">Ready to Get Started?</h2>
                    <p className="section-subtitle">
                        Let's discuss how our AI agents can transform your business.
                        Get a free consultation and custom quote today.
                    </p>
                </div>

                <div className="contact-content">
                    <div className="contact-form-container">
                        <div className="contact-form-header">
                            <h3>Request a Consultation</h3>
                            <p>Tell us about your needs and we'll get back to you within 24 hours.</p>
                        </div>

                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">Full Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Your full name"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="company">Company</label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        placeholder="Your company name"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="service">Service Interest</label>
                                    <select
                                        id="service"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select a service</option>
                                        <option value="enterprise">Enterprise AI Agents</option>
                                        <option value="team">Team AI Agents</option>
                                        <option value="individual">Individual AI Agents</option>
                                        <option value="custom">Custom Solution</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Tell us about your needs *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    placeholder="Describe your requirements, current challenges, and how AI agents could help..."
                                />
                            </div>

                            <button
                                type="submit"
                                className={`btn btn-primary form-submit ${isSubmitting ? 'submitting' : ''}`}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>

                            {submitStatus === 'success' && (
                                <div className="form-success">
                                    <span className="success-icon">✓</span>
                                    <p>Thank you! We'll get back to you within 24 hours.</p>
                                </div>
                            )}
                        </form>
                    </div>

                    <div className="contact-info">
                        <div className="contact-methods">
                            <h3>Other Ways to Reach Us</h3>
                            <div className="contact-methods-grid">
                                {contactMethods.map((method, index) => (
                                    <a key={index} href={method.action} className="contact-method">
                                        <h4>{method.title}</h4>
                                        <p>{method.description}</p>
                                        <span className="method-contact">{method.contact}</span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="contact-details">
                            <h3>Why Choose Revennt AI?</h3>
                            <ul className="contact-benefits">
                                <li>
                                    <div>
                                        <strong>Free Consultation</strong>
                                        <p>No-obligation assessment of your AI needs</p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <strong>Quick Implementation</strong>
                                        <p>Deploy AI agents in weeks, not months</p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <strong>Secure</strong>
                                        <p>Can be run locally or on cloud for maximum control and security</p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <strong>Customizable Solutions</strong>
                                        <p>Transform existing workflows by addressing business or personal needs through customization</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
