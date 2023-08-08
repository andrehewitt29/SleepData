import React from 'react';
import dogImg from '../img/sleepingDog.jpg';
import pieChart from '../img/pie_graph_icon.png';
import peopleIcon from '../img/people_icon.png';

function Home() {
    return (
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
                            <img src={pieChart} alt='Pie'/>
                            <p>Scores can help track your records monthly and automatically generate statistics and graphs for your comparisons</p>
                        </div>
                        <div>
                            <img src={peopleIcon} alt='People'/>
                            <p>By signing up an account, you can join online meetings <span id="highlight">live</span> with the book writer Brian McKeown and his associates.</p>
                        </div>
                    </div>
                </div>
                <div class="sub-box"><img id="dogtag" src={dogImg} alt='Dog'/></div>
            </div>
        </div>
    );
}

export default Home;