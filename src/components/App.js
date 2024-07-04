import React from 'react';
import './styles.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Solutions from './components/Solutions';
import Training from './components/Training';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
    return (
        <div>
            <Header />
            <Hero />
            <Services />
            <Solutions />
            <Training />
            <Portfolio />
            <Contact />
        </div>
    );
}

export default App;