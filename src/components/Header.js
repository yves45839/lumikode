import React, { useEffect, useState } from 'react';
import './Header.css';
import RealHeader from './RealHeader'; // Assurez-vous que ce chemin est correct

const codeLines = [
    "Bienvenue chez LumiKode",
    "Votre Agence de marketing Digitale",
];

const Header = () => {
    const [hidden, setHidden] = useState(false);
    const [showRealHeader, setShowRealHeader] = useState(false);

    useEffect(() => {
        const totalDelay = 3.5 + 3.5; // durée de la première ligne + durée de la deuxième ligne
        const hideTimeout = setTimeout(() => {
            setHidden(true);
            setTimeout(() => setShowRealHeader(true), 1000); // Attendez que l'animation de disparition soit terminée
        }, totalDelay * 1000);

        return () => clearTimeout(hideTimeout);
    }, []);

    return (
        <>
            {!showRealHeader && (
                <header className={`header ${hidden ? 'hidden' : ''}`}>
                    <div className="code-banner">
                        {codeLines.map((line, index) => (
                            <div key={index} className={`code-line line-${index}`}>
                                {line}
                            </div>
                        ))}
                    </div>
                </header>
            )}
            {showRealHeader && <RealHeader />}
        </>
    );
};

export default Header;
