import React from 'react';
import './Features.css';

const Features = () => {
    const features = [
        {
            icon: '🎯',
            title: 'Fully Trained',
            description: 'Our AI agents are pre-trained on industry-specific data and continuously learn from your interactions to provide increasingly accurate results.',
            details: [
                'Industry-specific training datasets',
                'Continuous learning algorithms',
                'Performance optimization',
                'Custom model fine-tuning'
            ]
        },
        {
            icon: '🔗',
            title: 'Seamlessly Integrated',
            description: 'Easy integration with your existing tools and workflows. No disruption to your current processes.',
            details: [
                'API-first architecture',
                'Pre-built connectors',
                'Custom integration support',
                'Real-time synchronization'
            ]
        },
        {
            icon: '🔒',
            title: 'Enterprise Secure',
            description: 'Bank-level security with end-to-end encryption, compliance certifications, and dedicated security monitoring.',
            details: [
                'SOC 2 Type II certified',
                'End-to-end encryption',
                'Role-based access control',
                'Audit trails & monitoring'
            ]
        },
        {
            icon: '⚡',
            title: 'Lightning Fast',
            description: 'Optimized for speed with sub-second response times and 99.9% uptime guarantee.',
            details: [
                'Sub-second response times',
                'Global CDN distribution',
                'Auto-scaling infrastructure',
                '99.9% uptime SLA'
            ]
        },
        {
            icon: '📊',
            title: 'Analytics & Insights',
            description: 'Comprehensive analytics dashboard to track performance, usage patterns, and ROI.',
            details: [
                'Real-time performance metrics',
                'Usage analytics',
                'ROI tracking',
                'Custom reporting'
            ]
        },
        {
            icon: '🛠️',
            title: 'Custom Development',
            description: 'Bespoke AI solutions tailored to your specific business requirements and use cases.',
            details: [
                'Custom model development',
                'Specialized training',
                'Unique feature development',
                'Ongoing optimization'
            ]
        }
    ];

    return (
        <section id="features" className="features section">
            <div className="container">
                <div className="features-header">
                    <h2 className="section-title">Why Choose Our AI Agents?</h2>
                    <p className="section-subtitle">
                        Built with enterprise-grade technology and designed for real-world applications.
                        Our AI agents deliver results that matter.
                    </p>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className="feature-icon">{feature.icon}</div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>
                            <div className="feature-details">
                                <h4>Key Benefits:</h4>
                                <ul>
                                    {feature.details.map((detail, detailIndex) => (
                                        <li key={detailIndex}>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="features-showcase">
                    <div className="showcase-content">
                        <div className="showcase-text">
                            <h3>Ready to Transform Your Business?</h3>
                            <p>
                                Join hundreds of companies already using our AI agents to automate processes,
                                enhance productivity, and drive innovation. Get started with a free consultation
                                and see how AI can transform your operations.
                            </p>
                            <div className="showcase-stats">
                                <div className="showcase-stat">
                                    <span className="stat-number">500+</span>
                                    <span className="stat-label">Active Deployments</span>
                                </div>
                                <div className="showcase-stat">
                                    <span className="stat-number">40%</span>
                                    <span className="stat-label">Average Efficiency Gain</span>
                                </div>
                                <div className="showcase-stat">
                                    <span className="stat-number">$2M+</span>
                                    <span className="stat-label">Cost Savings Generated</span>
                                </div>
                            </div>
                        </div>
                        <div className="showcase-visual">
                            <div className="dashboard-mockup">
                                <div className="dashboard-header">
                                    <div className="dashboard-dots">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <span className="dashboard-title">AI Agent Dashboard</span>
                                </div>
                                <div className="dashboard-content">
                                    <div className="dashboard-metric">
                                        <span className="metric-label">Response Time</span>
                                        <span className="metric-value">0.3s</span>
                                    </div>
                                    <div className="dashboard-metric">
                                        <span className="metric-label">Accuracy</span>
                                        <span className="metric-value">99.2%</span>
                                    </div>
                                    <div className="dashboard-metric">
                                        <span className="metric-label">Uptime</span>
                                        <span className="metric-value">99.9%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
