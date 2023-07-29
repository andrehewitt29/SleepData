import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../style.css';

function SubmitClicked(){
    const headers = { 'Content-Type': 'application/json' }
    
    fetch('http://localhost:5000/api/sleepData/testUser', { 
        body: JSON.stringify({test: 'hello world'})
    })
}

function DataForm() {
    return (
        <div class="container-fluid">
            <Header />
            <br />
            <h1 style={{textAlign: "center"}}><strong>Sleep Data Form:</strong></h1>
            <br />
            <div class="row">
                <div class="col-md-3" />
                <div class="col-md-6">
                    <form class="inputAlignHeight" style={{lineHeight: "200%"}}>
                        <label>How many books do you read each week?</label><input id="readValue" type='number' max={70} min={0}></input><br />
                        <label>How much do you enjoy reading? (Score out of 10)</label><input id="readEnjoymentValue" type='number' max={10} min={0} defaultValue={5}></input><br />
                        <label>How many non-fiction books do you read each week?</label><input id="readNonFictionValue" type='number' max={70} min={0}></input><br />
                        <label>Dyslexic Score(???)</label><input id="dyslexicValue" type='number'></input><br />
                        <label>Self-Focus Score(???)</label><input id="selfFocusValue" type='number'></input><br />
                        <label>How lucky do you think you are? (Score out of 10)</label><input id="luckValue" type='number' max={10} min={0} defaultValue={5}></input><br />
                        <label>Wellbeing Score(???)</label><input id="wellbeingValue" type='number'></input><br />
                        <label>How stressed do you perceive yourself? (Score out of 10)</label><input id="stressValue" type='number' max={10} min={0} defaultValue={5}></input><br />
                        <br />
                        <label>On an average night, how many hours of sleep do you get?</label><input id="sleepValue" type='number' max={24} min={0}></input><br />
                        <label>How long, in terms of minutes, does it take for you to fall asleep?</label><input id="fallAsleepValue" type='number' max={600} min={0}></input><br />
                        <label>At what time do you normally wake up?</label><input id="awakenValue" type='time'></input><br />
                        <label>Chronotype(???)</label><input id="chronotypeValue"></input><br />
                        <label>Your snoring score(???)</label><input id="snoreValue"></input><br />
                        <label>Your partner's snoring score(???)</label><input id="partnerSnoreValue"></input><br />
                        <label>Are you normally disturbed during your sleep by a pet?</label><select id="petValue"><option value="Yes">Yes</option><option value="No">No</option></select><br />
                        <br />
                        <h2><strong>Via Strengths. Need to recreate test on this website: https://www.viacharacter.org/</strong></h2><br />
                        <br />
                        <h2><strong>Grit Score. Need to recreate test on this website: https://angeladuckworth.com/grit-scale/</strong></h2><br />
                        <br />
                        <h2><strong>Love Language Score(???)</strong></h2><br />
                        <br />
                        <label>How many minutes each week do you spend exercising?</label><input id="exerciseValue" max={7200} defaultValue={0}></input><br />
                        <label>How fit do you perceive yourself? (Score out of 10)</label><input id="fitnessValue" type='number' max={10} min={0} defaultValue={5}></input><br />
                        <br />
                        <label>How many cups of coffee do you drink each day?</label><input id="coffeeValue" type='number' max={50} min={0} defaultValue={1}></input><br />
                        <label>When did you last drink a cup of coffee?</label><input id="coffeeDateValue" type='date'></input><br />
                        <label>How many days each week do you drink alcohol?</label><input id="alcoholValue" type='number' max={7} min={0} defaultValue={0}></input><br />
                        <br />
                        <label>Do you have an addictive personality?</label><select id="petValue"><option value="Yes">Yes</option><option value="No">No</option></select><br />
                        <br />
                        <input type='submit' value="Done" onClick={SubmitClicked}></input>
                    </form>
                </div>
                <div class="col-md-3" />
            </div>
            <br />
            <Footer />
        </div>
    );
}

export default DataForm;