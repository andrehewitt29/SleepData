import React from 'react';
import placeholdImg from '../img/card_placeholder.png';
import dogImg from '../img/sleepingDog.jpg';
import pieChart from '../img/pie_graph_icon.png';
import peopleIcon from '../img/people_icon.png';

function Home() {
    return (
        // <div class="container-fluid">
        //     <div id="starter-page">
        //         <div id="starter-paragraph">
        //             <h1>Quote of the Month</h1>
        //             <p>"The greatest blessings of mankind are within us and within our reach. A wise man is content with his lot, whatever it may be, without wishing for what he has not."</p>
        //             <p id="quote">- Seneca</p>
        //         </div>
        //     </div>
        
        //     <div id="second-section">
        //         <h1 id="card-title">Sleep can affect your...</h1>
        //         <div id="group-cards">
        //             <div class="card">
        //                 <img src={placeholdImg} alt=""/>
        //                 <div class="card-paragraph">
        //                     <h1>Mental Health</h1>
        //                     <p>Lack of sleep leads to irratation, aniexty and depression. However having enough sleep shows the opposite of that! Happiness and fulfilment.</p>
        //                 </div>
        //             </div>
        //             <div class="card">
        //                 <img src={placeholdImg} alt=""/>
        //                 <div class="card-paragraph">
        //                     <h1>Education Factor</h1>
        //                     <p>"The hardest people to sell the importance of sleep to, are students." Getting burnout from studying to finish an assessment is such a terrible feeling. Ensure that mental health is more important than studying.</p>
        //                 </div>
        //             </div>
        //             <div class="card">
        //                 <img src={placeholdImg} alt=""/>
        //                 <div class="card-paragraph">
        //                     <h1>Decision Making</h1>
        //                     <p>Poor sleep habits and schedules might affect your daily life decisions including when dealing with your business.</p>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div id="index-page">
            <div class="two-box">
                <div class="sub-box" id="two-section">
                    <div id="title-box">
                        <h1>The Importance of Sleep</h1>
                        <p>Try to maintain that cozy lifestyle by giving you enough shuteye to provide you many benefits!</p>
                        <a id="signup-btn" href="SignUp">Sign Up</a>
                    </div>
                    <div id="description-box">
                        <div>
                            <img src={pieChart}/>
                            <p>Scores can help track your records monthly and automatically generate statistics and graphs for your comparisons</p>
                        </div>
                        <div>
                            <img src={peopleIcon}/>
                            <p>By signing up an account, you can join online meetings <span id="highlight">LIVE</span> with the book writer Brian McKeown and his associates.</p>
                        </div>
                    </div>
                </div>
                <div class="sub-box"><img id="dogtag" src={dogImg}/></div>
            </div>
        </div>
    );
}

export default Home;