import React from 'react';
import './App.css';
import Header from './components/Header'; 
import NosSolutions from './components/NosSolutions';
import PourquoiNous from './components/PourquoiNous';
import NotreApproche from './components/NotreApproche';
import NosCouts from './components/NosCouts';

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <NosSolutions/>
                <PourquoiNous />
                <NotreApproche />
                <NosCouts />
            </main>
            <footer className="App-footer">
                <p>Contactez-nous : +225 015 31 31 311 | info@lumikode.com | www.lumikode.com</p>
            </footer>
        </div>
    );
}

export default App;
