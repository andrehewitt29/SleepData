import React from 'react';

function SearchByValue() {

    async function loadUserData() {
        var input = document.getElementById("userValueInput").value;

        if (input != "") {
            document.getElementById("info").innerHTML = "<br />Loading...";

            var tableContents = "<tr><th>Name</th><th>User ID</th><th>Date Submitted</th><th>Value</th></tr>";
            

            var UIDDataJson = await fetch('http://localhost:5000/api/sleepData/AllUserUID', {
            method: 'POST',
            headers: { 'Content-Type' : 'application/json'}}
            )
            var UIDList = "";
            await UIDDataJson.json().then(result => UIDList = result);

            for (var i = 0; i < UIDList.length; i++) {
                var settingsDataJson = await fetch('http://localhost:5000/api/sleepData/getSettingsWithUid', {
                method: 'POST',
                headers: { 'Content-Type' : 'application/json'},
                body: JSON.stringify(
                    {"user": UIDList[i]._queryOptions.collectionId}
                )}
                )
                var settingsDataList = "";
                await settingsDataJson.json().then(result => settingsDataList = result);

                var dataJson = await fetch('http://localhost:5000/api/sleepData/getWithUid', {
                method: 'POST',
                headers: { 'Content-Type' : 'application/json'},
                body: JSON.stringify(
                    {"user": UIDList[i]._queryOptions.collectionId}
                )}
                )
                var dataList = "";
                await dataJson.json().then(result => dataList = result);

                for (var a = 0; a < dataList.length; a++) {
                    tableContents = tableContents + "<tr><td>" + settingsDataList[0].firstNameValue + " " + settingsDataList[0].lastNameValue + "</td><td>" + UIDList[i]._queryOptions.collectionId + "</td><td>" + dataList[a].userInputDate + "</td><td>" + dataList[a][input] + "</td></tr>"
                }
            }

            document.getElementById("resultsSBV").innerHTML = tableContents;
            document.getElementById("info").innerHTML = "";
            document.getElementById("resultsBlock").hidden = false;
        }
    }

    return (
        <div class="container-fluid">
            <h1>Search By Value</h1>
            <div class="form-background">
            <select id = "userValueInput" name='userValueInput' style={{color: "black"}}>
                <option disabled selected value> -- Select an Value -- </option>
                    <option value = "readValue">Read Value</option>
                    <option value = "readNonFictionValue">Read Non Fiction Value</option>
                    <option value = "readEnjoymentValue">Read Enjoyment Value</option>
                    <option value = "luckValue">Luck Value</option>
                    <option value = "wellbeingValue">Wellbeing Value</option>
                    <option value = "stressValue">Stress Value</option>
                    <option value = "sleepValue">Sleep Value</option>
                    <option value = "sleepHourValue">Sleep Hour Value</option>
                    <option value = "fallAsleepValue">Fall Asleep Value</option>
                    <option value = "awakenValue">Awaken Value</option>
                    <option value = "chronotypeValue">Chronotype Value</option>
                    <option value = "exerciseValue">Exercise Value</option>
                    <option value = "snoreValue">Snore Value</option>
                    <option value = "partnerSnoreValue">Partner Snore value</option>
                    <option value = "petValue">Disturbed by Pet</option>
                    <option value = "addictiveValue">Addictive Personality</option>
                    <option value = "viaBestOneValue">Best VIA Value</option>
                    <option value = "viaBestTwoValue">2nd Best VIA Value</option>
                    <option value = "viaBestThreeValue">3rd Best VIA Value</option>
                    <option value = "viaBestFourValue">4th Best VIA Value</option>
                    <option value = "viaBestFiveValue">5th Best VIA Value</option>
                    <option value = "viaLowestFiveValue">5th Lowest VIA Value</option>
                    <option value = "viaLowestFourValue">4th Lowest VIA Value</option>
                    <option value = "viaBestThreeValue">3rd Lowest VIA Value</option>
                    <option value = "viaBestTwoValue">2nd Lowest VIA Value</option>
                    <option value = "viaLowestOneValue">Lowest VIA Value</option>
                    <option value = "gritValue">Grit Value</option>
                    <option value = "gritPercentage">Grit Percentage</option>
                    <option value = "physicalTouchPercentage">Physical Touch Percentage</option>
                    <option value = "qualityTimePercentage">Quality Time Percentage</option>
                    <option value = "wordsOfAffirmationPercentage">Words Of Affirmation Percentage</option>
                    <option value = "actsOfServicePercentage">Acts Of Service Percentage</option>
                    <option value = "receivingGiftsPercentage">Receiving Gifts Percentage</option>
                    <option value = "exerciseValue">Exercise Mins</option>
                    <option value = "fitnessValue">Fitness Score</option>
                    <option value = "caffeinatedValue">Caffeinated Each Day</option>
                    <option value = "caffeinatedDateValue">Last Caffeinated Date</option>
                    <option value = "alcoholValue">Alcohol Day</option>
                    
                </select>
                <input id="userValueSearch" class="btn btn-primary" type="button" value="Search" onClick={loadUserData}/>
                <strong><h1 id= "info" ></h1></strong>
            </div>
            <br />
            <div id="resultsBlock" class="form-background" hidden>
                <table id='resultsSBV'></table>
            </div>
        </div>
    );
}


export default SearchByValue;