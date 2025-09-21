import React from 'react';
import './Legal.css';

const Legal = () => {
    return (
        <div className="legal-page">
            <div className="container">
                <div className="legal-header">
                    <h1>Legal Information</h1>
                    <p>Important legal documents and policies for Revennt AI</p>
                </div>

                <div className="legal-content">
                    <section id="privacy-policy" className="legal-section">
                        <h2>Privacy Policy</h2>
                        <p><strong>Last Updated:</strong> January 2025</p>

                        <h3>Information We Collect</h3>
                        <p>We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support. This may include:</p>
                        <ul>
                            <li>Name and contact information</li>
                            <li>Company information</li>
                            <li>Usage data and analytics</li>
                            <li>Communication preferences</li>
                        </ul>

                        <h3>How We Use Your Information</h3>
                        <p>We use the information we collect to:</p>
                        <ul>
                            <li>Provide, maintain, and improve our AI agent services</li>
                            <li>Process transactions and send related information</li>
                            <li>Send technical notices and support messages</li>
                            <li>Respond to your comments and questions</li>
                            <li>Comply with legal obligations</li>
                        </ul>

                        <h3>Data Security</h3>
                        <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. All data is encrypted in transit and at rest.</p>

                        <h3>Your Rights</h3>
                        <p>You have the right to access, update, or delete your personal information. You may also opt out of certain communications from us. To exercise these rights, please contact us at info@revennt.com.</p>
                    </section>

                    <section id="terms-of-service" className="legal-section">
                        <h2>Terms of Service</h2>
                        <p><strong>Last Updated:</strong> January 2025</p>

                        <h3>Acceptance of Terms</h3>
                        <p>By accessing and using Revennt AI services, you accept and agree to be bound by the terms and provision of this agreement.</p>

                        <h3>Service Description</h3>
                        <p>Revennt AI provides intelligent AI agent services for enterprise, team, and individual use. Our services include:</p>
                        <ul>
                            <li>Custom AI agent development and training</li>
                            <li>RAG-powered learning capabilities</li>
                            <li>Real-time database integration</li>
                            <li>Multi-modal processing</li>
                            <li>Enterprise security and compliance</li>
                        </ul>

                        <h3>User Responsibilities</h3>
                        <p>Users are responsible for:</p>
                        <ul>
                            <li>Providing accurate information during registration</li>
                            <li>Maintaining the security of their account credentials</li>
                            <li>Using our services in compliance with applicable laws</li>
                            <li>Not attempting to reverse engineer or compromise our systems</li>
                        </ul>

                        <h3>Service Availability</h3>
                        <p>We strive to maintain high service availability but do not guarantee uninterrupted access. We reserve the right to modify or discontinue services with reasonable notice.</p>

                        <h3>Limitation of Liability</h3>
                        <p>To the maximum extent permitted by law, Revennt AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.</p>
                    </section>

                    <section id="security" className="legal-section">
                        <h2>Security</h2>
                        <p><strong>Last Updated:</strong> January 2025</p>

                        <h3>Security Measures</h3>
                        <p>We implement comprehensive security measures to protect your data and our systems:</p>
                        <ul>
                            <li><strong>Encryption:</strong> All data is encrypted in transit using TLS 1.3 and at rest using AES-256</li>
                            <li><strong>Access Controls:</strong> Role-based access control with multi-factor authentication</li>
                            <li><strong>Network Security:</strong> Firewalls, intrusion detection, and regular security audits</li>
                            <li><strong>Data Isolation:</strong> Customer data is logically separated and isolated</li>
                            <li><strong>Monitoring:</strong> 24/7 security monitoring and incident response</li>
                        </ul>

                        <h3>Compliance</h3>
                        <p>We maintain compliance with industry standards and regulations:</p>
                        <ul>
                            <li>SOC 2 Type II certification</li>
                            <li>GDPR compliance for EU data protection</li>
                            <li>HIPAA compliance for healthcare data</li>
                            <li>Regular third-party security assessments</li>
                        </ul>

                        <h3>Data Processing</h3>
                        <p>We process your data only for the purposes specified in our Privacy Policy and Terms of Service. We do not sell, rent, or share your personal information with third parties without your explicit consent.</p>

                        <h3>Incident Response</h3>
                        <p>In the event of a security incident, we will:</p>
                        <ul>
                            <li>Immediately investigate and contain the incident</li>
                            <li>Notify affected customers within 24 hours</li>
                            <li>Provide regular updates on remediation efforts</li>
                            <li>Conduct post-incident reviews to prevent future occurrences</li>
                        </ul>

                        <h3>Reporting Security Issues</h3>
                        <p>If you discover a security vulnerability, please report it to security@revennt.com. We appreciate responsible disclosure and will work with you to address any issues promptly.</p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Legal;
