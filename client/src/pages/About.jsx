import React from 'react';

function Our_Mission() {
    
    const bookTitle = "Sleep Beyond your Dreams";

    return (
        <div>
            <h1>Our Mission</h1>
            <p>Here at Lifespan Trust, we dedicate ourselves to providing the tools necessary to improve everyone's lives, through the power of sleep. </p>
            <p>With the help of our website providing services to smooth your sleeping experience, we also like to recommend a book from Brian McKeown <span class="hightlight_blue">'{bookTitle}'</span>. We encourage people to buy and read the book while able to use our services to maximize health efficiency.</p>
            <h2>The Book</h2>
            <p><span class="highlight_blue">{bookTitle}</span> is a advice book describing how your problems and health-related issues are all connected to one thing, obviously you already know the answer is sleep!</p>
            <p>Sleeping improves...</p>
            <ul>
                <li>Increase creativity</li>
                <li>Improve social skills</li>
                <li>Reducing stress</li>
                <li>To focus and concentrate</li>
            </ul>
            <p>Now this may only relate to mental and physical health, but there is more to this. Our website provides this book with a link that you can click here to know more about it.</p> 
            {/* Add an <a> link here.*/}
        </div>
    );
}

function SleepAnalysis() {
    return (
        <div>
            <h1>Sleep Analysis</h1>
                <p>Our team uses statistical analysis to understand your sleep patterns and habits, and provides their expertise to help improve your mental and physical capabilities with better sleep health.</p>
                {/* */}
        </div>
    )
}

function About() {
    return (
        <div class="container-fluid">
            <h1>About</h1>
            <div id="about-page" class="form-background">
                <div id="about-image"></div>
                <div id="article-text">
                    <br />
                    <h1>This website</h1>
                    <p>This website provides you with the ability to monitor, track, and improve their sleeping patterns over time, as well as get personalised advice from our team of experts to make sure you get the best sleep possible!</p>
                    <Our_Mission/>
                    <SleepAnalysis/>
                </div>
            </div>
            <br />
        </div>
    );
}

export default About;