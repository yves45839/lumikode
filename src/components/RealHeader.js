import React from 'react';
import './RealHeader.css';

const RealHeader = () => {
    return (
        <header className="real-header">
            <div className="logo">
                <img src={`${process.env.PUBLIC_URL}/images/logo_lumikode.png`} alt="Logo Lumikode" />
            </div>
            <nav>
                <ul className="nav-list">
                    <li><a href="#nos-solutions">Nos Solutions</a></li>
                    <li><a href="#pourquoi-nous">Pourquoi Nous</a></li>
                    <li><a href="#notre-approche">Notre Approche</a></li>
                    <li><a href="#nos-couts">Nos Coûts</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default RealHeader;
