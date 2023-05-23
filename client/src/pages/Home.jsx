import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../style.css';
import placeholdImg from '../img/card_placeholder.png';

function Home() {
    return (
        <div class="container-fluid">
            {Header('home')}
            <div id="starter-page">
                <div id="starter-paragraph">
                    <h1>Quote of the Month</h1>
                    <p>"The greatest blessings of mankind are within us and within our reach. A wise man is content with his lot, whatever it may be, without wishing for what he has not."</p>
                    <p id="quote">- Seneca</p>
                </div>
            </div>
        
            <div id="second-section">
                <h1 id="card-title">Sleep can affect your...</h1>
                <div id="group-cards">
                    <div class="card">
                        <img src={placeholdImg} alt=""/>
                        <div class="card-paragraph">
                            <h1>Mental Health</h1>
                            <p>Lack of sleep leads to irratation, aniexty and depression. However having enough sleep shows the opposite of that! Happiness and fulfilment.</p>
                        </div>
                    </div>
                    <div class="card">
                        <img src={placeholdImg} alt=""/>
                        <div class="card-paragraph">
                            <h1>Education Factor</h1>
                            <p>"The hardest people to sell the importance of sleep to, are students." Getting burnout from studying to finish an assessment is such a terrible feeling. Ensure that mental health is more important than studying.</p>
                        </div>
                    </div>
                    <div class="card">
                        <img src={placeholdImg} alt=""/>
                        <div class="card-paragraph">
                            <h1>Decision Making</h1>
                            <p>Poor sleep habits and schedules might affect your daily life decisions including when dealing with your business.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;