import React from 'react';
import './NosSolutions.css';

const solutions = [
    {
        title: "Stratégie des Réseaux Sociaux",
        description: "Nous développons une stratégie efficace pour augmenter votre présence en ligne.",
        image: `${process.env.PUBLIC_URL}/images/social_media_strategy.jpg`,
    },
    {
        title: "Gestion de Communauté",
        description: "Nous construisons et engageons une communauté autour de votre marque.",
        image: `${process.env.PUBLIC_URL}/images/community_management.jpg`,
    },
    {
        title: "Création de Contenu",
        description: "Nous créons du contenu de qualité qui attire et retient l'attention.",
        image: `${process.env.PUBLIC_URL}/images/content_creation.jpg`,
    },
    {
        title: "Veille Concurrentielle",
        description: "Nous restons à l'affût de la concurrence avec une veille stratégique.",
        image: `${process.env.PUBLIC_URL}/images/competitive_intelligence.jpg`,
    },
    {
        title: "Rapports & Analyses",
        description: "Nous analysons les performances et optimisons vos stratégies.",
        image: `${process.env.PUBLIC_URL}/images/reporting_analytics.jpg`,
    },
    {
        title: "Gestion de Crise",
        description: "Nous vous aidons à gérer efficacement les situations de crise.",
        image: `${process.env.PUBLIC_URL}/images/crisis_management.jpg`,
    },
];

const NosSolutions = () => {
    return (
        <section id="nos-solutions" className="solutions-section">
            <h2 className="solutions-title">Nos Solutions</h2>
            <div className="solutions-grid">
                {solutions.map((solution, index) => (
                    <div key={index} className="solution-card">
                        <img src={solution.image} alt={solution.title} className="solution-image" />
                        <div className="solution-content">
                            <h3 className="solution-title">{solution.title}</h3>
                            <p className="solution-description">{solution.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default NosSolutions;
