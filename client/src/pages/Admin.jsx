import React from 'react';

function Admin() {
    var dataList = "";
    async function loadUserUID(){
        //Get all the UID from db
        var UIDDataJson = await fetch('http://localhost:5000/api/sleepData/AllUserUID', {
        method: 'POST',
        headers: { 'Content-Type' : 'application/json'}}
        )
        var UIDList = "";
        await UIDDataJson.json().then(result => UIDList = result);
        
        const length = Object.keys(UIDList).length;
        
        
        for(let i = 0;i < length; i++)
        {
            getNameData(UIDList[i]._queryOptions.collectionId, i); 
        }
        
    }

    async function getNameData(uid)
    {
        var userInputDate = "userInputDate";
        var addictiveValue = "addictiveValue";
        var readEnjoymentValue = "readEnjoymentValue";
        var fitnessValue = "fitnessValue";
        var chronotypeValue = "chronotypeValue";
        var wellbeingValue = "wellbeingValue";
        var sleepValue = "sleepValue";
        var viaLowestOneValue = "viaLowestOneValue";
        var viaLowestThreefValue = "viaLowestThreefValue";       
        var fallAsleepValue = "fallAsleepValue";
        var viaBestFourValue = "viaBestFourValue";
        var luckValue = "luckValue";
        var exerciseValue = "exerciseValue";
        var readNonFictionValue = "readNonFictionValue";
        var partnerSnoreValue = "partnerSnoreValue";
        var snoreValue = "snoreValue";
        var receivingGiftsPercentage = "receivingGiftsPercentage";
        var readValue = "readValue";
        var gritPercentage = "gritPercentage";
        var physicalTouchPercentage = "physicalTouchPercentage";
        var awakenValue = "awakenValue";
        var gritValue = "gritValue";
        var alcoholValue = "alcoholValue";
        var actsOfServicePercentage = "actsOfServicePercentage";
        var petValue = "petValue";
        var viaLowestFourValue = "viaLowestFourValue";
        var viaBestOneValue = "viaBestOneValue";
        var caffeinatedDateValue = "caffeinatedDateValue";
        var viaLowestFiveValue = "viaLowestFiveValue";
        var viaLowestTwoValue = "viaLowestTwoValue";
        var sleepHourValue = "sleepHourValue";
        var viaBestThreeValue = "viaBestThreeValue";
        var viaBestTwoValue = "viaBestTwoValue";
        var viaBestFiveValue = "viaBestFiveValue";
        var qualityTimePercentage = "qualityTimePercentage";
        var caffeinatedValue = "caffeinatedValue";
        var wordsOfAffirmationPercentage = "wordsOfAffirmationPercentage";
        var stressValue = "stressValue";

        //First row
        var tableContents = "<tr><th>Name</th>"+
        "<th>Input Date</th>"+
        "<th>Read Value</th>"+
        "<th>Read Non Fiction Value</th>"+
        "<th>Read Enjoyment Value</th>"+
        "<th>Luck Value</th>"+
        "<th>Wellbeing Value</th>"+
        "<th>Stress Value</th>"+
        "<th>Sleep Value</th>"+
        "<th>Sleep Hour Value</th>"+
        "<th>Fall  Asleep Value</th>"+
        "<th>Awaken Value</th>"+
        "<th>Chronotype Value</th>"+
        "<th>exerciseValue</th>"+
        "<th>Snore Value</th>"+
        "<th>Partner Snore value</th>"+
        "<th>Disturbed by Pet</th>"+
        "<th>Addictive Personality</th>"+
        "<th>Best VIA Value</th>"+
        "<th>2nd Best VIA Value</th>"+
        "<th>3rd Best VIA Value</th>"+
        "<th>4th Best VIA Value</th>"+
        "<th>5th Best VIA Value</th>"+
        "<th>5th Lowest VIA Value</th>"+
        "<th>4th Lowest VIA Value</th>"+
        "<th>3rd Lowest VIA Value</th>"+
        "<th>2nd Lowest VIA Value</th>"+
        "<th>Lowest VIA Value</th>"+
        "<th>Grit Value</th>"+
        "<th>Grit Percentage</th>"+
        "<th>Physical Touch Percentage</th>"+
        "<th>Quality Time Percentage</th>"+
        "<th>Words Of Affirmation Percentage</th>"+
        "<th>Acts Of Service Percentage</th>"+
        "<th>Receiving Gifts Percentage</th>"+
        "<th>Exercise Mins</th>"+
        "<th>Fitness Score</th>"+
        "<th>Caffeinated Each Day</th>"+
        "<th>Last Caffeinated Date</th>"+
        "<th>Alcohol Day</th>"+
        "</tr>";
        var initialTableContents = tableContents;
        var firstNameInput = document.getElementById("userFirstNameInput").value;
        var lastNameInput = document.getElementById("userLastNameInput").value;

        //Use the UID to get first name and last name 
        var UIDDataJson = await 
        fetch('http://localhost:5000/api/sleepData/getSettingsWithUid',{
            method: 'POST',
            headers: { 'Content-Type' : 'application/json'},
            body: JSON.stringify(
                {"user": uid}
                )}
            )
        var nameList = "";
        await UIDDataJson.json().then(result => nameList = result);
        document.getElementById("info").innerHTML = "<br />Loading...";
            
           if((nameList[0].firstNameValue === firstNameInput && nameList[0].lastNameValue === lastNameInput) || (nameList[0].firstNameValue === firstNameInput && lastNameInput == "") || (nameList[0].lastNameValue === lastNameInput && firstNameInput == ""))
            { 
            //Use the UID to get all details
            var dataJson = await fetch('http://localhost:5000/api/sleepData/getWithUid', {
            method: 'POST',
            headers: { 'Content-Type' : 'application/json'},
            body: JSON.stringify(
            {"user": uid}
            )}
            )
        
        await dataJson.json().then(result => dataList = result);
            
        //Add all the deatils to table
        for(let x = 0; x < dataList.length; x++){
            tableContents = tableContents+"<tr><td>" + firstNameInput + " " + lastNameInput +" </td><td>"+ dataList[x][userInputDate] + "</td><td>"+ 
            dataList[x][readValue] + "</td><td>"+ dataList[x][readNonFictionValue] + "</td><td>"+ dataList[x][readEnjoymentValue] + "</td><td>"+ 
            dataList[x][luckValue] + "</td><td>"+ dataList[x][wellbeingValue] + "</td><td>"+ dataList[x][stressValue] + "</td><td>"+ 
            dataList[x][sleepValue] + "</td><td>"+ dataList[x][sleepHourValue] + "</td><td>"+ dataList[x][fallAsleepValue] + "</td><td>"+ 
            dataList[x][awakenValue] + "</td><td>"+ dataList[x][chronotypeValue] + "</td><td>"+ dataList[x][exerciseValue] + "</td><td>"+ 
            dataList[x][snoreValue] + "</td><td>"+  dataList[x][partnerSnoreValue] + "</td><td>"+ dataList[x][petValue] + "</td><td>"+ 
            dataList[x][addictiveValue] + "</td><td>"+ dataList[x][viaBestOneValue] + "</td><td>"+ dataList[x][viaBestTwoValue] + "</td><td>"+ 
            dataList[x][viaBestThreeValue] + "</td><td>"+ dataList[x][viaBestFourValue] + "</td><td>"+ dataList[x][viaBestFiveValue] + "</td><td>"+ 
            dataList[x][viaLowestFiveValue] + "</td><td>"+ dataList[x][viaLowestFourValue] + "</td><td>"+ dataList[x][viaLowestThreefValue] + "</td><td>"+ 
            dataList[x][viaLowestTwoValue] + "</td><td>"+  dataList[x][viaLowestOneValue] + "</td><td>"+ 
            dataList[x][gritValue] + "</td><td>"+ dataList[x][gritPercentage] + "</td><td>"+ dataList[x][physicalTouchPercentage] + "</td><td>"+ 
            dataList[x][qualityTimePercentage] + "</td><td>"+ dataList[x][wordsOfAffirmationPercentage] + "</td><td>"+ 
            dataList[x][actsOfServicePercentage] + "</td><td>"+ dataList[x][receivingGiftsPercentage] + "</td><td>"+ dataList[x][exerciseValue] + "</td><td>"+ 
            dataList[x][fitnessValue] + "</td><td>"+ dataList[x][caffeinatedValue] + "</td><td>"+ dataList[x][caffeinatedDateValue] + "</td><td>"+ 
            dataList[x][alcoholValue] + "</tr>";
        }

        //Refersh Page show table and run finish
        if (tableContents != initialTableContents) {
            document.getElementById("results").innerHTML = tableContents;
        } else {
            document.getElementById("results").innerHTML = "<hr><th>No Results!</th></hr>";
        }
        document.getElementById("info").innerHTML = "";
    }
    }

    return (
        <div class="container-fluid">
            <h1>Search for Users</h1>
            <div class="form-background">
                <input id="userFirstNameInput" placeholder='First Name'/>
                <input id="userLastNameInput" placeholder='Last Name'/>
                <input id="userNameSearch" class="btn btn-primary" type="button" value="Search" onClick={loadUserUID}/>
                <strong><h1 id= "info" ></h1></strong>
            </div>
            <br />
            <table id='results'></table>
        </div>
    );
}


export default Admin;