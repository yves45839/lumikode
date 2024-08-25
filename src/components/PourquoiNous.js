import React from 'react';
import './PourquoiNous.css';
import { FaBrain, FaUserCheck, FaChartLine, FaBolt } from 'react-icons/fa'; // Assurez-vous que react-icons est bien installé

const PourquoiNous = () => {
    const points = [
        {
            icon: <FaBrain />,
            title: "Expertise",
            description: "Nous avons une expertise approfondie en marketing digital, assurant des solutions efficaces et adaptées."
        },
        {
            icon: <FaUserCheck />,
            title: "Personnalisation",
            description: "Chaque stratégie est personnalisée pour répondre aux besoins uniques de chaque client."
        },
        {
            icon: <FaChartLine />,
            title: "Proactivité",
            description: "Nous anticipons les tendances pour vous garder à l'avant-garde du marché."
        },
        {
            icon: <FaBolt />,
            title: "Réactivité",
            description: "Notre équipe est réactive, assurant une gestion rapide et efficace de vos besoins."
        }
    ];

    return (
        <section id="pourquoi-nous" className="pourquoi-nous-section">
            <h2 className="section-title">Pourquoi Nous ?</h2>
            <div className="points-grid">
                {points.map((point, index) => (
                    <div key={index} className="point-card">
                        <div className="icon">{point.icon}</div>
                        <h3 className="point-title">{point.title}</h3>
                        <p className="point-description">{point.description}</p>
                    </div>
                ))}
            </div>
            <div className="custom-phrase-container">
                <p className="custom-phrase">
                    Nous sommes à la fois votre <span className="highlight">WebMaster</span>, votre <span className="highlight">Community Manager</span>, et votre <span className="highlight">IT</span>.
                </p>
            </div>
        </section>
    );
};

export default PourquoiNous;
