import {React, useRef} from 'react';
import {auth} from "../firebase";

function DataForm() {
    // Used to quickly reference the form
    const formRef = useRef();

    // When the submit button is clicked, send all form data as well as the signed in user ID to the backend
    function SubmitClicked() {
        fetch('http://'+ process.env.REACT_APP_IP_ADDRESS +':5000/api/sleepData/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(
                {userData: auth.currentUser,
                formData: {
                    userInputDate: document.getElementById("userInputDate").value,
                    readValue: formRef.current.readValue.value,
                    readNonFictionValue: formRef.current.readNonFictionValue.value,
                    readEnjoymentValue: formRef.current.readEnjoymentValue.value,
                    luckValue: formRef.current.luckValue.value,
                    wellbeingValue: formRef.current.wellbeingValue.value,
                    stressValue: formRef.current.stressValue.value,
                    sleepValue: formRef.current.sleepValue.value,
                    sleepHourValue: formRef.current.sleepHourValue.value,
                    fallAsleepValue: formRef.current.fallAsleepValue.value,
                    awakenValue: formRef.current.awakenValue.value,
                    chronotypeValue: formRef.current.chronotypeValue.value,
                    snoreValue: formRef.current.snoreValue.value,
                    partnerSnoreValue: formRef.current.partnerSnoreValue.value,
                    petValue: formRef.current.petValue.value,
                    addictiveValue: formRef.current.addictiveValue.value,
                    viaBestOneValue: formRef.current.viaBestOneValue.value,
                    viaBestTwoValue: formRef.current.viaBestTwoValue.value,
                    viaBestThreeValue: formRef.current.viaBestThreeValue.value,
                    viaBestFourValue: formRef.current.viaBestFourValue.value,
                    viaBestFiveValue: formRef.current.viaBestFiveValue.value,
                    viaLowestFiveValue: formRef.current.viaLowestFiveValue.value,
                    viaLowestFourValue: formRef.current.viaLowestFourValue.value,
                    viaLowestThreefValue: formRef.current.viaLowestThreefValue.value,
                    viaLowestTwoValue: formRef.current.viaLowestTwoValue.value,
                    viaLowestOneValue: formRef.current.viaLowestOneValue.value,
                    gritValue: formRef.current.gritValue.value,
                    gritPercentage: formRef.current.gritPercentage.value,
                    physicalTouchPercentage: formRef.current.physicalTouchPercentage.value,
                    qualityTimePercentage: formRef.current.qualityTimePercentage.value,
                    wordsOfAffirmationPercentage: formRef.current.wordsOfAffirmationPercentage.value,
                    actsOfServicePercentage: formRef.current.actsOfServicePercentage.value,
                    receivingGiftsPercentage: formRef.current.receivingGiftsPercentage.value,
                    exerciseValue: formRef.current.exerciseValue.value,
                    fitnessValue: formRef.current.fitnessValue.value,
                    caffeinatedValue: formRef.current.caffeinatedValue.value,
                    caffeinatedDateValue: formRef.current.caffeinatedDateValue.value,
                    alcoholValue: formRef.current.alcoholValue.value
                }}
                )
        })
    }

    // Loads and shows the user's data
    async function loadData() {
        var dataJson = await fetch('http://'+ process.env.REACT_APP_IP_ADDRESS +':5000/api/sleepData/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(
                {"user": auth.currentUser}
            )}
        )
        var dataList = "";

        await dataJson.json().then(result => dataList = result);

        // Find the data with same date
        dataList.forEach(element => {
            if (element.userInputDate == document.getElementById("userInputDate").value) {
                document.getElementById("readValue").value = element.readValue;
                document.getElementById("readNonFictionValue").value = element.readNonFictionValue;
                document.getElementById("readEnjoymentValue").value = element.readEnjoymentValue;
                document.getElementById("luckValue").value = element.luckValue;
                document.getElementById("wellbeingValue").value = element.wellbeingValue;
                document.getElementById("stressValue").value = element.stressValue;
                document.getElementById("sleepValue").value = element.sleepValue;
                document.getElementById("sleepHourValue").value = element.sleepHourValue;
                document.getElementById("fallAsleepValue").value = element.fallAsleepValue;
                document.getElementById("awakenValue").value = element.awakenValue;
                document.getElementById("chronotypeValue").value = element.chronotypeValue;
                document.getElementById("snoreValue").value = element.snoreValue;
                document.getElementById("partnerSnoreValue").value = element.partnerSnoreValue;
                document.getElementById("petValue").value = element.petValue;
                document.getElementById("addictiveValue").value = element.addictiveValue;
                document.getElementById("viaBestOneValue").value = element.viaBestOneValue;
                document.getElementById("viaBestTwoValue").value = element.viaBestTwoValue;
                document.getElementById("viaBestThreeValue").value = element.viaBestThreeValue;
                document.getElementById("viaBestFourValue").value = element.viaBestFourValue;
                document.getElementById("viaBestFiveValue").value = element.viaBestFiveValue;
                document.getElementById("viaLowestFiveValue").value = element.viaLowestFiveValue;
                document.getElementById("viaLowestFourValue").value = element.viaLowestFourValue;
                document.getElementById("viaLowestThreefValue").value = element.viaLowestThreefValue;
                document.getElementById("viaLowestTwoValue").value = element.viaLowestTwoValue;
                document.getElementById("viaLowestOneValue").value = element.viaLowestOneValue;
                document.getElementById("gritValue").value = element.gritValue;
                document.getElementById("gritPercentage").value = element.gritPercentage;
                document.getElementById("physicalTouchPercentage").value = element.physicalTouchPercentage;
                document.getElementById("qualityTimePercentage").value = element.qualityTimePercentage;
                document.getElementById("wordsOfAffirmationPercentage").value = element.wordsOfAffirmationPercentage;
                document.getElementById("actsOfServicePercentage").value = element.actsOfServicePercentage;
                document.getElementById("receivingGiftsPercentage").value = element.receivingGiftsPercentage;
                document.getElementById("exerciseValue").value = element.exerciseValue;
                document.getElementById("fitnessValue").value = element.fitnessValue;
                document.getElementById("caffeinatedValue").value = element.caffeinatedValue;
                document.getElementById("caffeinatedDateValue").value = element.caffeinatedDateValue;
                document.getElementById("alcoholValue").value = element.alcoholValue;
            }
        });
    }
    
    var curr = new Date();
    curr.setDate(curr.getDate());
    var date = curr.toISOString().substring(0,10);

    return (
        <div class="container-fluid">
            <h1 onLoad={loadData()}>Sleep Data Form</h1>
            <div class="centered">
                <label>Sleep Data Input Date: <input id="userInputDate" style={{borderRadius: "5px"}} type='date' defaultValue={date} onChange={() => loadData()}></input></label>
            </div>
            <br />
            <div class="row">
                <div class="col-md-3" />
                <div class="col-md-6">
                    <form class="inputAlignHeight" style={{lineHeight: "200%"} } ref={formRef} onSubmit={SubmitClicked}>
                    <div class="form-background">
                        <h5 class="form-title"><strong>General Questions:</strong></h5>
                        <label>How many books do you read each week?</label><input id="readValue" type='number' max={70} min={0}></input><hr style={{margin: "0%"}} />
                        <label>How many non-fiction books do you read each week?</label><input id="readNonFictionValue" type='number' max={70} min={0}></input><hr style={{margin: "0%"}} />
                        <label>How much do you enjoy reading? (Score out of 10)</label><input id="readEnjoymentValue" type='number' max={10} min={0} defaultValue={5}></input><hr style={{margin: "0%"}} />
                        <label>How lucky do you think you are? (Score out of 10)</label><input id="luckValue" type='number' max={10} min={1} defaultValue={5}></input><hr style={{margin: "0%"}} />
                        <label>Wellbeing Score <a href="http://www.lifespantrust.com/wellbeing-quiz/" title="Click here to get your Wellbeing Score!" class="form-link-default" rel="noreferrer" target="_blank">Click here to get your Wellbeing Score!</a></label><input id="wellbeingValue" type='number' max={95} min={0} defaultValue={0}></input><hr style={{margin: "0%"}} />
                        <label>Stress Score <a href="https://www.lifespantrust.com/stress-quiz/" title="Click here to get your Stress Score!" class="form-link-default" rel="noreferrer" target="_blank">Click here to get your Stress Score!</a></label><input id="stressValue" type='number' max={100} min={0} defaultValue={0}></input><hr style={{margin: "0%"}} />
                        <label>Sleep Score <a href="https://www.lifespantrust.com/sleep-quiz/" title="Click here to get your Sleep Score!" class="form-link-default" rel="noreferrer" target="_blank">Click here to get your Sleep Score!</a></label><input id="sleepValue" type='number' max={20} min={0} defaultValue={0}></input><hr style={{margin: "0%"}} />
                        <label>On an average night, how many hours of sleep do you get?</label><input id="sleepHourValue" type='number' max={24} min={0}></input><hr style={{margin: "0%"}} />
                        <label>How long, in terms of minutes, does it take for you to fall asleep?</label><input id="fallAsleepValue" type='number' max={600} min={0}></input><hr style={{margin: "0%"}} />
                        <label>At what time do you normally wake up?</label><input id="awakenValue" type='time'></input><hr style={{margin: "0%"}} />
                        <label>Chronotype <a href="https://sleepdoctor.com/sleep-quizzes/chronotype-quiz/" title="Click here to get your Chronotype!" class="form-link-default" rel="noreferrer" target="_blank">Click here to get your Chronotype!</a></label><select id="chronotypeValue"><option value="Dolphin">Dolphin</option><option value="Lion">Lion</option><option value="Bear">Bear</option><option value="Wolf">Wolf</option></select><hr style={{margin: "0%"}} />
                        <label>Your snoring score (Score out of 10)</label><input id="snoreValue" type='number' max={10} min={1} defaultValue={5}></input><hr style={{margin: "0%"}} />
                        <label>Your partner's snoring score (Score out of 10)</label><input id="partnerSnoreValue" type='number' max={10} min={1} defaultValue={5}></input><hr style={{margin: "0%"}} />
                        <label>Are you normally disturbed during your sleep by a pet?</label><select id="petValue"><option value="Yes">Yes</option><option value="No">No</option></select><hr style={{margin: "0%"}} />
                        <label>Do you have an addictive personality?</label><select id="addictiveValue"><option value="Yes">Yes</option><option value="No">No</option></select><hr style={{margin: "0%"}} />
                    </div>
                    <br />
                    <div class="form-background">
                        <h5 class="form-title"><strong>Via Strengths:</strong></h5>
                        <h6 class="centered"><a href="https://www.authentichappiness.sas.upenn.edu/questionnaires/survey-character-strengths" title="Click here to find out your VIA Strengths!" class="form-link-default" rel="noreferrer" target="_blank">Click here to do the VIA Strength Quiz!</a></h6>
                        <label>Your Best VIA Strength</label><input id="viaBestOneValue"></input><hr style={{margin: "0%"}} />
                        <label>Your 2nd Best VIA Strength</label><input id="viaBestTwoValue"></input><hr style={{margin: "0%"}} />
                        <label>Your 3rd Best VIA Strength</label><input id="viaBestThreeValue"></input><hr style={{margin: "0%"}} />
                        <label>Your 4th Best VIA Strength</label><input id="viaBestFourValue"></input><hr style={{margin: "0%"}} />
                        <label>Your 5th Best VIA Strength</label><input id="viaBestFiveValue"></input><hr style={{margin: "0%"}} />
                        <label>Your 5th Lowest VIA Strength</label><input id="viaLowestFiveValue"></input><hr style={{margin: "0%"}} />
                        <label>Your 4th Lowest VIA Strength</label><input id="viaLowestFourValue"></input><hr style={{margin: "0%"}} />
                        <label>Your 3rd Lowest VIA Strength</label><input id="viaLowestThreefValue"></input><hr style={{margin: "0%"}} />
                        <label>Your 2nd Lowest VIA Strength</label><input id="viaLowestTwoValue"></input><hr style={{margin: "0%"}} />
                        <label>Your Lowest VIA Strength</label><input id="viaLowestOneValue"></input><hr style={{margin: "0%"}} />
                    </div>
                    <br />
                    <div class="form-background">
                        <h5 class="form-title"><strong>Grit Score:</strong></h5>
                        <h6 class="centered"><a href="https://angeladuckworth.com/grit-scale/" title="Click here to find out your Grit Score!" class="form-link-default" rel="noreferrer" target="_blank">Click here to find out your Grit Score!</a></h6>
                        <label>Grit Value</label><input id="gritValue" type='number' max={5} min={1}></input><hr style={{margin: "0%"}} />
                        <label>Grit Percentage</label><input id="gritPercentage" type='number' max={99} min={10}></input><hr style={{margin: "0%"}} />
                    </div>
                    <br />
                    <div class="form-background">
                        <h5 class="form-title"><strong>Love Language Score:</strong></h5>
                        <h6 class="centered"><a href="https://5lovelanguages.com/quizzes/love-language" title="Click here to find out your 5 Love Language Score!" class="form-link-default" rel="noreferrer" target="_blank">Click here to find out your 5 Love Language Score!</a></h6>
                        <label>Physical Touch</label><input id="physicalTouchPercentage" type='number' max={100} min={0}></input><hr style={{margin: "0%"}} />
                        <label>Quality Time</label><input id="qualityTimePercentage" type='number' max={100} min={0}></input><hr style={{margin: "0%"}} />
                        <label>Words of Affirmation</label><input id="wordsOfAffirmationPercentage" type='number' max={100} min={0}></input><hr style={{margin: "0%"}} />
                        <label>Acts of Service</label><input id="actsOfServicePercentage" type='number' max={100} min={0}></input><hr style={{margin: "0%"}} />
                        <label>Receiving Gifts</label><input id="receivingGiftsPercentage" type='number' max={100} min={0}></input><hr style={{margin: "0%"}} />
                    </div>
                    <br />
                    <div class="form-background">
                        <h5 class="form-title"><strong>Exercise Questions:</strong></h5>
                        <label>How many minutes each week do you spend exercising?</label><input id="exerciseValue" type='number' max={7200} min={0} defaultValue={0}></input><hr style={{margin: "0%"}} />
                        <label>How fit do you perceive yourself? (Score out of 10)</label><input id="fitnessValue" type='number' max={10} min={0} defaultValue={5}></input><hr style={{margin: "0%"}} />
                    </div>
                    <br />
                    <div class="form-background">
                        <h5 class="form-title"><strong>Consumption Questions:</strong></h5>
                        <label>How many caffeinated drinks do you consume each day?</label><input id="caffeinatedValue" type='number' max={50} min={0} defaultValue={1}></input><hr style={{margin: "0%"}} />
                        <label>When did you last drink a caffeinated beverage?</label><input id="caffeinatedDateValue" type='date'></input><hr style={{margin: "0%"}} />
                        <label>How many days each week do you drink alcohol?</label><input id="alcoholValue" type='number' max={7} min={0} defaultValue={0}></input><hr style={{margin: "0%"}} />
                    </div>
                    <br />
                    <div class="centered">
                        <input type='submit' id="dataFormSubmitButton" className="btn btn-primary" value="Done"></input><br />
                    </div>
                    </form>
                </div>
                <div class="col-md-3" />
            </div>
        </div>
    );
}

export default DataForm;