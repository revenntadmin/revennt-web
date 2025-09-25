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
            description: 'Runs locally or on cloud for optimal data sovereignty and security.',
            features: [
                'Complete local data storage',
                'No third-party data sharing',
                'Full data sovereignty control',
                'Flexible deployment options',
                'Maximum privacy protection'
            ],
            demo: 'Your data stays completely local and is never shared with any third parties, giving you complete control over your information.'
        },
        {
            title: 'LLM Selection & Multi-Agent Deployment',
            description: 'Choose from any LLM and deploy multiple agents for different tasks with expert guidance.',
            features: [
                'Select any LLM that fits your needs',
                'Deploy multiple specialized agents',
                'Expert recommendations for your use case',
                'Custom agent configurations',
                'Seamless integration with your preferred models'
            ],
            demo: 'We help you choose the perfect LLM for your specific requirements and deploy multiple agents to handle different aspects of your workflow.'
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
                                <h4>Example:</h4>
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
                    <a href='https://calendly.com/revennt-llc/30min' target='_blank' className="btn btn-primary">Schedule Demo</a>
                </div>
            </div>
        </section>
    );
};

export default Services;