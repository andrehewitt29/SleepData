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
                <input id="userValueInput" /><input id="userValueSearch" class="btn btn-primary" type="button" value="Search" onClick={loadUserData}/>
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