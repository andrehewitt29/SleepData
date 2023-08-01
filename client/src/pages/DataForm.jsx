import React from 'react';
import {auth} from "../firebase";

function SubmitClicked(){
    const headers = { 'Content-Type': 'application/json' }
    
    fetch('http://localhost:5000/api/sleepData/testUser', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(
            {userData: auth.currentUser},
            {formData: }
            )
    })
}

function DataForm() {
    if (auth.currentUser != null) {
        return (
            <div class="container-fluid">
                <h1 style={{textAlign: "center"}}><strong>Sleep Data Form</strong></h1>
                <h5 style={{textAlign: "center", color: "#AAAAAA"}}>Hover your mouse over the "<span title="Just like this!">(?)</span>" symbol for more information about the question!</h5>
                <br />
                <div class="row">
                    <div class="col-md-3" />
                    <div class="col-md-6">
                        <form class="inputAlignHeight" style={{lineHeight: "200%"}}>
                            <h5 style={{textAlign: "center"}}><strong>General Questions:</strong></h5>
                            <label>How many books do you read each week?</label><input id="readValue" type='number' max={70} min={0}></input><br />
                            <label>How many non-fiction books do you read each week?</label><input id="readNonFictionValue" type='number' max={70} min={0}></input><br />
                            <label>How much do you enjoy reading? (Score out of 10)</label><input id="readEnjoymentValue" type='number' max={10} min={0} defaultValue={5}></input><br />
                            <label>How lucky do you think you are? (Score out of 10)</label><input id="luckValue" type='number' max={10} min={1} defaultValue={5}></input><br />
                            <label>Dyslexic Score <span title="The Dyslexia Quiz can be found in Brian McKeown's book, 'Sleep Beyond Your Dreams'">(?)</span></label><input id="dyslexicValue" type='number' max={40} min={0} defaultValue={0}></input><br />
                            <label>Self-Focus Score <span title="The Self-Focus Quiz can be found in Brian McKeown's book, 'Sleep Beyond Your Dreams'">(?)</span></label><input id="selfFocusValue" type='number' max={40} min={0} defaultValue={0}></input><br />
                            <label>Wellbeing Score <a href="http://www.lifespantrust.com/wellbeing-quiz/" title="Click here to take the Wellbeing Quiz to get your Wellbeing Score!" style={{color: "inherit", textDecoration: "inherit"}} rel="noreferrer" target="_blank">(?)</a></label><input id="wellbeingValue" type='number' max={95} min={0} defaultValue={0}></input><br />
                            <label>Stress Score <a href="https://www.lifespantrust.com/stress-quiz/" title="Click here to take the Stress Quiz to get your Stress Score!" style={{color: "inherit", textDecoration: "inherit"}} rel="noreferrer" target="_blank">(?)</a></label><input id="stressValue" type='number' max={100} min={0} defaultValue={0}></input><br />
                            <label>Sleep Score <a href="https://www.lifespantrust.com/sleep-quiz/" title="Click here to take the Sleep Quiz to get your Sleep Score!" style={{color: "inherit", textDecoration: "inherit"}} rel="noreferrer" target="_blank">(?)</a></label><input id="sleepValue" type='number' max={20} min={0} defaultValue={0}></input><br />
                            <label>On an average night, how many hours of sleep do you get?</label><input id="sleepHourValue" type='number' max={24} min={0}></input><br />
                            <label>How long, in terms of minutes, does it take for you to fall asleep?</label><input id="fallAsleepValue" type='number' max={600} min={0}></input><br />
                            <label>At what time do you normally wake up?</label><input id="awakenValue" type='time'></input><br />
                            <label>Chronotype <a href="https://sleepdoctor.com/sleep-quizzes/chronotype-quiz/" title="Click here to take the Chronotype Quiz to get your Chronotype!" style={{color: "inherit", textDecoration: "inherit"}} rel="noreferrer" target="_blank">(?)</a></label><select id="chronotypeValue"><option value="Dolphin">Dolphin</option><option value="Lion">Lion</option><option value="Bear">Bear</option><option value="Wolf">Wolf</option></select><br />
                            <label>Your snoring score (Score out of 10)</label><input id="snoreValue" type='number' max={10} min={1} defaultValue={5}></input><br />
                            <label>Your partner's snoring score (Score out of 10)</label><input id="partnerSnoreValue" type='number' max={10} min={1} defaultValue={5}></input><br />
                            <label style={{color: "red"}}>Note: Ask about the snoring scores as they are only briefly mentioned in the book, and how the score is calculated is never stated.</label><br />
                            <label>Are you normally disturbed during your sleep by a pet?</label><select id="petValue"><option value="Yes">Yes</option><option value="No">No</option></select><br />
                            <label>Do you have an addictive personality?</label><select id="petValue"><option value="Yes">Yes</option><option value="No">No</option></select><br />
                            <br />
                            <h5 style={{textAlign: "center"}}><strong>Via Strengths <a href="https://www.authentichappiness.sas.upenn.edu/questionnaires/survey-character-strengths" title="Click here to find out your VIA Strengths!" style={{color: "inherit", textDecoration: "inherit"}} rel="noreferrer" target="_blank">(?)</a>:</strong></h5>
                            <h5 style={{textAlign: "center", color: "red"}}><strong>Note: Ask about this one because this requires the user to make an account on a different website and take a 40 minute quiz. I don't think a user would be willing to put up with that.</strong></h5>
                            <label>Your Best VIA Strength</label><input id="viaOneValue"></input><br />
                            <label>Your 2nd Best VIA Strength</label><input id="viaBestTwoValue"></input><br />
                            <label>Your 3rd Best VIA Strength</label><input id="viaBestThreeValue"></input><br />
                            <label>Your 4th Best VIA Strength</label><input id="viaBestFourValue"></input><br />
                            <label>Your 5th Best VIA Strength</label><input id="viaBestFiveValue"></input><br />
                            <label>Your 5th Worst VIA Strength</label><input id="viaWorstFiveValue"></input><br />
                            <label>Your 4th Worst VIA Strength</label><input id="viaWorstFourValue"></input><br />
                            <label>Your 3rd Worst VIA Strength</label><input id="viaWorstThreefValue"></input><br />
                            <label>Your 2nd Worst VIA Strength</label><input id="viaWorstTwoValue"></input><br />
                            <label>Your Worst VIA Strength</label><input id="viaWorstOneValue"></input><br />
                            <br />
                            <h5 style={{textAlign: "center"}}><strong>Grit Score <a href="https://angeladuckworth.com/grit-scale/" title="Click here to find out your Grit Score!" style={{color: "inherit", textDecoration: "inherit"}} rel="noreferrer" target="_blank">(?)</a>:</strong></h5>
                            <label>Grit Value</label><input id="gritValue" type='number' max={5} min={1}></input><br />
                            <label>Grit Percentage</label><input id="gritPercentage" type='number' max={99} min={10}></input><br />
                            <br />
                            <h5 style={{textAlign: "center"}}><strong>Love Language Score <a href="https://5lovelanguages.com/quizzes/love-language" title="Click here to find out your 5 Love Language Score!" style={{color: "inherit", textDecoration: "inherit"}} rel="noreferrer" target="_blank">(?)</a>:</strong></h5>
                            <label>Physical Touch</label><input id="physicalTouchPercentage" type='number' max={100} min={0}></input><br />
                            <label>Quality Time</label><input id="qualityTimePercentage" type='number' max={100} min={0}></input><br />
                            <label>Words of Affirmation</label><input id="wordsOfAffirmationPercentage" type='number' max={100} min={0}></input><br />
                            <label>Acts of Service</label><input id="actsOfServicePercentage" type='number' max={100} min={0}></input><br />
                            <label>Receiving Gifts</label><input id="receivingGiftsPercentage" type='number' max={100} min={0}></input><br />
                            <br />
                            <h5 style={{textAlign: "center"}}><strong>Exercise Questions:</strong></h5>
                            <label>How many minutes each week do you spend exercising?</label><input id="exerciseValue" max={7200} defaultValue={0}></input><br />
                            <label>How fit do you perceive yourself? (Score out of 10)</label><input id="fitnessValue" type='number' max={10} min={0} defaultValue={5}></input><br />
                            <br />
                            <h5 style={{textAlign: "center"}}><strong>Consumption Questions:</strong></h5>
                            <label>How many cups of coffee do you drink each day?</label><input id="coffeeValue" type='number' max={50} min={0} defaultValue={1}></input><br />
                            <label>When did you last drink a cup of coffee?</label><input id="coffeeDateValue" type='date'></input><br />
                            <label>How many days each week do you drink alcohol?</label><input id="alcoholValue" type='number' max={7} min={0} defaultValue={0}></input><br />
                            <br />
                            <input type='submit' value="Done" style={{float: "left"}} onClick={SubmitClicked}></input>
                        </form>
                    </div>
                    <div class="col-md-3" />
                </div>
            </div>
        );
    }
    
    return (
        <div class="container-fluid">
            <h1 style={{textAlign: "center"}}>You must be Logged In to access this page.</h1>
        </div>
    );
}

export default DataForm;