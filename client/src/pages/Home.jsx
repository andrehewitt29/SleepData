import React from 'react';
import dogImg from '../img/sleepingDog.jpg';
import pieChart from '../img/pie_graph_icon.png';
import peopleIcon from '../img/people_icon.png';
import bookImg from '../img/homeBook.png';
import deskImg from '../img/homeDesk.png';

function Home() {
    return (
        <div id="index-page">
            <div class="two-box">
                <div class="sub-box" id="two-section">
                    <div class="title-box">
                        <h1>The Importance of Sleep</h1>
                        <p>Trying to maintain a healthy lifestyle is difficult. But giving yourself enough sleep can provide many benefits!</p>
                        <a class="home-btns" href="SignUp" style={{backgroundColor: "#0C67AD"}}>Sign Up</a>
                        <br />
                    </div>
                    <div id="description-box" class="row">
                        <div class="col-md-6">
                            <img src={pieChart} alt='Pie'/>
                            <p>Scores can help you track your monthly sleep health and automatically generate statistics to guide you along your sleep journey.</p>
                        </div>
                        <div class="col-md-6">
                            <img src={peopleIcon} alt='People'/>
                            <p>By creating an account, you can join online meetings <span id="highlight">live</span> with the author "Brian McKeown" and his associates.</p>
                        </div>
                    </div>
                </div>
                <div class="sub-box"><img class="imgtag" style={{borderRadius: "0"}} src={dogImg} alt='Dog'/></div>
            </div>
            <br />
            <div class="two-box">
                <div class="sub-box"><img class="imgtag" src={bookImg} alt='Book'/></div>
                <div class="sub-box title-box">
                    <h1>Sleep Beyond your Dreams</h1>
                    <p>The book that might have brought you here; "Sleep Beyond your Dreams", provides in-depth wisdom on the importance of sleep towards your mental and physical health, and gives professional advice on how you can help yourself through improving your sleep patterns.</p>
                    <a href="#" class="home-btns" style={{backgroundColor: "#CC8811"}}>Buy</a>
                </div>
            </div>
            <br />
            <div class="two-box">
                <div class="sub-box title-box" style={{width: "100%"}}>
                    <h1>The Questionnaire</h1>
                    <p>Take a free online quiz at our sister website to find out your sleep score today!</p>
                    <a href="http://www.lifespantrust.com/sleep-quiz/" class="home-btns" style={{backgroundColor: "#771188"}}>Quiz</a>
                </div>
                <div class="sub-box"><img class="imgtag" src={deskImg} alt='Desk'/></div>
            </div>
            <br />
        </div>
    );
}

export default Home;