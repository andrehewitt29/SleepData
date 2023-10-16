import React from 'react';

function Admin() {
    var dataList = "";
    const fristNameArray = [];
    const lastNameArray = [];
    const uidArray = [];

    async function loadUserUID(){
        //Reset all array
        fristNameArray.length = 0;
        lastNameArray.length = 0;
        uidArray.length = 0;
        //Get all the UID from db
        var UIDDataJson = await fetch('http://localhost:5000/api/sleepData/AllUserUID', {
        method: 'POST',
        headers: { 'Content-Type' : 'application/json'}}
        )
        var UIDList = "";
        await UIDDataJson.json().then(result => UIDList = result);
        
        getNameData(UIDList);  
    }

    async function getNameData(UIDList)
    {
        document.getElementById("info").innerHTML = "<br />Loading...";
        for(var x = 0; x < UIDList.length; x++)
        {
            var nameList = "";
            var uid = UIDList[x]._queryOptions.collectionId;
        //Use the UID to get first name and last name 
        var UIDDataJson = await 
        fetch('http://localhost:5000/api/sleepData/getSettingsWithUid',{
            method: 'POST',
            headers: { 'Content-Type' : 'application/json'},
            body: JSON.stringify(
                {"user": uid}
                )}
            )
        
        await UIDDataJson.json().then(result => nameList = result);
       
            //Push name to array easy to use
            for(var i =0; i< nameList.length; i++)
            {   
                fristNameArray.push(nameList[i].firstNameValue);
                lastNameArray.push(nameList[i].lastNameValue);
            }

        }
        //Push UID to array easy to use
        for(var y = 0 ; y < UIDList.length; y++)
        {
            uidArray.push(UIDList[y]._queryOptions.collectionId);
        }
            
        pushDataToTable();
    }

    async function pushDataToTable(){
        //Get first name and last name from user input
        var firstNameInput = document.getElementById("userFirstNameInput").value;
        var lastNameInput = document.getElementById("userLastNameInput").value;

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

        //If firstNameInput and lastnameInput is empty, searcg all data
       var runUIDSelection = -1;
        if(firstNameInput === "" && lastNameInput === "")
        {

            for(var y= 0 ; y < uidArray.length; y++)
            {
             //Use every UID to get every user details
            var dataJson = await fetch('http://localhost:5000/api/sleepData/getWithUid', {
                method: 'POST',
                headers: { 'Content-Type' : 'application/json'},
                body: JSON.stringify(
                {"user": uidArray[y]}
                )}
                )
                runUIDSelection++;
                await dataJson.json().then(result => dataList = result);

                //Because every call may return one or more than one datas 
                //Need to check the varilabe length first to run though all data and push those data to tableContents
                for(var x = 0; x < dataList.length; x++)
                {   
                    tableContents = tableContents+"<tr><td>" + fristNameArray[runUIDSelection] + " " + lastNameArray[runUIDSelection] +" </td><td>"+ dataList[x][userInputDate] + "</td><td>"+ 
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
            }
            //Check the result is empty by comapre it
            if (tableContents != initialTableContents) {
                document.getElementById("results").innerHTML = tableContents;
            } else {
                document.getElementById("results").innerHTML = "<hr><th>No Results!</th></hr>";
            }
        }
        //Check both input is match or not
        else if(firstNameInput !== "" && lastNameInput !== "")
        {
            for(var i = 0; i < fristNameArray.length; i++)
            {
                runUIDSelection++;
                if(fristNameArray[i] === firstNameInput && lastNameArray[i] === lastNameInput)
                {
                var dataJson = await fetch('http://localhost:5000/api/sleepData/getWithUid', {
                method: 'POST',
                headers: { 'Content-Type' : 'application/json'},
                body: JSON.stringify(
                {"user": uidArray[i]}
                )}
                )
                await dataJson.json().then(result => dataList = result);

                for( x = 0; x < dataList.length; x++)
                {
                    
                    tableContents = tableContents+"<tr><td>" + fristNameArray[runUIDSelection] + " " + lastNameArray[runUIDSelection] +" </td><td>"+ dataList[x][userInputDate] + "</td><td>"+ 
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
                }
            }
            //Check the result is empty by comapre it
            if (tableContents != initialTableContents) {
                document.getElementById("results").innerHTML = tableContents;
            } else {
                document.getElementById("results").innerHTML = "<hr><th>No Results!</th></hr>";
            }
        
        }
        //Check firstNameInput is not empty and lastNameInput is empty
        else if(firstNameInput !== "" && lastNameInput === "")
        {
            for(i = 0; i < fristNameArray.length; i++)
            {
                runUIDSelection++;
                if(fristNameArray[i] === firstNameInput)
                {
                var dataJson = await fetch('http://localhost:5000/api/sleepData/getWithUid', {
                method: 'POST',
                headers: { 'Content-Type' : 'application/json'},
                body: JSON.stringify(
                {"user": uidArray[i]}
                )}
                )
                await dataJson.json().then(result => dataList = result);

                for( x = 0; x < dataList.length; x++)
                {
                    
                    tableContents = tableContents+"<tr><td>" + fristNameArray[runUIDSelection] + " " + lastNameArray[runUIDSelection] +" </td><td>"+ dataList[x][userInputDate] + "</td><td>"+ 
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
                }
            }
            //Check the result is empty by comapre it
            if (tableContents != initialTableContents) {
                document.getElementById("results").innerHTML = tableContents;
            } else {
                document.getElementById("results").innerHTML = "<hr><th>No Results!</th></hr>";
            }
        
        }
        //Check lasyNameInput is not empty and firstNameInput is empty
        else if(lastNameInput !== "" && firstNameInput === "")
        {
            for(i = 0; i < lastNameArray.length; i++)
            {
                runUIDSelection++;
                if(lastNameArray[i] === lastNameInput)
                {
                var dataJson = await fetch('http://localhost:5000/api/sleepData/getWithUid', {
                method: 'POST',
                headers: { 'Content-Type' : 'application/json'},
                body: JSON.stringify(
                {"user": uidArray[i]}
                )}
                )
                await dataJson.json().then(result => dataList = result);

                for( x = 0; x < dataList.length; x++)
                {
                    
                    tableContents = tableContents+"<tr><td>" + fristNameArray[runUIDSelection] + " " + lastNameArray[runUIDSelection] +" </td><td>"+ dataList[x][userInputDate] + "</td><td>"+ 
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
                }
            }
            //Check the result is empty by comapre it
            if (tableContents != initialTableContents) {
                document.getElementById("results").innerHTML = tableContents;
            } else {
                document.getElementById("results").innerHTML = "<hr><th>No Results!</th></hr>";
            }
        
        }

        document.getElementById("info").innerHTML = "";
        document.getElementById("resultsBlock").hidden = false;

        
    }

    return (
        <div class="container-fluid">
            <h1>Search By Users</h1>
            <div class="form-background">
                <input id="userFirstNameInput" placeholder='First Name'/>
                <input id="userLastNameInput" placeholder='Last Name'/>
                <input id="userNameSearch" class="btn btn-primary" type="button" value="Search" onClick={loadUserUID}/>
                <strong><h1 id= "info" ></h1></strong>
            </div>
            <br />
            <div id="resultsBlock" class="form-background" hidden>
                <table id='results'></table>
            </div>
        </div>
    );
    
}

export default Admin;