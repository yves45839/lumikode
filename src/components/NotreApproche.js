import React, { useState, useEffect } from 'react';
import './NotreApproche.css';

const steps = [
    {
        title: "Analyse Initiale",
        description: "Nous analysons vos besoins et définissons les axes d'amélioration.",
        icon: "🔍"
    },
    {
        title: "Définition des Objectifs",
        description: "Nous définissons ensemble des objectifs clairs et mesurables.",
        icon: "🎯"
    },
    {
        title: "Mise en Œuvre",
        description: "Nous mettons en place les solutions adaptées pour atteindre vos objectifs.",
        icon: "⚙️"
    },
    {
        title: "Suivi et Ajustement",
        description: "Nous suivons les résultats et ajustons la stratégie si nécessaire.",
        icon: "📈"
    }
];

const NotreApproche = () => {
    const [visibleSteps, setVisibleSteps] = useState([]);

    useEffect(() => {
        let currentStep = 0;
        const interval = setInterval(() => {
            setVisibleSteps(prev => {
                if (prev.length < steps.length) {
                    return [...prev, steps[prev.length]];
                } else {
                    currentStep++;
                    if (currentStep >= steps.length) {
                        currentStep = 0;
                        setVisibleSteps([]);
                    }
                    return prev;
                }
            });
        }, 1500); // Adjust this to change the delay between steps

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="notre-approche" className="approach-section">
            <h2 className="section-title">Notre Approche</h2>
            <div className="approach-grid">
                {visibleSteps.map((step, index) => (
                    <div key={index} className="approach-card">
                        <div className="approach-icon">{step.icon}</div>
                        <h3 className="approach-step-title">{step.title}</h3>
                        <p className="approach-step-description">{step.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default NotreApproche;
