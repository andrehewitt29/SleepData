import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../style.css';

function About() {
    return (
        <div class="container-fluid">
            <Header />
            <br />
            <div style={{textAlign: "center"}}>
            <h1>Our Mission</h1>
            <p>Here at Lifespan Trust, we dedicate ourselves to providing the tools necessary to improve everyone's lives, through the power of sleep.</p>
            </div>
            <br />
            <Footer />
        </div>
    );
}

export default About;