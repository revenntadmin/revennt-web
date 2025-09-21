import React from 'react';
import './Services.css';

const Services = () => {
    const capabilities = [
        {
            title: 'RAG-Powered Learning',
            description: 'Agents can learn from your documents, PDFs, and knowledge bases using Retrieval-Augmented Generation.',
            features: [
                'Upload and process any document format',
                'Intelligent document parsing and indexing',
                'Context-aware responses from your data',
                'Continuous learning from new information',
                'Multi-language document support'
            ],
            demo: 'Upload a PDF manual and ask questions - the agent will answer based on your specific content.'
        },
        {
            title: 'Real-Time Database Integration',
            description: 'Connect directly to your databases for live data retrieval and analysis.',
            features: [
                'SQL and NoSQL database connections',
                'Real-time data synchronization',
                'Custom query generation',
                'Data visualization and insights',
                'Secure API integrations'
            ],
            demo: 'Ask "What were our sales last month?" - the agent queries your database and provides real-time results.'
        },
        {
            title: 'Custom Agent Training',
            description: 'Train agents on your specific workflows, processes, and business logic.',
            features: [
                'Industry-specific model fine-tuning',
                'Custom behavior programming',
                'Workflow automation training',
                'Domain expertise integration',
                'Performance optimization'
            ],
            demo: 'Train an agent on your customer service procedures - it will handle inquiries exactly as your team would.'
        },
        {
            title: 'Multi-Modal Processing',
            description: 'Process text, images, audio, and video for comprehensive understanding.',
            features: [
                'Image analysis and description',
                'Audio transcription and analysis',
                'Video content understanding',
                'Document OCR and extraction',
                'Cross-modal reasoning'
            ],
            demo: 'Upload a product image and ask for details - the agent analyzes the visual content and provides insights.'
        },
        {
            title: 'Enterprise Security',
            description: 'Bank-level security with end-to-end encryption and compliance.',
            features: [
                'SOC 2 Type II certified',
                'End-to-end encryption',
                'Role-based access control',
                'Audit trails and monitoring',
                'GDPR and HIPAA compliance'
            ],
            demo: 'All data is encrypted in transit and at rest, with full audit logs for compliance requirements.'
        },
        {
            title: 'Analytics & Insights',
            description: 'Comprehensive analytics dashboard with performance metrics and ROI tracking.',
            features: [
                'Real-time performance monitoring',
                'Usage analytics and patterns',
                'ROI calculation and reporting',
                'Custom metric tracking',
                'Predictive analytics'
            ],
            demo: 'View detailed analytics showing agent performance, user satisfaction, and business impact metrics.'
        }
    ];

    const useCases = [
        {
            title: 'Enterprise',
            description: 'Large organizations with complex workflows',
            examples: ['Customer service automation', 'Internal knowledge management', 'Process optimization', 'Compliance monitoring']
        },
        {
            title: 'Teams',
            description: 'Growing businesses and departments',
            examples: ['Project management', 'Sales support', 'Content creation', 'Data analysis']
        },
        {
            title: 'Individuals',
            description: 'Personal productivity and automation',
            examples: ['Email management', 'Research assistance', 'Task automation', 'Learning support']
        }
    ];

    return (
        <section id="services" className="services section">
            <div className="container">
                <div className="services-header">
                    <h2 className="section-title">AI Agent Capabilities</h2>
                    <p className="section-subtitle">
                        Our AI agents are equipped with cutting-edge capabilities that can be customized
                        for any use case. From document processing to real-time data analysis.
                    </p>
                </div>

                <div className="capabilities-grid">
                    {capabilities.map((capability, index) => (
                        <div key={index} className="capability-card">
                            <h3 className="capability-title">{capability.title}</h3>
                            <p className="capability-description">{capability.description}</p>

                            <div className="capability-features">
                                <h4>Key Features:</h4>
                                <ul>
                                    {capability.features.map((feature, featureIndex) => (
                                        <li key={featureIndex}>
                                            <span className="checkmark">✓</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="capability-demo">
                                <h4>Live Demo:</h4>
                                <p>{capability.demo}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="use-cases">
                    <h3>Perfect For Every Organization</h3>
                    <div className="use-cases-grid">
                        {useCases.map((useCase, index) => (
                            <div key={index} className="use-case-card">
                                <h4>{useCase.title}</h4>
                                <p>{useCase.description}</p>
                                <ul>
                                    {useCase.examples.map((example, exampleIndex) => (
                                        <li key={exampleIndex}>{example}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="services-cta">
                    <h3>Ready to See It in Action?</h3>
                    <p>Schedule a personalized demo to see how our AI agents can transform your specific workflows.</p>
                    <button className="btn btn-primary">Schedule Demo</button>
                </div>
            </div>
        </section>
    );
};

export default Services;